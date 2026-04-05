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

          <div class="action-buttons">
           <button class="btn-action btn-edit" @click="$router.push('/edit-parfum')">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="action-icon"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              UBAH
            </button>

            <button class="btn-action btn-delete" @click="showDeleteModal = true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="action-icon"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                ></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              HAPUS
            </button>
          </div>
        </div>

        <div class="product-layout">
          <div class="product-gallery-side">
            <div class="main-image">
              <img src="@/assets/parfum-oud-immortel.jpeg" alt="Oud Immortel" />
            </div>

            <div class="check-btn-wrapper">
              <button class="btn-gradient" @click="$router.push('/kesesuaian')">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 3l1.5 4.5L15 9l-4.5 1.5L9 15l-1.5-4.5L3 9l4.5-1.5L9 3z"></path>
                  <path d="M18 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path>
                </svg>
                CEK KESESUAIAN AROMA
              </button>
            </div>
          </div>

          <div class="product-info-side">
            <span class="brand-name">MAISON DE L'ARÔME</span>
            <h2 class="product-title">Oud Immortel</h2>

            <div class="rating-row">
              <div class="stars">
                <svg
                  v-for="i in 4"
                  :key="i"
                  class="star-icon full"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg class="star-icon half" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
              </div>
              <span class="date-added">Ditambahkan pada 14 Oktober 2023</span>
            </div>

            <p class="description">
              Wewangian kayu yang kompleks yang menangkap esensi kayu oud kuno yang seimbang dengan
              kecerahan ceria dari kapulaga dan limoncello. Ia berkembang menjadi jejak asap yang
              canggih yang bertahan selama berjam-jam, menggema kemewahan perpustakaan pribadi.
            </p>

            <h3 class="section-heading">Piramida Olfaktori</h3>
            <div class="olfactory-grid">
              <div class="olfactory-col">
                <h4>AROMA PUNCAK</h4>
                <div class="notes-stack">
                  <span class="note-pill">Kapulaga</span>
                  <span class="note-pill">Limoncello</span>
                  <span class="note-pill">Kemenyan</span>
                </div>
              </div>
              <div class="olfactory-col">
                <h4>AROMA INTI</h4>
                <div class="notes-stack">
                  <span class="note-pill">Papirus</span>
                  <span class="note-pill">Patchouli</span>
                  <span class="note-pill">Rosewood</span>
                </div>
              </div>
              <div class="olfactory-col">
                <h4>AROMA DASAR</h4>
                <div class="notes-stack">
                  <span class="note-pill">Oud</span>
                  <span class="note-pill">Oakmoss</span>
                  <span class="note-pill">Tembakau</span>
                </div>
              </div>
            </div>

            <div class="specs-card">
              <div class="spec-item">
                <svg
                  class="spec-icon"
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
                <span class="spec-label">KETAHANAN</span>
                <span class="spec-value">10-12 jam</span>
              </div>

              <div class="spec-item">
                <svg
                  class="spec-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 6c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"></path>
                  <path d="M4 12c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"></path>
                  <path d="M4 18c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"></path>
                </svg>
                <span class="spec-label">PANCARAN</span>
                <span class="spec-value">Kuat</span>
              </div>

              <div class="spec-item">
                <svg
                  class="spec-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="12" y1="2" x2="12" y2="4"></line>
                  <line x1="12" y1="20" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
                  <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="4" y2="12"></line>
                  <line x1="20" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
                  <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
                </svg>
                <span class="spec-label">TERBAIK UNTUK</span>
                <span class="spec-value">Malam</span>
              </div>

              <div class="spec-item">
                <svg
                  class="spec-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                  <line x1="15" y1="5" x2="19" y2="5"></line>
                  <line x1="15" y1="9" x2="17" y2="9"></line>
                </svg>
                <span class="spec-label">MUSIM</span>
                <span class="spec-value">Gugur /<br />Dingin</span>
              </div>
            </div>

            <div class="journal-note-card">
              <div class="journal-note-header">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Catatan Buku Harian Aroma
              </div>
              <p>
                "Dipakai hari ini untuk pembukaan galeri. Sangat cocok dipadukan dengan mantel
                kasmir gelap. Tegas tanpa terasa berlebihan. Menerima tiga pujian sebelum jam kedua
                berakhir."
              </p>
            </div>
          </div>
        </div>

        <section class="recommendations-bottom">
          <h3 class="section-title">Mungkin Anda juga menyukai</h3>
          <div class="rec-grid">
            <div class="rec-item" v-for="item in recommendations" :key="item.name">
              <div class="rec-img-box">
                <img :src="item.img" :alt="item.name" />
              </div>
              <div class="rec-info">
                <span class="rec-brand">{{ item.brand }}</span>
                <h5 class="rec-name">{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div v-if="showDeleteModal" class="modal-overlay" @click.self="closeDeleteModal">
        <div class="modal-card">
          <div class="modal-icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="modal-icon"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              ></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>

          <h3 class="modal-title">Hapus dari Koleksi?</h3>
          <p class="modal-desc">
            Apakah Anda yakin ingin menghapus parfum ini?<br />
            Tindakan ini tidak dapat dibatalkan dan semua data terkait akan hilang.
          </p>

          <div class="modal-actions">
            <button class="btn-modal-cancel" @click="closeDeleteModal">BATAL</button>
            <button class="btn-modal-confirm" @click="confirmDelete">HAPUS DARI KOLEKSI</button>
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
import imgRec1 from '@/assets/rekomendasi-1.jpeg'
import imgRec2 from '@/assets/rekomendasi-2.jpeg'
import imgRec3 from '@/assets/rekomendasi-3.jpeg'
import imgRec4 from '@/assets/rekomendasi-4.png'

// STATE UNTUK MENGONTROL MODAL HAPUS
const showDeleteModal = ref(false)

// Fungsi untuk menutup modal
const closeDeleteModal = () => {
  showDeleteModal.value = false
}

// Fungsi ketika tombol Hapus di dalam modal ditekan
const confirmDelete = () => {
  console.log('Parfum berhasil dihapus!')
  showDeleteModal.value = false
  // (Opsional) router.push('/beranda') jika ingin langsung kembali ke beranda
}

// Mock data untuk rekomendasi agar HTML lebih bersih
const recommendations = [
  {
    brand: 'BYREDO',
    name: 'Black Saffron',
    img: imgRec1,
  },
  {
    brand: 'DIPTYQUE',
    name: 'Tam Dao',
    img: imgRec2,
  },
  {
    brand: 'LE LABO',
    name: 'Santal 33',
    img: imgRec3,
  },
  {
    brand: 'AESOP',
    name: 'Hwyl Eau de Parfum',
    img: imgRec4,
  },
]
</script>

<style scoped>
/* =========================================
   Layout Utama
   ========================================= */
.dashboard-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* KUNCI: Seluruh CSS .sidebar, .sidebar-header, dll TELAH DIHAPUS 
   karena sudah diurus oleh Sidebar.vue secara global */

/* =========================================
   Kanvas Utama (Header & Scroll)
   ========================================= */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.icon-btn:hover {
  background-color: #f0f0f0;
  color: #986d4d;
}
.icon-btn svg {
  width: 20px;
  height: 20px;
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
   Action Bar (Back, Ubah, Hapus)
   ========================================= */
.action-bar {
  display: flex;
  justify-content: space-between;
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
.action-buttons {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn-action {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.action-icon {
  width: 16px;
  height: 16px;
}

.btn-edit {
  background-color: transparent;
  border-color: #b0b3ae5d;
  color: #7d5731;
}
.btn-edit:hover {
  background-color: #f9fafb;
  border-color: #7d5731;
  color: #7d5731;
}
.btn-edit .action-icon {
  stroke: #7d5731;
}

.btn-delete {
  background-color: transparent;
  border-color: rgba(230, 174, 174, 0.4);
  color: #a73b21;
}
.btn-delete:hover {
  background-color: #f9fafb;
  border-color: #b91c1c;
  color: #b91c1c;
}

.btn-delete .action-icon {
  stroke: #991b1b;
}
.btn-delete:hover .action-icon {
  stroke: #b91c1c;
}

/* =========================================
   GAYA MODAL (POP-UP HAPUS)
   ========================================= */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* Layar redup */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Pastikan selalu berada di paling atas */
}

.modal-card {
  background-color: #ffffff;
  width: 450px; /* Lebar card sesuai desain */
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.3s ease; /* Efek transisi halus */
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

.modal-icon-wrapper {
  width: 64px;
  height: 64px;
  background-color: #fcdccf; /* Latar merah muda */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;
}

.modal-icon {
  width: 28px;
  height: 28px;
  stroke: #b24b30; /* Merah karat untuk ikon */
}

.modal-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.modal-desc {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn-modal-cancel,
.btn-modal-confirm {
  flex: 1; /* Membuat kedua tombol sama panjang */
  padding: 14px 0;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-modal-cancel {
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  color: #6b7280;
}
.btn-modal-cancel:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.btn-modal-confirm {
  background-color: #a73b21; /* Warna merah/cokelat sesuai desain */
  border: 1px solid #a73b21;
  color: #ffffff;
}
.btn-modal-confirm:hover {
  background-color: #8c3a24;
}

/* =========================================
Product Layout (Kiri: Gambar, Kanan: Info)
========================================= */
.product-layout {
  display: grid;
  grid-template-columns: 1fr 1.3fr; /* Proporsi Kiri & Kanan */
  gap: 50px;
  margin-bottom: 60px;
}

/* --- KIRI: Galeri --- */
.main-image {
  width: 100%;
  aspect-ratio: 4/5;
  background-color: #111;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;
}
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.check-btn-wrapper {
  display: flex;
  justify-content: center;
}
.btn-gradient {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.8rem;
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

/* --- KANAN: Informasi --- */
.brand-name {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  color: #7d5731;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
}
.product-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #303330;
  line-height: 1.1;
  margin-bottom: 15px;
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}
.stars {
  display: flex;
  gap: 2px;
  color: #7d5731;
}
.star-icon {
  width: 18px;
  height: 18px;
}
.star-icon.half {
  opacity: 0.4;
} /* Simulasi simpel untuk bintang setengah */
.date-added {
  font-size: 0.8rem;
  color: #5d605c;
  font-weight: 600;
}

.description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #5d605c;
  text-align: justify;
  margin-bottom: 35px;
}

/* Piramida Olfaktori */
.section-heading {
  font-size: 1.1rem;
  font-weight: 800;
  color: #303330;
  margin-bottom: 20px;
}

.olfactory-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}
.olfactory-col {
  background-color: #f4f4f0;
  border-radius: 12px;
  padding: 24px;
  border-left: 5px solid #6f4c26;
}

.olfactory-col h4 {
  font-size: 0.65rem;
  font-weight: 700;
  color: #888;
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.notes-stack {
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
}
.note-pill {
  background-color: #ffffff;
  border: none;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.01);
}

/* Specs Card */
.specs-card {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 25px 30px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03);
  margin-bottom: 30px;
}
.spec-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.spec-icon {
  width: 24px;
  height: 24px;
  stroke: #7d5731;
  margin-bottom: 10px;
}
.spec-label {
  font-size: 0.65rem;
  font-weight: 500;
  color: #a0a0a0;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.spec-value {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
}

/* Journal Note Card */
.journal-note-card {
  background-color: #f8f5f1; /* Warna krem pucat */
  border-radius: 12px;
  padding: 25px;
}
.journal-note-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  font-weight: 800;
  color: #5e5844;
  margin-bottom: 15px;
}
.journal-note-header svg {
  width: 16px;
  height: 16px;
  stroke: #5e5844;
}
.journal-note-card p {
  font-size: 0.9rem;
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* =========================================
   Rekomendasi Bawah
   ========================================= */
.section-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 25px;
}

.rec-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.rec-item {
  cursor: pointer;
}
.rec-img-box {
  width: 100%;
  aspect-ratio: 1;
  background-color: #111;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 15px;
}
.rec-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.rec-item:hover .rec-img-box img {
  transform: scale(1.05);
}

.rec-brand {
  font-size: 0.65rem;
  font-weight: 800;
  color: #7d5731;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 4px;
}
.rec-name {
  font-size: 0.95rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
}

/* Responsif */
@media (max-width: 1100px) {
  .product-layout {
    grid-template-columns: 1fr;
  }
}
</style>
