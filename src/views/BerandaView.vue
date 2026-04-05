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
        <section class="welcome-section">
          <h2>Selamat datang kembali, Kurator</h2>
          <p>Atelier digital Anda telah dikurasi dan siap untuk pilihan hari ini.</p>
        </section>

        <section class="stats-grid">
          <div class="stat-card">
            <div class="stat-header">
              <svg
                class="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7D5731"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 3l1.5 4.5L15 9l-4.5 1.5L9 15l-1.5-4.5L3 9l4.5-1.5L9 3z"></path>
                <path d="M18 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path>
                <path d="M17 2l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5z"></path>
              </svg>
              <span class="stat-badge">INVENTARIS</span>
            </div>
            <h3 class="stat-number">128</h3>
            <p class="stat-label">Total Parfum</p>
          </div>

          <div class="stat-card">
            <div class="stat-header">
              <svg
                class="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7D5731"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
              </svg>
              <span class="stat-badge">KRITIK</span>
            </div>
            <h3 class="stat-number">42</h3>
            <p class="stat-label">Total Ulasan</p>
          </div>

          <div class="stat-card">
            <div class="stat-header">
              <svg
                class="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7D5731"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span class="stat-badge">ARSIP</span>
            </div>
            <h3 class="stat-number">156</h3>
            <p class="stat-label">Catatan Harian</p>
          </div>
        </section>

        <div class="split-section">
          <section class="recommendation-area">
            <h3 class="section-title">Rekomendasi Hari Ini</h3>
            <div class="recom-card">
              <div class="recom-image">
                <img src="@/assets/baccarat-rouge.png" alt="Baccarat Rouge" />
              </div>
              <div class="recom-content">
                <span class="brand-name">MAISON FRANCIS KURKDJIAN</span>
                <h4 class="perfume-name">Baccarat<br />Rouge 540</h4>
                <div class="tags">
                  <span class="tag">SAFFRON</span>
                  <span class="tag">JASMINE</span>
                  <span class="tag">AMBERWOOD</span>
                </div>
                <p class="perfume-desc">
                  Alkimia puitis di mana aroma melati yang ringan dan kemilau saffron membawa faset
                  ambergris dan aroma kayu.
                </p>
                <button class="btn-detail" @click="$router.push('/detail')">LIHAT DETAIL</button>
              </div>
            </div>
          </section>

          <section class="journal-area">
            <div class="section-header-flex">
              <h3 class="section-title">Buku Harian Terbaru</h3>
              <a href="#" class="link-all">Lihat Semua</a>
            </div>
            <div class="journal-list">
              <div class="journal-item" v-for="journal in recentJournals" :key="journal.id">
                <div class="journal-icon-box">
                  <component
                    :is="journal.icon"
                    class="j-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7D5731"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </div>
                <div class="journal-info">
                  <div class="j-head">
                    <h5>{{ journal.title }}</h5>
                    <span class="j-time">{{ journal.time }}</span>
                  </div>
                  <p class="j-desc">{{ journal.desc }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section class="inspiration-area">
          <h3 class="section-title">Inspirasi Atelier</h3>
          <div class="inspiration-grid">
            <div class="insp-img-wrap" v-for="(img, index) in inspirations" :key="index">
              <img :src="img.url" :alt="'Inspirasi ' + index" />
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
import { h } from 'vue'

import imgInsp1 from '@/assets/inspiration1.png'
import imgInsp2 from '@/assets/inspiration2.png'
import imgInsp3 from '@/assets/inspiration3.png'
import imgInsp4 from '@/assets/inspiration4.png'

const svgProps = { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }

const IconCloud = () =>
  h('svg', svgProps, [h('path', { d: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' })])
const IconMoon = () =>
  h('svg', svgProps, [h('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })])
const IconSun = () =>
  h('svg', svgProps, [
    h('circle', { cx: '12', cy: '12', r: '5' }),
    h('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
    h('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
    h('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
    h('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
    h('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
    h('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
    h('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
    h('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' }),
  ])

const recentJournals = [
  {
    id: 1,
    title: 'Rainy Morning Mist',
    time: '2 JAM YANG LALU',
    desc: '"Melapiskan Santal 33 dengan sedikit sentuhan sitrus...',
    icon: IconCloud,
  },
  {
    id: 2,
    title: 'Pilihan Gala Malam',
    time: 'KEMARIN',
    desc: '"Tobacco Vanille. Pilihan klasik untuk pembukaan galeri...',
    icon: IconMoon,
  },
  {
    id: 3,
    title: 'Brunch Hari Minggu',
    time: '2 HARI YANG LALU',
    desc: '"Gypsy Water oleh Byredo. Ringan, beraroma kayu...',
    icon: IconSun,
  },
]

const inspirations = [{ url: imgInsp1 }, { url: imgInsp2 }, { url: imgInsp3 }, { url: imgInsp4 }]
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

/* --- Area Scrollable & Konten Bawah Tetap Sama --- */
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
.section-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
}
.welcome-section {
  margin-bottom: 30px;
}
.welcome-section h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #7d5731;
  margin-bottom: 5px;
  letter-spacing: -0.5px;
}
.welcome-section p {
  font-size: 0.9rem;
  color: #5d605c;
  font-weight: 500;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}
.stat-card {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}
.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.stat-icon {
  width: 22px;
  height: 22px;
}
.stat-badge {
  background-color: #f5f5f5;
  color: #a0a0a0;
  font-size: 0.6rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 12px;
  letter-spacing: 0.5px;
}
.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 5px;
}
.stat-label {
  font-size: 0.8rem;
  color: #888;
  font-weight: 600;
}
.split-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}
.recom-card {
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  height: 320px;
}
.recom-image {
  flex: 1;
}
.recom-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recom-content {
  flex: 1.2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.brand-name {
  font-size: 0.65rem;
  font-weight: 800;
  color: #7d5731;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.perfume-name {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.1;
  margin-bottom: 15px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}
.tag {
  font-size: 0.6rem;
  font-weight: 400;
  color: #634d43;
  background-color: #fcdccf;
  padding: 4px 10px;
  border-radius: 12px;
}
.perfume-desc {
  font-size: 0.8rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
}
.btn-detail {
  align-self: flex-start;
  padding: 10px 20px;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(152, 109, 77, 0.2);
  transition: transform 0.2s;
}
.btn-detail:hover {
  transform: translateY(-2px);
}
.section-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
}
.link-all {
  font-size: 0.75rem;
  font-weight: 700;
  color: #986d4d;
  text-decoration: none;
  margin-bottom: 2px;
}
.journal-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.journal-item {
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 12px;
}
.journal-icon-box {
  width: 45px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  flex-shrink: 0;
}
.j-icon {
  width: 20px;
  height: 20px;
  stroke: #7d5731;
  fill: none;
}
.j-icon path,
.j-icon circle,
.j-icon line {
  stroke: inherit;
  fill: inherit;
}
.journal-info {
  flex: 1;
  overflow: hidden;
}
.j-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.j-head h5 {
  font-size: 0.85rem;
  font-weight: 800;
  color: #333;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.j-time {
  font-size: 0.55rem;
  font-weight: 800;
  color: #a0a0a0;
  letter-spacing: 0.5px;
}
.j-desc {
  font-size: 0.75rem;
  color: #666;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.inspiration-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.insp-img-wrap {
  width: 100%;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
}
.insp-img-wrap:nth-child(even) {
  margin-top: 20px;
  height: 180px;
}
.insp-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.insp-img-wrap:hover img {
  transform: scale(1.05);
}

@media (max-width: 1100px) {
  .split-section {
    grid-template-columns: 1fr;
  }
  .recom-card {
    height: auto;
  }
}
</style>
