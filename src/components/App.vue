<template>
  <div v-if="isAdminLayout" class="app-layout">
    <Sidebaradmin />

    <main class="main-content">
      <router-view />
    </main>
  </div>

  <router-view v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebaradmin from './Sidebaradmin.vue'

const route = useRoute()

const isAdminLayout = computed(() => route.meta.layout === 'admin')
</script>

<style scoped>
.app-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #f7f5f1;
}

.main-content {
  flex: 1;
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>