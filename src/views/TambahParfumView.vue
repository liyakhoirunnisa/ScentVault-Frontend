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

        <h1 class="page-title">Simpan Aroma Baru Anda</h1>

        <div class="form-grid">
          <div class="left-column">
            <div class="upload-placeholder">
              <svg
                class="upload-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                ></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              <span class="upload-title">Unggah Foto Botol</span>
              <span class="upload-desc">Format: JPG, PNG (Maks 5MB)</span>
            </div>

            <div class="concentration-section">
              <label>KONSENTRASI</label>
              <div class="pill-group">
                <button
                  v-for="tipe in ['EDP', 'EDT', 'Extrait', 'Cologne']"
                  :key="tipe"
                  class="pill-btn"
                  :class="{ active: formData.concentration === tipe }"
                  @click="formData.concentration = tipe"
                >
                  {{ tipe }}
                </button>
              </div>
            </div>
          </div>

          <div class="right-column">
            <div class="input-row">
              <div class="input-group">
                <label>NAMA FRAGRANCE</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.name"
                  placeholder="Contoh: Oud Wood"
                />
              </div>
              <div class="input-group">
                <label>BRAND / RUMAH PARFUM</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.brand"
                  placeholder="Contoh: Tom Ford"
                />
              </div>
            </div>

            <div class="input-group">
              <label>KATEGORI AROMA</label>
              <div class="select-wrapper">
                <select class="form-control select-custom" v-model="formData.category">
                  <option value="" disabled selected>Pilih kategori...</option>
                  <option>Floral</option>
                  <option>Fruity</option>
                  <option>Woody</option>
                  <option>Oriental/Spicy</option>
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

            <div class="input-group">
              <label>DESKRIPSI & NARASI AROMA</label>
              <textarea
                class="form-control textarea-custom"
                v-model="formData.description"
                placeholder="Ceritakan karakter parfum ini..."
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
              <button class="btn-outline-cancel" @click="$router.back()">BATAL</button>
              <button class="btn-gradient" @click="submitForm">TAMBAH PARFUM</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showSuccessModal" class="modal-overlay" @click.self="resetForm">
        <div class="modal-card">
          <div class="success-icon-wrapper">
            <div class="success-icon-inner">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          <h3 class="modal-title">Mahakarya Olfaktori<br />Berhasil Ditambahkan!</h3>
          <p class="modal-desc">
            Parfum baru Anda kini telah tersimpan dengan<br />aman di brankas digital.
          </p>

          <div class="modal-actions-vertical">
            <button class="btn-gradient w-100" @click="$router.push('/koleksi')">
              Lihat di Koleksi
            </button>
            <button class="btn-outline-brown w-100" @click="resetForm">TAMBAH AROMA LAIN</button>
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

const formData = ref({
  name: '',
  brand: '',
  category: '',
  concentration: 'EDP',
  description: '',
  topNotes: ['Bergamot', 'Lemon'],
  heartNotes: ['Lavender'],
  baseNotes: ['Sandalwood', 'Oakmoss'],
})

const showSuccessModal = ref(false)

const submitForm = () => {
  showSuccessModal.value = true
}

const resetForm = () => {
  showSuccessModal.value = false
  // Reset fields opsional
  formData.value.name = ''
  formData.value.brand = ''
  formData.value.description = ''
  formData.value.category = ''
}
</script>

<style scoped>
/* =========================================
   Layout Dasar & Header (Identik 100% EditParfumView)
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
   GRID UTAMA TAMBAH (1 : 2.2)
   ========================================= */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 35px;
  align-items: start;
}

/* =========================================
   KOLOM KIRI (FOTO & KONSENTRASI)
   ========================================= */
.upload-placeholder {
  background-color: #ebece9;
  border-radius: 20px;
  aspect-ratio: 4/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;
  transition: background 0.2s;
  border: 2px dashed transparent;
}
.upload-placeholder:hover {
  background-color: #e2e3e0;
  border-color: #d1d5db;
}
.upload-icon {
  width: 44px;
  height: 44px;
  stroke: #a0a0a0;
  margin-bottom: 15px;
}
.upload-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #555;
  margin-bottom: 8px;
}
.upload-desc {
  font-size: 0.65rem;
  color: #888;
  font-weight: 500;
}

.concentration-section label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #888;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.pill-btn {
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 0.75rem;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.pill-btn:hover {
  border-color: #a0a0a0;
}
.pill-btn.active {
  border-color: #7d5731;
  color: #7d5731;
}

/* =========================================
   KOLOM KANAN (FORM DETAIL)
   ========================================= */
.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

.input-group {
  margin-bottom: 25px;
}
.input-row .input-group {
  margin-bottom: 0;
}

.input-group label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #888;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
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
   PIRAMIDA OLFAKTORI (Sama Persis EditParfumView)
   ========================================= */
.form-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  margin-bottom: 25px;
}

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
  margin: 0;
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
}
.heart-dot {
  background-color: #b27b5e;
}
.base-dot {
  background-color: #5c4b41;
}

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
  color: #634d43;
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
  color: #7d5731;
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
  color: #7d5731;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-card {
  background-color: #ffffff;
  width: 400px;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.3s ease;
}
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.success-icon-wrapper {
  width: 70px;
  height: 70px;
  background-color: #f4f4f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px auto;
}
.success-icon-inner {
  width: 36px;
  height: 36px;
  background-color: #7d5731;
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
  color: #7d5731;
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
  border: 1px solid #e5e5e5;
  border-radius: 30px;
  color: #7d5731;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline-brown:hover {
  border-color: #7d5731;
  background-color: #fafafa;
}

/* Responsif */
@media (max-width: 1100px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .input-row {
    grid-template-columns: 1fr;
  }
}
</style>
