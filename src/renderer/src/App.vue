<template>
  <div class="cv-main-header">
    <p id="datetime"></p>
    <p>Clinica Veterinaria</p>
  </div>
  <RouterView />
</template>

<script>
window.addEventListener('DOMContentLoaded', (_event) => {
  setTime()
})

function setTime() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear()

  today = dd + '/' + mm + '/' + yyyy
  document.getElementById('datetime').innerText = today
}

export default {
  name: 'App'
}
</script>
