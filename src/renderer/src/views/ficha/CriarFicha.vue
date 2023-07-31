<template>
  <div>
    <h1>Criar ficha</h1>
  </div>
  <div>
    <button type="button" @click="handleViewDataClick">View Data</button>
    <button type="button" @click="handleExportDataToJSONClick">Export to JSON</button>
    <button type="button" @click="handleAddEntryClick">Add entry</button>
  </div>
  <div class="cv-container">
    <ButtonComponent link="/home" tit="home" bttnlabel="Home"></ButtonComponent>
  </div>
</template>
<script>
import ButtonComponent from '../../components/Button.vue'
import * as dbhelper from '../../helper/dbhelper'
//  Access the Electron API through the 'electron' object exposed by the preload script
const { ipcRenderer } = window.electron
//  Access your custom API through the 'api' object exposed by the preload script
//  const api = window.api

const db = dbhelper.default(ipcRenderer)

export default {
  components: {
    ButtonComponent
  },
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
