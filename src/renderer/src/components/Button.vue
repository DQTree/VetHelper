<template>
  <div class="cv-button">
    <router-link :to="link">
      <button type="button" :title="tit">{{ bttnlabel }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    tit: {
      type: String,
      required: true
    },
    bttnlabel: {
      type: String,
      required: true
    }
  }
}
</script>
