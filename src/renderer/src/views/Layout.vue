<template>
  <div class="cv-main-header">
    <Navbar />
  </div>
  <div class="cv-main-body">
    <RouterView />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
<style>
.cv-main-header {
  background-color: var(--main);
}

.cv-main-body {
  background: linear-gradient(to bottom, var(--main), var(--accent));
  display: flex;
  height: 94vh;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
