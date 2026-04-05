<template>
  <div class="dashboard-layout">
    <Sidebar />

    <main class="main-content">
      <Topbar />

      <div class="content-body">
        <div class="page-header">
          <h1 class="page-title">Buku Harian Aroma</h1>
          <p class="page-subtitle">Dokumentasikan perjalanan sensorik Anda.</p>
        </div>

        <div class="diary-grid">
          <div class="left-column">
            <div class="form-card new-entry-card">
              <div class="card-header-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <h3>Catatan Baru</h3>
              </div>

              <div class="input-group">
                <label>PILIH PARFUM</label>
                <div class="input-with-icon">
                  <svg
                    class="left-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none"></circle>
                    <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none"></circle>
                    <path d="M8.5 14c1.5 1.5 5.5 1.5 7 0"></path>
                  </svg>
                  <select class="form-control select-custom with-pad">
                    <option>Santal 33</option>
                    <option>Oud Immortel</option>
                    <option>Ambre Nuit</option>
                  </select>
                  <svg
                    class="chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div class="input-row">
                <div class="input-group">
                  <label>CUACA</label>
                  <div class="input-with-icon">
                    <svg
                      class="left-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                    <select class="form-control select-custom with-pad">
                      <option>Tenang</option>
                      <option>Hujan</option>
                      <option>Cerah</option>
                    </select>
                    <svg
                      class="chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div class="input-group">
                  <label>ACARA</label>
                  <div class="input-with-icon">
                    <svg
                      class="left-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <input type="text" class="form-control with-pad" placeholder="Misal: Kantor" />
                  </div>
                </div>
              </div>

              <div class="input-group">
                <label>CATATAN AROMA</label>
                <textarea
                  class="form-control textarea-custom"
                  placeholder='"Aroma kayu cendana yang ikonik memberikan kesan profesional namun tetap ramah. Sangat cocok untuk rapat pembukaan galeri hari ini."'
                ></textarea>
              </div>

              <button class="btn-gradient w-100">SIMPAN ENTRI</button>
            </div>
          </div>

          <div class="right-column">
            <div class="reflections-header">
              <div class="title-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <polyline points="3 3 3 8 8 8"></polyline>
                  <path d="M12 7v5l4 2"></path>
                </svg>
                <h3>Refleksi Masa Lalu</h3>
              </div>
              <span class="badge-count">{{ diaryEntries.length }} ENTRI</span>
            </div>

            <div class="entries-list">
              <div class="entry-card" v-for="entry in diaryEntries" :key="entry.id">
                <div class="entry-card-header">
                  <div class="entry-info-wrap">
                    <img :src="entry.image" :alt="entry.perfumeName" class="entry-img" />
                    <div class="entry-meta">
                      <h4 class="entry-title">
                        {{ entry.perfumeName }} <span class="entry-brand">{{ entry.brand }}</span>
                      </h4>
                      <span class="entry-date">{{ entry.date }} • {{ entry.time }}</span>
                    </div>
                  </div>
                  <button class="btn-delete-entry">
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

                <div class="entry-tags">
                  
                  <span class="tag-pill">
                    <svg v-if="entry.mood === 'TENANG'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="9" cy="9" r="4"></circle>
                      <line x1="9" y1="13" x2="9" y2="18"></line>
                      <rect x="15" y="6" width="3" height="12" rx="1"></rect>
                      <line x1="15" y1="8" x2="13" y2="8"></line>
                      <line x1="15" y1="11" x2="13" y2="11"></line>
                      <line x1="15" y1="14" x2="13" y2="14"></line>
                    </svg>
                    <svg v-else-if="entry.mood === 'ENERJIK'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9"></circle>
                      <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none"></circle>
                      <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none"></circle>
                      <path d="M8.5 14c1.5 1.5 5.5 1.5 7 0"></path>
                    </svg>
                    {{ entry.mood }}
                  </span>
                  
                  <span class="tag-pill">
                    <svg v-if="entry.weather === 'HUJAN'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                      <path d="M8 17l-2 3"></path>
                      <path d="M12 17l-2 3"></path>
                      <path d="M16 17l-2 3"></path>
                    </svg>
                    <svg v-else-if="entry.weather === 'BERAWAN'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="M20 12h2"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                      <path d="M15.947 8.688A5 5 0 0 0 7 9.5"></path>
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                    {{ entry.weather }}
                  </span>
                  
                  <span class="tag-pill">
                    <svg v-if="entry.event === 'MALAM SANTAI'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    <svg v-else-if="entry.event === 'ACARA GALERI'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" stroke="none"></circle>
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" stroke="none"></circle>
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" stroke="none"></circle>
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" stroke="none"></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                    </svg>
                    {{ entry.event }}
                  </span>
                </div>

                <p class="entry-quote">"{{ entry.quote }}"</p>
              </div>
            </div>

            <div class="diary-footer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19.5V6c-1.5-1-4-1.5-7-1.5v14c3 0 5.5.5 7 1.5z"></path>
                <path d="M12 19.5V6c1.5-1 4-1.5 7-1.5v14c-3 0-5.5.5-7 1.5z"></path>
                <polygon points="12 6 16 2.5 16 12.5 12 16" fill="currentColor" stroke="none"></polygon>
              </svg>
              <p>Tuliskan lebih banyak cerita...</p>
            </div>
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

