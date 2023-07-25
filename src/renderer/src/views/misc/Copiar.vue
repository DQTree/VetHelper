<template>
  <div>
    <h1>Copiar</h1>
  </div>
  <RouterView></RouterView>
  <div class="cv-container">
    <ButtonComponent link="/home" tit="home" bttnlabel="Home"></ButtonComponent>
  </div>
</template>
<script>
import ButtonComponent from '../../components/Button.vue'

export default {
  components: {
    ButtonComponent
  }
}
</script>
