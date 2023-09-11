<template>
  <div class="cv-main-body-content">
    <div class="cv-comp-header">
      <h1>Criar ficha</h1>
    </div>
    <div class="cv-comp-body">
      <div>

      </div>
      <div>
        <button type="button" @click="handleViewDataClick">View Data</button>
        <button type="button" @click="handleExportDataToJSONClick">Export to JSON</button>
        <button type="button" @click="handleAddEntryClick">Add entry</button>
      </div>
    </div>
  </div>
</template>
<script>
import * as dbhelper from '../../helper/dbhelper'
//  Access the Electron API through the 'electron' object exposed by the preload script
const { ipcRenderer } = window.electron
//  Access your custom API through the 'api' object exposed by the preload script
//  const api = window.api

const db = dbhelper.default(ipcRenderer)

export default {
  methods: {
    async handleAddEntryClick() {
      const newEntry = {}

      try {
        await db.addEntry(newEntry)
      } catch (error) {
        // Handle error if needed
      }
    },
    async handleExportDataToJSONClick() {
      try {
        await db.downloadToJson()
      } catch (error) {
        // Handle error if needed
      }
    },
    async handleViewDataClick() {
      try {
        const data = await db.viewData()
        console.log(data)
      } catch (error) {
        // Handle error if needed
      }
    }
  }
}
</script>
<style>
.cv-main-body-content {
  margin: 2vh;
}
</style>
