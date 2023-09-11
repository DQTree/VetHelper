import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { Worker } from 'worker_threads'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import dbops from '../main/db'
import icon from '../../resources/bonee.ico?asset'

const path = require('path')
require('dotenv').config('.env')
const env = process.env.DEV_ENV

const PouchDB = require('pouchdb')
const db = new PouchDB('vetdb')
const dbaux = dbops(db)

let worker

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? {} : { icon }),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

app.on('ready', () => {
  ipcMain.handle('exportDataToJSON', async () => {
    try {
      const data = await dbaux.backupdb()
      // Return the data to the renderer process
      return data
    } catch (error) {
      console.error('Error exporting data:', error)
      throw error
    }
  })

  ipcMain.handle('fetchData', async () => {
    try {
      // Fetch all documents
      const result = await db.allDocs({ include_docs: true })
      // Return an array of documents to the renderer process
      return result.rows.map((row) => row.doc)
    } catch (error) {
      console.error('Error fetching data from the database:', error)
      // Return null or an error indicator to the renderer process
      return null
    }
  })

  ipcMain.handle('addEntry', async (event, data) => {
    try {
      // Perform the database operation to add the new entry
      const response = await db.put(data)
      // Return the response to the renderer process
      return response
    } catch (error) {
      console.error('Error adding entry to the database:', error)
      // Return null or an error indicator to the renderer process
      return null
    }
  })

  // Listen for messages from the worker thread
  ipcMain.on('backupCompleted', (event, message) => {
    console.log('Backup completed:', message)
    // Handle backup completion if needed
  })

  dbaux.setupIndexesDb()

  // Create the worker thread when the app is ready
  worker = new Worker('../vethelper/src/main/backupWorker.mjs')
})

function triggerBackup() {
  // Send a message to the worker thread to initiate the backup
  worker.postMessage('startBackup')
}

//  If development environment
if (env === 'TRUE') {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
  })
}
