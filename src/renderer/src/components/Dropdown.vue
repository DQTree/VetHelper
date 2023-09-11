<template>
  <div class="cv-main-navbar-item dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
    {{ label }}
    <div v-if="showDropdownContent" class="dropdown-content">
      <div v-for="(item, index) in dropdownItems" :key="index" class="cv-dropdown-item">
        <router-link :to="dropdownPaths[index]">{{ item }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    dropdownItems: Array,
    dropdownPaths: Array
  },
  data() {
    return {
      showDropdownContent: false
    }
  },
  methods: {
    showDropdown() {
      this.showDropdownContent = true
    },
    hideDropdown() {
      this.showDropdownContent = false
    }
  }
}
</script>

<style>
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  animation: fadeIn 0.3s ease;
}

.cv-dropdown-item {
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 1vh;
  letter-spacing: 2px;
  background-color: var(--accent);
}

.cv-main-navbar-item:hover .dropdown-content,
.cv-main-navbar-item.active .dropdown-content {
  display: block;
}

.cv-main-navbar-item .dropdown-content {
  display: none;
  text-decoration: none;
}

.cv-dropdown-item a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px); /* Optional: Add a slight vertical offset */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
