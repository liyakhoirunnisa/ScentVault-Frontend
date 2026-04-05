<template>
  <div class="dashboard-layout">
    <Sidebar />

    <main class="main-content">
      <Topbar />

      <div class="content-body">
        <div class="action-bar">
          <button class="btn-back" @click="$router.back()">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        </div>

        <div class="title-section">
          <h1 class="page-title">Atelier Kesesuaian</h1>
          <p class="page-desc">
            Temukan aroma yang sempurna untuk setiap momen berharga Anda. <br />
            Melalui kurasi algoritma penciuman kami, selaraskan suasana hati dan <br />
            lingkungan dengan karakter parfum yang tepat.
          </p>
        </div>

        <div class="match-grid">
          <div class="filter-column">
            <div class="filter-group">
              <label class="filter-label">PILIH SUHU (TEMPERATURE)</label>
              <div class="temp-options">
                <button
                  class="temp-btn"
                  :class="{ active: filters.temperature === 'Dingin' }"
                  @click="filters.temperature = 'Dingin'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="6.34" y1="6.34" x2="17.66" y2="17.66"></line>
                    <line x1="6.34" y1="17.66" x2="17.66" y2="6.34"></line>
                  </svg>
                  <span class="temp-title"
                    >Dingin <span class="temp-desc">Untuk cuaca sejuk</span></span
                  >
                </button>
                <button
                  class="temp-btn"
                  :class="{ active: filters.temperature === 'Normal' }"
                  @click="filters.temperature = 'Normal'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" fill="#7d5731"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  <span class="temp-title">Normal</span>
                </button>
                <button
                  class="temp-btn"
                  :class="{ active: filters.temperature === 'Panas' }"
                  @click="filters.temperature = 'Panas'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                  </svg>
                  <span class="temp-title"
                    >Panas <span class="temp-desc">Aroma segar & ringan</span></span
                  >
                </button>
              </div>
            </div>

            <div class="filter-group">
              <label class="filter-label">WAKTU (TIME OF DAY)</label>
              <div class="segmented-control">
                <button
                  class="segment-btn"
                  :class="{ active: filters.time === 'Pagi' }"
                  @click="filters.time = 'Pagi'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 2v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                    <path d="M22 12h-2"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M8 12a4 4 0 0 1 8 0"></path>
                    <line x1="3" y1="16" x2="21" y2="16"></line>
                  </svg>
                  Pagi
                </button>
                <button
                  class="segment-btn"
                  :class="{ active: filters.time === 'Siang' }"
                  @click="filters.time = 'Siang'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  Siang
                </button>
                <button
                  class="segment-btn"
                  :class="{ active: filters.time === 'Malam' }"
                  @click="filters.time = 'Malam'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  Malam
                </button>
              </div>
            </div>

            <div class="filter-group">
              <label class="filter-label">LINGKUNGAN</label>
              <div class="segmented-control">
                <button
                  class="segment-btn"
                  :class="{ active: filters.environment === 'Indoor' }"
                  @click="filters.environment = 'Indoor'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 22h18"></path>
                    <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
                    <path d="M8 22V4l7-2v20Z"></path>
                    <path d="M13 12.5v.01"></path>
                  </svg>
                  Indoor
                </button>
                <button
                  class="segment-btn"
                  :class="{ active: filters.environment === 'Outdoor' }"
                  @click="filters.environment = 'Outdoor'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3L8 10h2.5L6 18h12l-4.5-8H16L12 3z"></path>
                    <path d="M12 18v4"></path>
                    <path d="M8 22h8"></path>
                  </svg>
                  Outdoor
                </button>
                <button
                  class="segment-btn"
                  :class="{ active: filters.environment === 'All Around' }"
                  @click="filters.environment = 'All Around'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"
                    ></path>
                  </svg>
                  All Around
                </button>
              </div>
            </div>
          </div>

          <div class="recommendation-col">
            <div class="hero-card">
              <div class="hero-image-side">
                <img
                  src="@/assets/parfum-oud-immortel.jpeg"
                  alt="The Ethereal Chypre"
                  class="hero-bottle"
                />
              </div>

              <div class="hero-info-side">
                <div class="hero-header-meta">
                  <span class="meta-label">REKOMENDASI UTAMA</span>
                  <span class="badge-atelier">ATELIER PICK</span>
                </div>

                <h2 class="hero-title">The<br />Ethereal<br />Chypre</h2>

                <p class="hero-desc">
                  "Sebuah perpaduan puitis antara kesegaran embun pagi dan kehangatan lumut hutan
                  yang tenang. Sempurna untuk memulai hari dengan penuh percaya diri."
                </p>

                <div class="hero-tags">
                  <span class="tag-pill">KAYU</span>
                  <span class="tag-pill">AROMATIK</span>
                  <span class="tag-pill">SEGAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="favorites-section">
          <div class="section-header">
            <h3 class="section-title">Favorit Atelier</h3>
            <p class="section-subtitle">Pilihan populer berdasarkan kondisi cuaca hari ini.</p>
          </div>

          <div class="favorites-grid">
            <div class="fav-card" v-for="(item, index) in favorites" :key="index">
              <div class="fav-img-wrapper">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="fav-info">
                <h4 class="fav-name">{{ item.name }}</h4>
                <span class="fav-brand">{{ item.brand }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'

// Data interaktif untuk filter
const filters = ref({
  temperature: 'Dingin',
  time: 'Pagi',
  environment: 'All Around',
})

// Data mock untuk favorit bawah (Gunakan URL gambar Unsplash sementara jika aset lokal belum ada)
const favorites = ref([
  {
    name: 'Sycamore Exclusif',
    brand: 'CHANEL',
    image:
      'https://images.unsplash.com/photo-1599557467364-7729f2762b32?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: "Bal d'Afrique",
    brand: 'BYREDO',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Bergamote 22',
    brand: 'LE LABO',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Philosykos',
    brand: 'DIPTYQUE',
    image:
      'https://images.unsplash.com/photo-1616949755610-8b9aaf093414?auto=format&fit=crop&w=300&q=80',
  },
])
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
  background-color: #ffffff;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content-body {
  flex: 1;
  padding: 30px 50px 50px 50px;
  overflow-y: auto;
}
.content-body::-webkit-scrollbar {
  width: 8px;
}
.content-body::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 4px;
}

