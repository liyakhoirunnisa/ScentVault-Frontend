<template>
  <div v-if="isAdminLayout" class="app-layout">
    <Sidebaradmin />

    <div class="main-shell">
  <TopbarAdmin
    profile-name="Profil Admin"
    profile-role="Kurator Utama"
    profile-avatar="https://i.pravatar.cc/120?img=12"
    profile-route="/profil-admin"
    :placeholder="topbarPlaceholder"
    :showSearch="shouldShowSearch"
    @update:search="globalSearch = $event"
  />

  <main class="main-content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</div>
</div>

  <router-view v-else />
</template>

<script setup>
import { computed, ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import Sidebaradmin from './Sidebaradmin.vue'
import TopbarAdmin from './TopbarAdmin.vue'

const route = useRoute()
const globalSearch = ref('')
provide('globalSearch', globalSearch)

const isAdminLayout = computed(() => route.meta.layout === 'admin')
const topbarPlaceholder = computed(() => {
  return route.meta.topbarPlaceholder || 'Cari data...'
})
const shouldShowSearch = computed(() => {
  const hiddenPages = ['KonfigurasiAturan', 'IntegrasiData', 'TambahPengguna', 'ProfileAdminView', 'UserDetail', 'UserEdit']
  return !hiddenPages.includes(route.name)
})
</script>

<style scoped>
.app-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #f7f5f1;
}

.main-shell {
  flex: 1;
  min-width: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>