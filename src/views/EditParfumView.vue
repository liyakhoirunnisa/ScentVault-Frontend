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

        <h1 class="page-title">Sunting Koleksi</h1>

        <div class="edit-grid">
          <div class="left-column">
            <div class="image-edit-wrapper">
              <img src="@/assets/parfum-oud-immortel.jpeg" alt="Oud Immortel" class="perfume-img" />

              <div class="badge-edit-active">
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
                EDIT AKTIF
              </div>

              <button class="btn-camera-fab">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                  ></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </button>
            </div>

            <div class="form-card sidebar-inputs">
              <div class="input-group">
                <label>NAMA PARFUM</label>
                <input type="text" class="form-control" v-model="formData.name" />
              </div>
              <div class="input-group">
                <label>RUMAH PARFUM (BRAND)</label>
                <input type="text" class="form-control" v-model="formData.brand" />
              </div>
            </div>
          </div>

          <div class="right-column">
            <div class="top-cards-row">
              <div class="form-card half-card">
                <label class="card-label">KATEGORI AROMA</label>
                <div class="select-wrapper">
                  <select class="form-control select-custom" v-model="formData.category">
                    <option>Oriental Woody</option>
                    <option>Floral</option>
                    <option>Fresh</option>
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

              <div class="form-card half-card">
                <label class="card-label">KONSENTRASI</label>
                <div class="select-wrapper">
                  <select class="form-control select-custom" v-model="formData.concentration">
                    <option>Eau de Parfum</option>
                    <option>Extrait De Parfum</option>
                    <option>Eau de Toilette</option>
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
            </div>

            <div class="form-card">
              <label class="card-label">DESKRIPSI AROMA</label>
              <textarea
                class="form-control textarea-custom"
                v-model="formData.description"
              ></textarea>
            </div>

            <div class="form-card pyramid-edit-card">
              <div class="pyramid-header">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="triangle-icon"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                  ></path>
                </svg>
                <h3>Piramida Olfaktori</h3>
              </div>

              <div class="note-section">
                <div class="note-section-header">
                  <span class="dot top-dot"></span>
                  <span class="note-title">TOP NOTES</span>
                </div>
                <div class="note-input-row">
                  <div class="tag-container">
                    <span class="note-pill" v-for="(note, index) in formData.topNotes" :key="index">
                      {{ note }}
                      <button class="btn-remove-tag">×</button>
                    </span>
                  </div>
                  <div class="input-with-add">
                    <input type="text" class="input-add-note" placeholder="Tambah bahan..." />
                    <button class="btn-add-small">+ TAMBAH</button>
                  </div>
                </div>
              </div>

              <div class="note-section">
                <div class="note-section-header">
                  <span class="dot heart-dot"></span>
                  <span class="note-title">HEART NOTES</span>
                </div>
                <div class="note-input-row">
                  <div class="tag-container">
                    <span
                      class="note-pill"
                      v-for="(note, index) in formData.heartNotes"
                      :key="index"
                    >
                      {{ note }}
                      <button class="btn-remove-tag">×</button>
                    </span>
                  </div>
                  <div class="input-with-add">
                    <input type="text" class="input-add-note" placeholder="Tambah bahan..." />
                    <button class="btn-add-small">+ TAMBAH</button>
                  </div>
                </div>
              </div>

              <div class="note-section">
                <div class="note-section-header">
                  <span class="dot base-dot"></span>
                  <span class="note-title">BASE NOTES</span>
                </div>
                <div class="note-input-row">
                  <div class="tag-container">
                    <span
                      class="note-pill"
                      v-for="(note, index) in formData.baseNotes"
                      :key="index"
                    >
                      {{ note }}
                      <button class="btn-remove-tag">×</button>
                    </span>
                  </div>
                  <div class="input-with-add">
                    <input type="text" class="input-add-note" placeholder="Tambah bahan..." />
                    <button class="btn-add-small">+ TAMBAH</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button class="btn-outline-cancel" @click="$router.push('/detail')">Batal</button>
              <button class="btn-gradient" @click="promptSave">Simpan Perubahan</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showEditModal" class="modal-overlay" @click.self="closeEditModal">
        <div class="modal-card">
          
          <div class="success-icon-wrapper">
            <div class="success-icon-inner">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          
          <h3 class="modal-title">Yakin Ingin Simpan<br>Perubahan?</h3>
          <p class="modal-desc">
            Parfum baru Anda kini telah tersimpan dengan<br>aman di brankas digital.
          </p>
          
          <div class="modal-actions-vertical">
            <button class="btn-gradient w-100" @click="confirmSave">IYA</button>
            <button class="btn-outline-brown w-100" @click="closeEditModal">TIDAK</button>
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
import { useRouter } from 'vue-router'

