export default function (db) {
  return {
    addToDb: add,
    deleteFromDb: del,
    exportDb: backupDb,
    importDb: importDb,
    setupIndexesDb: setupIdxdb
  }

  async function add(data, type) {}

  async function del(data, type) {}

  async function backupDb(type) {
    let data
    let docs
    if (type == 'ALL') {
      // Fetch all documents from the PouchDB
      docs = await db.allDocs({ include_docs: true })
    } else {
      docs = await db.allDocs({ include_docs: true })
    }
    // Extract the data from each document
    data = docs.rows.map((row) => row.doc)

    return data
  }

  async function importDb(type) {}

  async function setupIdxdb() {
    // Array of index names
    const indexNames = ['animais', 'consultas', 'animals']

    // Define the index function to be shared across all indexes
    const indexFunction = {
      map: function (doc) {
        if (doc.type) {
          emit(doc.type, doc)
        }
      }.toString()
    }

    // Generate index objects from the array of index names
    const indexes = indexNames.map((indexName) => ({
      _id: `_design/${indexName}`,
      views: {
        byType: indexFunction
      }
    }))

    // Add indexes to the database
    db.bulkDocs(indexes)
      .then(function () {
        console.log('Indexes created successfully.')
      })
      .catch(function (err) {
        console.log('Error creating indexes: ', err)
      })
  }
}
