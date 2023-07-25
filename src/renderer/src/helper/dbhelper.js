export default function (ipcR) {
  return {
    addEntry: addEntry,
    downloadToJson: exportDataToJSON,
    viewData: getTable
  }

  async function addEntry(doc) {
    await ipcR
      .invoke('addEntry', doc)
      .then((response) => {
        console.log('New entry added. Response:', response)
      })
      .catch((err) => {
        console.error('Error adding new entry:', err)
      })
  }

  async function exportDataToJSON() {
    try {
      // Invoke the 'exportDataToJSON' function in the main process
      const data = await ipcR.invoke('exportDataToJSON')

      // Create a Blob with the JSON data
      const jsonData = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json'
      })

      // Generate a download link for the Blob
      const downloadLink = document.createElement('a')
      downloadLink.href = URL.createObjectURL(jsonData)
      downloadLink.download = 'my_data_export.json'

      // Trigger the download
      downloadLink.click()
    } catch (error) {
      console.error('Error exporting data:', error)
    }
  }

  async function getTable() {
    await ipcR
      .invoke('fetchData')
      .then((db) => {
        return db
      })
      .catch((err) => {
        console.error('Error fetching document from the main process:', err)
      })
  }
}