const router = useRouter()

// Data pre-filled untuk simulasi Edit sesuai gambar desain Anda
const formData = ref({
  name: 'Oud Immortel',
  brand: 'Byredo',
  category: 'Oriental Woody',
  concentration: 'Eau de Parfum',
  description:
    'Oud Immortel adalah penghormatan kepada oud, kayu tradisional yang sangat penting secara budaya. Aroma ini menggabungkan oud dengan patchouli dan papirus untuk memberikan karakter kayu yang smoky, sementara limoncello dan cardamom memberikan pembukaan yang segar dan tajam.',
  topNotes: ['Limoncello', 'Incense', 'Cardamom'],
  heartNotes: ['Oud', 'Patchouli', 'Papyrus'],
  baseNotes: ['Oakmoss', 'Tobacco Leaves'],
})

const saveChanges = () => {
  // Simulasi simpan data
  console.log('Data berhasil diubah!', formData.value)
  // Kembali ke halaman detail setelah menyimpan
  router.push('/detail')
}

// STATE UNTUK MENGONTROL MODAL KONFIRMASI SIMPAN
const showEditModal = ref(false)

// Fungsi ketika tombol "Simpan Perubahan" diklik (memunculkan modal)
const promptSave = () => {
  showEditModal.value = true
}

// Fungsi ketika pengguna klik "IYA" di dalam modal
const confirmSave = () => {
  console.log("Data berhasil diubah!", formData.value)
  showEditModal.value = false
  router.push('/detail') // Navigasi kembali ke detail
}

// Fungsi ketika pengguna klik "TIDAK" atau di luar modal
const closeEditModal = () => {
  showEditModal.value = false
}
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
   NAVIGASI ATAS & JUDUL HALAMAN
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

.page-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #7d5731;
  line-height: 1.1;
  margin-bottom: 35px;
  letter-spacing: -0.5px;
}

/* =========================================
   GRID UTAMA SUNTING (1 : 2.2)
   ========================================= */
.edit-grid {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 35px;
  align-items: start;
}

/* =========================================
   KOLOM KIRI (FOTO & INPUT DASAR)
   ========================================= */
.image-edit-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  background-color: #111;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.perfume-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

/* Badge Kiri Atas */
.badge-edit-active {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #7d5731;
  color: #ffffff;
  font-size: 0.6rem;
  font-weight: 800;
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 1px;
}
.badge-edit-active svg {
  width: 12px;
  height: 12px;
  stroke: #fff;
}

/* Tombol Kamera Kanan Bawah */
.btn-camera-fab {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  background-color: #f4f4f0;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}
.btn-camera-fab:hover {
  transform: scale(1.1);
}
.btn-camera-fab svg {
  width: 20px;
  height: 20px;
  stroke: #7d5731;
}

.sidebar-inputs {
  padding: 25px;
}

/* =========================================
   KOLOM KANAN (FORM DETAIL)
   ========================================= */
.form-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  margin-bottom: 25px;
}

.top-cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px;
}
.half-card {
  margin-bottom: 0;
}