/* =========================================
   ACTION BAR & JUDUL HALAMAN
   ========================================= */
.action-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
}
.btn-back {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #7d5731;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn-back:hover {
  transform: scale(1.05);
}
.btn-back svg {
  width: 18px;
  height: 18px;
}

.title-section {
  margin-bottom: 40px; /* Jarak antara teks judul dengan area grid/filter */
}
.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #7d5731;
  line-height: 1.1;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.page-desc {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* =========================================
   GRID UTAMA (FILTER KIRI, REKOMENDASI KANAN)
   ========================================= */
.match-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: start;
  margin-bottom: 60px;
}

/* --- FILTER COLUMN --- */
.filter-group {
  margin-bottom: 30px;
}
.filter-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #a0a0a0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

/* Tombol Suhu (Vertikal) */
.temp-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.temp-btn {
  display: flex;
  align-items: center;
  background-color: #f8f8f6;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 14px 20px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}
.temp-btn svg {
  width: 20px;
  height: 20px;
  stroke: #7d5731;
  margin-right: 15px;
  flex-shrink: 0;
}
.temp-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}
.temp-desc {
  font-size: 0.8rem;
  font-weight: 500;
  color: #888;
}
.temp-btn:hover {
  background-color: #f0f0e8;
}
.temp-btn.active {
  background-color: #ffffff;
  border-color: #7d5731;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}
.temp-btn.active svg {
  stroke: #7d5731;
}
.temp-btn.active .temp-title {
  color: #7d5731;
}

/* Segmented Control (Waktu & Lingkungan) */
.segmented-control {
  display: flex;
  background-color: #f4f4f0;
  border-radius: 30px;
  padding: 4px;
}
.segment-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  border-radius: 30px;
  padding: 12px 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: #888;
  cursor: pointer;
  transition: all 0.2s;
}
.segment-btn svg {
  width: 16px;
  height: 16px;
  stroke: #888;
}
.segment-btn.active {
  background-color: #ffffff;
  color: #7d5731;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
.segment-btn.active svg {
  stroke: #7d5731;
}

/* --- REKOMENDASI UTAMA (Hero Card) --- */
.hero-card {
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  height: 100%;
  min-height: 450px;
}
.hero-image-side {
  flex: 1;
  background-color: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.hero-bottle {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}
.hero-info-side {
  flex: 1;
  background-color: #ffffff;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-header-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.meta-label {
  font-size: 0.65rem;
  font-weight: 800;
  color: #a0a0a0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.badge-atelier {
  background-color: #f8efe6;
  color: #7d5731;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 6px 12px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}
.hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #303330;
  line-height: 1.05;
  margin-bottom: 25px;
  letter-spacing: -1px;
}
.hero-desc {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 35px;
  text-align: justify;
}
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tag-pill {
  background-color: #fcdccf;
  color: #634d43;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 20px;
  letter-spacing: 1px;
}

/* =========================================
   FAVORIT ATELIER BAWAH
   ========================================= */
.favorites-section {
  margin-top: 40px;
}
.section-header {
  margin-bottom: 25px;
}
.section-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 5px;
}
.section-subtitle {
  font-size: 0.85rem;
  color: #666;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}
.fav-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  transition: transform 0.2s;
}
.fav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}
.fav-img-wrapper {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: #111;
}
.fav-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.fav-card:hover .fav-img-wrapper img {
  transform: scale(1.05);
}
.fav-name {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 4px;
}
.fav-brand {
  font-size: 0.65rem;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsif Dasar */
@media (max-width: 1100px) {
  .match-grid {
    grid-template-columns: 1fr;
  }
  .favorites-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-card {
    flex-direction: column;
  }
  .hero-image-side {
    height: 300px;
  }
}
</style>
