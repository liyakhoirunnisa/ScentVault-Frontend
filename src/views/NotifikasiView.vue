<template>
  <div class="dashboard-layout">
    <Sidebar />

    <main class="main-content">
      <Topbar>
        <div class="search-bar">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" placeholder="Cari Koleksi Anda..." />
        </div>
      </Topbar>

      <div class="content-body">
        <div class="page-header">
          <h1 class="page-title">Pusat Notifikasi</h1>
          <p class="page-desc">Kelola pembaruan atelier dan aktivitas koleksi Anda.</p>
        </div>

        <div class="tabs-container">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="tab-btn"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <div class="notification-list">
          <div
            v-for="notif in filteredNotifications"
            :key="notif.id"
            class="notif-card"
            :class="{ unread: notif.unread }"
          >
            <div class="notif-icon-wrapper">
              <svg
                v-if="notif.type === 'collection'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                ></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>

              <svg
                v-if="notif.type === 'system'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>

              <svg
                v-if="notif.type === 'profile'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>

              <svg
                v-if="notif.type === 'welcome'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                <path d="M4 3h.01"></path>
                <path d="M22 8h.01"></path>
                <path d="M15 2h.01"></path>
                <path d="M22 20h.01"></path>
                <path
                  d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
                ></path>
                <path
                  d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"
                ></path>
                <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path>
                <path
                  d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
                ></path>
              </svg>
            </div>

            <div class="notif-content">
              <h3 class="notif-title">{{ notif.title }}</h3>
              <p class="notif-desc">{{ notif.desc }}</p>
            </div>

            <div class="notif-meta">
              <span class="notif-time">{{ notif.time }}</span>
              <span v-if="notif.unread" class="unread-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'

// Pengaturan Tabs
const tabs = ['Semua', 'Sistem', 'Aktivitas', 'Penting']
const activeTab = ref('Semua')

// Data Notifikasi Statis Sesuai Mockup
const notifications = ref([
  {
    id: 1,
    title: 'Koleksi Baru Ditambahkan',
    desc: 'Oud Immortel telah berhasil ditambahkan ke brankas Anda.',
    time: '2 jam yang lalu',
    unread: true,
    type: 'collection',
    category: 'Aktivitas',
  },
  {
    id: 2,
    title: 'Pembaruan Sistem',
    desc: "Fitur 'Kesesuaian Aroma' kini lebih akurat dengan data cuaca terbaru.",
    time: '5 jam yang lalu',
    unread: true,
    type: 'system',
    category: 'Sistem',
  },
  {
    id: 3,
    title: 'Profil Diperbarui',
    desc: 'Informasi profil Anda telah berhasil diperbarui.',
    time: '1 hari yang lalu',
    unread: false,
    type: 'profile',
    category: 'Aktivitas',
  },
  {
    id: 4,
    title: 'Selamat Datang!',
    desc: 'Terima kasih telah bergabung dengan ScentVault. Mulailah mengurasi koleksi Anda.',
    time: '2 hari yang lalu',
    unread: false,
    type: 'welcome',
    category: 'Sistem',
  },
])

// Logika Filter Tab Sederhana (Opsional, agar tabnya berfungsi!)
const filteredNotifications = computed(() => {
  if (activeTab.value === 'Semua') return notifications.value
  if (activeTab.value === 'Penting') return notifications.value.filter((n) => n.unread)
  return notifications.value.filter((n) => n.category === activeTab.value)
})
</script>

<style scoped>
/* =========================================
   Layout Dasar & Header (Konsisten)
   ========================================= */
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
  border-radius: 4px;
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

/* =========================================
   HEADER HALAMAN
   ========================================= */
.page-header {
  margin-bottom: 40px;
}
.page-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #7d5731;
  line-height: 1.2;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}
.page-desc {
  font-size: 0.95rem;
  color: #666;
}

/* =========================================
   TABS NAVIGASI
   ========================================= */
.tabs-container {
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
}
.tab-btn {
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  padding: 0 0 15px 0;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}
.tab-btn:hover {
  color: #555;
}
.tab-btn.active {
  color: #7d5731;
}
.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #7d5731;
  border-radius: 3px 3px 0 0;
}

/* =========================================
   DAFTAR NOTIFIKASI
   ========================================= */
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.notif-card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 25px 30px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;
}
.notif-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
}

/* Lingkaran Ikon */
.notif-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f8efe6; /* Warna krem pastel/peach */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  flex-shrink: 0;
}
.notif-icon-wrapper svg {
  width: 22px;
  height: 22px;
  stroke: #7d5731;
}

/* Konten Teks */
.notif-content {
  flex: 1;
}
.notif-title {
  font-size: 1rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 6px;
}
.notif-desc {
  font-size: 0.85rem;
  color: #777;
  line-height: 1.4;
}

/* Meta Data (Waktu & Dot) */
.notif-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 20px;
}
.notif-time {
  font-size: 0.75rem;
  font-weight: 500;
  color: #a0a0a0;
}
.unread-dot {
  width: 8px;
  height: 8px;
  background-color: #7d5731;
  border-radius: 50%;
}

/* Style Tambahan jika Unread */
.notif-card.unread {
  background-color: #ffffff;
}
.notif-card.unread .notif-title {
  color: #1a1a1a;
}
</style>