.card-label,
.input-group label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #888;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.input-group {
  margin-bottom: 20px;
}
.input-group:last-child {
  margin-bottom: 0;
}

.form-control {
  background-color: #f4f4f0;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 15px 18px;
  font-family: inherit;
  font-size: 0.95rem;
  color: #333;
  width: 100%;
  transition: all 0.2s;
}
.form-control:focus {
  border-color: #7d5731;
  outline: none;
  background-color: #ffffff;
}

.select-wrapper {
  position: relative;
}
.select-custom {
  appearance: none;
  cursor: pointer;
}
.chevron {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  stroke: #888;
  pointer-events: none;
}

.textarea-custom {
  resize: none;
  height: 110px;
  line-height: 1.6;
}

/* =========================================
   PIRAMIDA OLFAKTORI (Sesuai Desain)
   ========================================= */
.pyramid-edit-card {
  background-color: #f4f4f0;
  box-shadow: none;
  padding: 35px 40px;
}
.pyramid-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 35px;
}
.triangle-icon {
  width: 22px;
  height: 22px;
  stroke: #7d5731;
}
.pyramid-header h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #7d5731;
}

.note-section {
  margin-bottom: 30px;
}
.note-section:last-child {
  margin-bottom: 0;
}

.note-section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.top-dot {
  background-color: #f5d483;
} /* Kuning terang */
.heart-dot {
  background-color: #b27b5e;
} /* Cokelat medium */
.base-dot {
  background-color: #5c4b41;
} /* Cokelat gelap */

.note-title {
  font-size: 0.65rem;
  font-weight: 800;
  color: #888;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.note-input-row {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #ffffff;
  padding: 8px 12px 8px 20px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.note-pill {
  background-color: #fcdccf;
  color: #634D43;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 8px 6px 14px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn-remove-tag {
  background: transparent;
  border: none;
  color: #634d43;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0 2px;
}

.input-with-add {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
.input-add-note {
  border: none;
  background: transparent;
  font-size: 0.85rem;
  color: #333;
  width: 100%;
  outline: none;
  margin-left: 10px;
}
.input-add-note::placeholder {
  color: #a0a0a0;
}

.btn-add-small {
  background-color: #f4f4f0;
  border: none;
  color: #7D5731;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}
.btn-add-small:hover {
  background-color: #e5e5e5;
  color: #333;
}

/* =========================================
   TOMBOL AKSI BAWAH
   ========================================= */
.form-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
}

.btn-outline-cancel {
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 30px;
  padding: 12px 35px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #7D5731;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline-cancel:hover {
  background-color: #f3f4f6;
  color: #333;
}

.btn-gradient {
  padding: 13px 35px;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 500;
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

/* =========================================
   GAYA MODAL KONFIRMASI (POP-UP)
   ========================================= */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Latar redup */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-card {
  background-color: #FFFFFF;
  width: 400px;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.success-icon-wrapper {
  width: 70px;
  height: 70px;
  background-color: #F4F4F0; /* Krem muda */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px auto;
}

.success-icon-inner {
  width: 36px;
  height: 36px;
  background-color: #7D5731; /* Cokelat pekat */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.success-icon-inner svg {
  width: 18px;
  height: 18px;
}

.modal-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #7D5731;
  line-height: 1.3;
  margin-bottom: 12px;
}

.modal-desc {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-actions-vertical {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.w-100 {
  width: 100%;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 14px 0;
}

.btn-outline-brown {
  background-color: transparent;
  border: 1px solid #E5E5E5;
  border-radius: 30px;
  color: #7D5731;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline-brown:hover {
  border-color: #7D5731;
  background-color: #FAFAFA;
}

/* Responsif */
@media (max-width: 1100px) {
  .edit-grid {
    grid-template-columns: 1fr;
  }
  .top-cards-row {
    grid-template-columns: 1fr;
  }
}
</style>
