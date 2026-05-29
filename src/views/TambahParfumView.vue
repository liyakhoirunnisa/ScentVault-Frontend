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

        <form class="form-grid" novalidate @submit.prevent="submitForm">
          <div class="left-column">
            <div class="upload-placeholder" @click="triggerUpload" :style="photoPreview ? { backgroundImage: `url(${photoPreview})`, backgroundSize: 'cover', backgroundPosition: 'center', border: 'none' } : {}">
              <input type="file" ref="fileInput" @change="handleImageUpload" accept="image/*" style="display: none;" />
              <div v-if="!photoPreview" style="display: flex; flex-direction: column; align-items: center;">
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
            </div>

            <div class="concentration-section">
              <label>KONSENTRASI</label>
              <div class="pill-group">
                <button
                  v-for="(val, label) in { 'EDP': 'eau de parfum', 'EDT': 'eau de toilette', 'Extrait': 'extrait de parfum', 'Cologne': 'eau de cologne' }"
                  :key="label"
                  type="button"
                  class="pill-btn"
                  :class="{ active: formData.concentration === val }"
                  @click="formData.concentration = val"
                >
                  {{ label }}
                </button>
              </div>
              <input
                ref="concentrationInput"
                class="native-validation-proxy"
                :value="formData.concentration"
                required
                aria-label="Konsentrasi"
              />
            </div>
            <div class="rating-section">
              <label>PERINGKAT KESELURUHAN</label>
              <div class="rating-display">
                <div class="stars-interactive">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    @click="formData.rating = star"
                    class="star-icon"
                    :class="{ active: star <= formData.rating }"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                  </svg>
                </div>
                <span class="rating-text">{{ formData.rating }}.0 / 5</span>
              </div>
              <input
                ref="ratingInput"
                class="native-validation-proxy"
                :value="formData.rating > 0 ? formData.rating : ''"
                required
                aria-label="Peringkat keseluruhan"
              />
            </div>
          </div>

          <div class="right-column">
            <div class="input-row">
              <div class="input-group">
                <label>NAMA FRAGRANCE</label>
                <input
                  ref="nameInput"
                  type="text"
                  class="form-control"
                  v-model="formData.name"
                  placeholder="Contoh: Oud Wood"
                  required
                />
              </div>
              <div class="input-group">
                <label>BRAND / RUMAH PARFUM</label>
                <input
                  ref="brandInput"
                  type="text"
                  class="form-control"
                  v-model="formData.brand"
                  placeholder="Contoh: Tom Ford"
                  required
                />
              </div>
            </div>

            <div class="input-group">
              <label>KATEGORI AROMA</label>
              <div class="select-wrapper">
                <select
                  ref="categoryInput"
                  class="form-control select-custom"
                  v-model="formData.category_id"
                  required
                >
                  <option value="" disabled selected>Pilih kategori</option>
                  <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
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
                      <button type="button" class="btn-remove-tag" @click="removeNote('top', index)">×</button>
                    </span>
                  </div>
                  <div class="input-with-add">
                    <input type="text" class="input-add-note" v-model="newTop" placeholder="Tambah bahan..." @keydown.enter.prevent="addNote('top')" />
                    <button type="button" class="btn-add-small" @click="addNote('top')">+ TAMBAH</button>
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
                      <button type="button" class="btn-remove-tag" @click="removeNote('heart', index)">×</button>
                    </span>
                  </div>
                  <div class="input-with-add">
                    <input type="text" class="input-add-note" v-model="newHeart" placeholder="Tambah bahan..." @keydown.enter.prevent="addNote('heart')" />
                    <button type="button" class="btn-add-small" @click="addNote('heart')">+ TAMBAH</button>
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
                      <button type="button" class="btn-remove-tag" @click="removeNote('base', index)">×</button>
                    </span>
                  </div>
                  <div class="input-with-add">
                    <input type="text" class="input-add-note" v-model="newBase" placeholder="Tambah bahan..." @keydown.enter.prevent="addNote('base')" />
                    <button type="button" class="btn-add-small" @click="addNote('base')">+ TAMBAH</button>
                  </div>
                </div>
              </div>
              <input
                ref="notesInput"
                class="native-validation-proxy"
                :value="notesValidationValue"
                required
                aria-label="Notes"
              />
            </div>

            <div class="form-actions">
              <button class="btn-gradient" type="submit">TAMBAH PARFUM</button>
            </div>
          </div>
        </form>
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

          <h3 class="modal-title">Berhasil Ditambahkan!</h3>
          <p class="modal-desc">
            Parfum baru Anda kini telah tersimpan dengan<br />aman di brankas digital.
          </p>

          <div class="modal-actions-vertical">
            <button class="btn-gradient w-100" @click="$router.push('/koleksi')">
              Lihat di Koleksi
            </button>
            <button class="btn-outline-brown w-100" @click="resetForm">Tambah Aroma Lain</button>
          </div>
        </div>
      </div>

      <transition name="toast-fade">
        <div
          v-if="toast.show"
          class="toast-notification"
          :class="toast.type"
          role="status"
          aria-live="polite"
        >
          <span class="toast-icon" aria-hidden="true">
            <svg v-if="toast.type === 'success'" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 12.5l3.2 3.2L17.5 8.5"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none">
              <path d="M12 8v5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
              <circle cx="12" cy="16.5" r="1" fill="currentColor" />
            </svg>
          </span>
          <p>{{ toast.message }}</p>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import api from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  name: '',
  brand: '',
  category_id: '',
  concentration: '',
  rating: 0,
  description: '',
  topNotes: [],
  heartNotes: [],
  baseNotes: [],
  image: null
})