// Data Bohongan (Mock Data) untuk Daftar Riwayat Diary
const diaryEntries = ref([
  {
    id: 1,
    perfumeName: 'By the Fireplace',
    brand: 'MAISON MARGIELA',
    date: '12 Okt 2023',
    time: '07:30 PM',
    image:
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=150&q=80',
    mood: 'TENANG',
    weather: 'HUJAN',
    event: 'MALAM SANTAI',
    quote:
      'Bau kayu terbakar dan vanila yang manis menyatu sempurna dengan rintik hujan di luar. Memberikan kenyamanan yang luar biasa.',
  },
  {
    id: 2,
    perfumeName: "Bal d'Afrique",
    brand: 'BYREDO',
    date: '08 Okt 2023',
    time: '11:15 AM',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=150&q=80',
    mood: 'ENERJIK',
    weather: 'BERAWAN',
    event: 'ACARA GALERI',
    quote:
      'Membawa nuansa ceria di tengah hari yang sedikit mendung. Campuran vetiver dan marigold-nya sangat unik dan modern.',
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

/* =========================================
   JUDUL HALAMAN
   ========================================= */
.page-header {
  margin-bottom: 40px;
}
.page-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #7d5731;
  line-height: 1.1;
  margin-bottom: 10px;
}
.page-subtitle {
  font-size: 0.95rem;
  color: #666;
  font-weight: 500;
}

/* =========================================
   GRID BUKU HARIAN (1 : 1.8)
   ========================================= */
.diary-grid {
  display: grid;
  grid-template-columns: 1fr 1.8fr; /* Sesuai proporsi desain Figma */
  gap: 40px;
  align-items: start;
}

/* =========================================
   KOLOM KIRI: FORM CATATAN BARU
   ========================================= */
.form-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 35px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}
.card-header-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}
.card-header-title svg {
  width: 20px;
  height: 20px;
  stroke: #7D5731;
}
.card-header-title h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a1a;
}

.input-row {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 10px;
  margin-bottom: 25px;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 25px;
}
.input-row .input-group {
  margin-bottom: 0;
}

.input-group label {
  font-size: 0.65rem;
  font-weight: 800;
  color: #888;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Input dengan Ikon di dalam */
.input-with-icon {
  position: relative;
  width: 100%;
}
.left-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  stroke: #888;
  pointer-events: none;
}
.form-control {
  background-color: #f4f4f0;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 14px 18px;
  font-family: inherit;
  font-size: 0.85rem;
  color: #303330;
  transition: all 0.2s;
  width: 100%;
}
.form-control.with-pad {
  padding-left: 42px;
} /* Padding extra untuk ikon kiri */
.form-control:focus {
  border-color: #7d5731;
  outline: none;
  background-color: #ffffff;
}

.select-custom {
  appearance: none;
  cursor: pointer;
}
.chevron {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  stroke: #888;
  pointer-events: none;
}

.textarea-custom {
  resize: none;
  height: 140px;
  line-height: 1.6;
  padding: 18px;
  font-style: italic;
}

.btn-gradient.w-100 {
  width: 100%;
  padding: 14px 0;
  justify-content: center;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn-gradient.w-100:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 87, 49, 0.35);
}

/* =========================================
   KOLOM KANAN: DAFTAR REFLEKSI
   ========================================= */
.reflections-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e5e5e5;
}
.title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}
.title-wrap svg {
  width: 22px;
  height: 22px;
  stroke: #7d5731;
}
.title-wrap h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a1a;
}

.badge-count {
  background-color: #eeeeea;
  color: #888;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 12px;
  letter-spacing: 1px;
}

.entries-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

/* Kartu Entri / Riwayat */
.entry-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s;
}
.entry-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.entry-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}
.entry-info-wrap {
  display: flex;
  align-items: center;
  gap: 15px;
}
.entry-img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  background-color: #111;
}
.entry-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.entry-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a1a;
}
.entry-brand {
  font-size: 0.65rem;
  color: #888;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 5px;
}
.entry-date {
  font-size: 0.75rem;
  color: #888;
  font-weight: 500;
}

.btn-delete-entry {
  background: none;
  border: none;
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.2s;
  padding: 5px;
}
.btn-delete-entry:hover {
  color: #a73b21;
}
.btn-delete-entry svg {
  width: 18px;
  height: 18px;
}

.entry-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}
.tag-pill {
  background-color: #faf4f0; /* Krem sangat pucat */
  border: 1px solid #ebe0d8; /* Garis outline tipis */
  color: #9a6a4e; /* Cokelat hangat */
  font-size: 0.65rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.5px;
}
.tag-pill svg {
  width: 14px;
  height: 14px;
  stroke: #9a6a4e; /* Sinkron dengan teks */
}
.entry-quote {
  font-size: 0.9rem;
  font-style: italic;
  color: #303330;
  line-height: 1.6;
}

/* Footer / State Kosong */
.diary-footer {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  gap: 12px; 
  padding: 40px 0; 
}
.diary-footer svg { 
  width: 48px; 
  height: 48px; 
  color: #D4C5B9; 
}
.diary-footer p { 
  font-size: 0.95rem; 
  font-weight: 600; 
  color: #D4C5B9; 
}
/* Responsif */
@media (max-width: 1100px) {
  .diary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
