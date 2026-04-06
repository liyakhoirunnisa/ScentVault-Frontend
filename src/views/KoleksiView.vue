<template>
  <div class="dashboard-layout">
    <Sidebar />

    <main class="main-content">
      <Topbar>
        <div class="search-bar">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Cari Koleksi Anda..." />
        </div>
      </Topbar>

      <div class="content-body">
        <div class="page-header">
          <div class="header-text">
            <h1 class="page-title">Koleksi Saya</h1>
            <p class="page-subtitle">Mengkurasi esensi dari atelier digital Anda.</p>
          </div>
          <RouterLink to="/tambah-parfum" class="btn-gradient">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Tambah Parfum
          </RouterLink>
        </div>

        <div class="filter-bar">
          <div class="filter-pills">
            <button
              v-for="filter in filters"
              :key="filter"
              class="pill-btn"
              :class="{ active: activeFilter === filter }"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
          <div class="sort-dropdown">
            <span class="sort-label">Urutkan:</span>
            <select v-model="activeSort" class="sort-select-basic">
              <option v-for="option in sortOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div class="collection-grid">
          <div class="perfume-card" v-for="item in collection" :key="item.id">
            <div class="card-img-wrapper">
              <img :src="item.image" :alt="item.name" />
              <button class="btn-delete-overlay" title="Hapus Parfum">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  ></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>

            <div class="card-content">
              <div class="card-top-info">
                <span class="card-brand">{{ item.brand }}</span>
                <div class="card-rating">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                  </svg>
                  {{ item.rating }}
                </div>
              </div>
              <h3 class="card-title">{{ item.name }}</h3>

              <div class="card-tags">
                <span class="tag-pill" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>

              <RouterLink to="/detail" class="btn-outline-detail">Lihat Detail</RouterLink>
            </div>
          </div>
        </div>

        <div class="pagination-section">
          <p class="pagination-info">Menampilkan 1 sampai 4 dari 24 parfum</p>
          <div class="pagination-controls">
            <button class="page-nav-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <button class="page-nav-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { RouterLink } from 'vue-router'
import imgParfum1 from '@/assets/parfum-ambre-nuit.png'
import imgParfum2 from '@/assets/parfum-wild-orchid.jpeg'
import imgParfum3 from '@/assets/parfum-oud-immortel.jpeg'
import imgParfum4 from '@/assets/parfum-velvet-vanilla.jpeg'

// Data Filter
const filters = ['Semua', 'Bunga', 'Kayu', 'Segar', 'Manis']
const activeFilter = ref('Semua')

// Data Sort
const sortOptions = ['Terbaru', 'Terlama']
const activeSort = ref('Terbaru')

// Data Bohongan (Mock Data) menyesuaikan desain
const collection = ref([
  {
    id: 1,
    brand: 'MAISON DE LUXE',
    name: 'Ambre Nuit',
    rating: '4.8',
    image: imgParfum1,
    tags: ['AMBER', 'ROSE', 'SPICY'],
  },
  {
    id: 2,
    brand: 'BOTANICAL ESSENCE',
    name: 'Wild Orchid',
    rating: '4.5',
    image: imgParfum2,
    tags: ['FLORAL', 'FRESH'],
  },
  {
    id: 3,
    brand: 'OUD COLLECTIONS',
    name: 'Oud immortel',
    rating: '4.9',
    image: imgParfum3,
    tags: ['OUD', 'TOBACCO', 'LEATHER'],
  },
  {
    id: 4,
    brand: 'SWEET ATELIER',
    name: 'Velvet Vanilla',
    rating: '4.2',
    image: imgParfum4,
    tags: ['VANILLA', 'PRALINE'],
  },
])
</script>

<style scoped>
/* =========================================
   Layout Dasar (Konsisten)
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
  background-color: #e0e0e0;
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
   JUDUL HALAMAN & TOMBOL TAMBAH
   ========================================= */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}
.page-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #7d5731;
  line-height: 1.1;
  margin-bottom: 5px;
}
.page-subtitle {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}
.btn-gradient {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(125, 87, 49, 0.25);
  transition: transform 0.2s;
}
.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 87, 49, 0.35);
}
.btn-gradient svg {
  width: 18px;
  height: 18px;
}

/* =========================================
   BAR FILTER & URUTAN
   ========================================= */
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.filter-pills {
  display: flex;
  gap: 5px;
  background-color: #eeeeea;
  padding: 5px;
  border-radius: 30px;
}
.pill-btn {
  background: transparent;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #5d605c;
  cursor: pointer;
  transition: all 0.2s;
}
.pill-btn.active {
  background-color: #ffffff;
  font-weight: 600;
  color: #7d5731;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sort-label {
  font-size: 0.8rem;
  color: #888;
  font-weight: 600;
}

.sort-select-basic {
  background: transparent;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  color: #7d5731; /* Warna cokelat sesuai desain inline */
  cursor: pointer;
  outline: none;
  font-family: inherit;
  padding: 0;
}

.sort-select-basic option {
  color: #333;
  font-weight: normal;
}

.sort-btn svg {
  width: 14px;
  height: 14px;
  stroke-width: 3px;
}
.sort-btn svg.rotate {
  transform: rotate(180deg);
}

.sort-menu-item:hover {
  background-color: #f5f5f5;
}
.sort-menu-item.active {
  background-color: #eee;
  font-weight: 600;
}

/* =========================================
   GRID KARTU PARFUM
   ========================================= */
.collection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}
.perfume-card {
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
}
.perfume-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

/* Gambar & Overlay Hapus */
.card-img-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  background-color: #111;
}
.card-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-delete-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s;
}
.btn-delete-overlay:hover {
  background-color: #fee2e2;
}
.btn-delete-overlay svg {
  width: 16px;
  height: 16px;
  stroke: #666;
}
.btn-delete-overlay:hover svg {
  stroke: #dc2626;
}

/* Konten Bawah Kartu */
.card-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card-top-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.card-brand {
  font-size: 0.65rem;
  font-weight: 700;
  color: #888;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.card-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  font-weight: 800;
  color: #333;
}
.card-rating svg {
  width: 14px;
  height: 14px;
  color: #7d5731;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 15px;
  line-height: 1.2;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
  flex: 1;
}
.tag-pill {
  background-color: #fcdccf;
  color: #634d43;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-outline-detail {
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #7d5731;
  transition: all 0.2s;
}
.btn-outline-detail:hover {
  border-color: #7d5731;
  color: #7d5731;
  background-color: transparent;
}

/* =========================================
   PAGINASI
   ========================================= */
.pagination-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e5e5e5;
}
.pagination-info {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}
.pagination-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.page-num,
.page-nav-btn {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 700;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}
.page-num:hover,
.page-nav-btn:hover {
  background-color: #e5e5e5;
}
.page-num.active {
  background-color: #7d5731;
  color: #ffffff;
}
.page-nav-btn svg {
  width: 16px;
  height: 16px;
}

/* Responsif Dasar */
@media (max-width: 1100px) {
  .collection-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