const categories = ref([])
const photoPreview = ref(null)
const fileInput = ref(null)
const toast = ref({
  show: false,
  message: '',
  type: 'error'
})
let toastTimeout = null
const nameInput = ref(null)
const brandInput = ref(null)
const categoryInput = ref(null)
const notesInput = ref(null)
const concentrationInput = ref(null)
const ratingInput = ref(null)

const newTop = ref('')
const newHeart = ref('')
const newBase = ref('')

const notesValidationValue = computed(() => {
  const hasSavedNotes =
    formData.value.topNotes.length ||
    formData.value.heartNotes.length ||
    formData.value.baseNotes.length
  const hasPendingNotes =
    newTop.value.trim() ||
    newHeart.value.trim() ||
    newBase.value.trim()

  return hasSavedNotes || hasPendingNotes ? 'filled' : ''
})

const fetchCategories = async () => {
  try {
    const res = await api.get('/pages/perfume-collection')
    categories.value = res.data.data.categories
  } catch (e) {
    console.error('Failed fetching categories', e)
  }
}

onMounted(() => fetchCategories())

const triggerUpload = () => fileInput.value.click()

const showToast = (message, type = 'error') => {
  toast.value = {
    show: true,
    message,
    type
  }

  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

const handleImageUpload = (e) => {
  const file = e.target.files[0]
  if(file){
    formData.value.image = file
    photoPreview.value = URL.createObjectURL(file)
  }
}

const addNote = (type) => {
  if (type === 'top' && newTop.value.trim()) {
    formData.value.topNotes.push(newTop.value.trim())
    newTop.value = ''
  } else if (type === 'heart' && newHeart.value.trim()) {
    formData.value.heartNotes.push(newHeart.value.trim())
    newHeart.value = ''
  } else if (type === 'base' && newBase.value.trim()) {
    formData.value.baseNotes.push(newBase.value.trim())
    newBase.value = ''
  }
}

const removeNote = (type, index) => {
  if (type === 'top') formData.value.topNotes.splice(index, 1)
  if (type === 'heart') formData.value.heartNotes.splice(index, 1)
  if (type === 'base') formData.value.baseNotes.splice(index, 1)
}

const showSuccessModal = ref(false)

const commitPendingNotes = () => {
  addNote('top')
  addNote('heart')
  addNote('base')
}

const validateRequiredFields = () => {
  const requiredFields = [
    nameInput,
    brandInput,
    categoryInput,
    notesInput,
    concentrationInput,
    ratingInput
  ]

  for (const field of requiredFields) {
    const input = field.value
    if (input && !input.checkValidity()) {
      input.reportValidity()
      return false
    }
  }

  return true
}

const submitForm = async () => {
  if (!validateRequiredFields()) return

  commitPendingNotes()

  const fd = new FormData()
  fd.append('name', formData.value.name)
  fd.append('brand', formData.value.brand)
  fd.append('category_id', formData.value.category_id)
  fd.append('concentration', formData.value.concentration)
  fd.append('description', formData.value.description)
  fd.append('star_rating', formData.value.rating)
  
  if(formData.value.image) {
    fd.append('image', formData.value.image)
  }

  let noteIndex = 0;
  formData.value.topNotes.forEach(n => {
    fd.append(`notes[${noteIndex}][name]`, n)
    fd.append(`notes[${noteIndex}][type]`, 'top')
    noteIndex++;
  })
  formData.value.heartNotes.forEach(n => {
    fd.append(`notes[${noteIndex}][name]`, n)
    fd.append(`notes[${noteIndex}][type]`, 'middle')
    noteIndex++;
  })
  formData.value.baseNotes.forEach(n => {
    fd.append(`notes[${noteIndex}][name]`, n)
    fd.append(`notes[${noteIndex}][type]`, 'base')
    noteIndex++;
  })

  try {
    await api.post('/perfumes', fd, { headers: { 'Content-Type': 'multipart/form-data' }})
    showSuccessModal.value = true
  } catch (e) {
    showToast('Gagal menyimpan parfum. Silakan periksa kembali data Anda.', 'error')
    console.error(e)
  }
}

const resetForm = () => {
  showSuccessModal.value = false
  formData.value.name = ''
  formData.value.brand = ''
  formData.value.description = ''
  formData.value.category_id = ''
  formData.value.concentration = ''
  formData.value.rating = 0
  formData.value.topNotes = []
  formData.value.heartNotes = []
  formData.value.baseNotes = []
  formData.value.image = null
  newTop.value = ''
  newHeart.value = ''
  newBase.value = ''
  photoPreview.value = null
}

onBeforeUnmount(() => {
  if (toastTimeout) clearTimeout(toastTimeout)
})
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
  padding: 20px 50px 50px 50px;
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
  grid-template-columns: 1fr 2.1fr;
  gap: 40px;
  align-items: start;
  margin: 0;
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

.concentration-section {
  position: relative;
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

.native-validation-proxy {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

/* =========================================
   TAMBAHAN: GAYA RATING KESELURUHAN
   ========================================= */
.rating-section {
  position: relative;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 25px 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  margin-top: 30px; /* Jarak dari opsi konsentrasi di atasnya */
}

.rating-section label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  color: #888;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.rating-display {
  display: flex;
  align-items: center;
  gap: 15px;
}

.stars-interactive {
  display: flex;
  gap: 6px;
  cursor: pointer;
}

.star-icon {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: #b0b0b0; /* Warna abu-abu untuk bintang kosong */
  stroke-width: 2;
  stroke-linejoin: round;
  transition: all 0.2s ease;
}

/* Mengubah warna bintang menjadi emas padat saat aktif */
.star-icon.active {
  fill: #dca52d;
  stroke: #dca52d;
}

.rating-text {
  font-size: 1rem;
  font-weight: 800;
  color: #7d5731;
  margin-left: 5px;
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
  position: relative;
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

.toast-notification {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 260px;
  max-width: min(90vw, 500px);
  padding: 12px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(125, 87, 49, 0.12);
  box-shadow: 0 18px 34px rgba(41, 31, 21, 0.14);
  backdrop-filter: blur(8px);
}

.toast-notification.success {
  color: #2f7f46;
}

.toast-notification.error {
  color: #b84536;
}

.toast-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.toast-notification.success .toast-icon {
  background: #e7f7eb;
}

.toast-notification.error .toast-icon {
  background: #fdeaea;
}

.toast-icon svg {
  width: 16px;
  height: 16px;
}

.toast-notification p {
  margin: 0;
  color: #3f3833;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -8px);
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
