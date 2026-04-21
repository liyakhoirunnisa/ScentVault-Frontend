<template>
  <div v-if="isAdminLayout" class="dashboard-layout">
    <Sidebaradmin />

    <main class="main-content">
      <Topbar
        profile-name="Profil Admin"
        profile-role="Kurator Utama"
        profile-avatar="https://i.pravatar.cc/120?img=12"
        profile-route="/profil-admin"
      >
        <div v-if="shouldShowSearch" class="search-bar">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" :placeholder="topbarPlaceholder" v-model="globalSearch" />
        </div>
      </Topbar>

      <div class="content-body">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </main>
  </div>

  <router-view v-else />
</template>

<script setup>
import { computed, ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import Sidebaradmin from './Sidebaradmin.vue'
import Topbar from './Topbar.vue'

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
.dashboard-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #faf9f6; /* Matching BerandaView background if needed or fallback */
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 20px;
  width: 448px;
}
.search-icon {
  width: 16px;
  height: 16px;
  color: #888;
  margin-right: 10px;
}
.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.85rem;
  width: 100%;
  color: #333;
}

.content-body {
  flex: 1;
  padding: 10px 50px 50px 50px;
  overflow-y: auto;
}
.content-body::-webkit-scrollbar {
  width: 8px;
}
.content-body::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 4px;
}
</style>