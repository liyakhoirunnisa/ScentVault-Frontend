<template>
  <div class="dashboard-layout">
    <Sidebar />

    <main class="main-content">
      <Topbar />

      <div class="content-body">
        <div class="profile-hero-card">
          <div class="hero-avatar-wrapper">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
              alt="Foto Profil Elena"
              class="hero-avatar"
            />
          </div>

          <div class="hero-info">
            <h1 class="hero-name">Elena Vance</h1>
            <div class="hero-meta">
              <span class="badge-role">SENIOR CURATOR</span>
              <span class="join-date">Bergabung sejak Januari 2023</span>
            </div>
            <div class="hero-actions">
              <button class="btn-gradient">Edit Foto</button>
            </div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 2v20"></path>
                <path d="M19 2v20"></path>
                <path d="M5 7h14"></path>
                <path d="M5 14h14"></path>
                <path d="M5 21h14"></path>
                <path d="M8 7V4h4v3"></path>
                <path d="M12 14v-3h4v3"></path>
              </svg>
            </div>
            <h2 class="stat-number">128</h2>
            <p class="stat-label">TOTAL KOLEKSI</p>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M3 21.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8L3 21.5z"
                ></path>
                <path d="M14.5 6.5l3 3-6 6H9v-2.5l5.5-6.5z"></path>
                <line x1="13" y1="15.5" x2="17" y2="15.5"></line>
              </svg>
            </div>
            <h2 class="stat-number">42</h2>
            <p class="stat-label">ULASAN TERBIT</p>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
            </div>
            <h2 class="stat-number">15</h2>
            <p class="stat-label">AROMA FAVORIT</p>
          </div>
        </div>

        <div class="settings-card">
          <h3 class="settings-title">Pengaturan Akun</h3>

          <div class="form-row-2">
            <div class="input-group">
              <label>NAMA LENGKAP</label>
              <input type="text" class="form-control" v-model="userData.name" />
            </div>
            <div class="input-group">
              <label>EMAIL</label>
              <input type="email" class="form-control" v-model="userData.email" />
            </div>
          </div>

          <div class="input-group">
            <label>UBAH KATA SANDI</label>
            <div class="password-wrapper">
              <svg
                class="icon-left"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>

              <input
                :type="showPassword ? 'text' : 'password'"
                class="form-control input-password"
                v-model="userData.password"
                placeholder="••••••••"
              />

              <button class="btn-toggle-password" @click="showPassword = !showPassword">
                <svg
                  v-if="!showPassword"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg
                  v-else
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                  ></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-outline-cancel" @click="$router.back()">Batal</button>
            <button class="btn-gradient" @click="promptSave">Simpan Perubahan</button>
          </div>
        </div>
      </div>

      <div v-if="showSaveModal" class="modal-overlay" @click.self="closeSaveModal">
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

          <h3 class="modal-title">Yakin Ingin Simpan<br />Perubahan?</h3>
          <p class="modal-desc">
            Data profil Anda akan diperbarui dan<br />tersimpan di sistem ScentVault.
          </p>

          <div class="modal-actions-vertical">
            <button class="btn-gradient w-100" @click="confirmSave">IYA, SIMPAN</button>
            <button class="btn-outline-brown w-100" @click="closeSaveModal">BATAL</button>
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

// Data User State
const userData = ref({
  name: 'Elena Vance',
  email: 'Elenavance@gmail.com',
  password: '',
})

const showPassword = ref(false)

// STATE UNTUK MENGONTROL MODAL KONFIRMASI SIMPAN
const showSaveModal = ref(false)

// Memunculkan modal saat tombol diklik
const promptSave = () => {
  showSaveModal.value = true
}

// Fungsi ketika pengguna klik "IYA, SIMPAN"
const confirmSave = () => {
  console.log('Perubahan profil berhasil disimpan!', userData.value)
  showSaveModal.value = false // Tutup modal setelah menyimpan
}

// Fungsi ketika pengguna klik "BATAL"
const closeSaveModal = () => {
  showSaveModal.value = false
}
</script>

<style scoped>
/* =========================================
   Layout Dasar & Header
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
  padding: 40px 60px;
  overflow-y: auto;
}
.content-body::-webkit-scrollbar {
  width: 8px;
}
.content-body::-webkit-scrollbar-thumb {
  border-radius: 4px;
}

/* =========================================
   KARTU HERO PROFIL
   ========================================= */
.profile-hero-card {
  background-color: #f4f4f0;
  border-radius: 24px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 35px;
  margin-bottom: 30px;
}
.hero-avatar-wrapper {
  width: 140px;
  height: 140px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}
.hero-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-info {
  display: flex;
  flex-direction: column;
}
.hero-name {
  font-size: 2.5rem;
  font-weight: 800;
  color: #7d5731;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.hero-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}
.badge-role {
  background-color: #fcdccf;
  color: #634d43;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 6px 14px;
  border-radius: 20px;
  letter-spacing: 1px;
}
.join-date {
  font-size: 0.85rem;
  color: #888;
  font-weight: 500;
}
.hero-actions {
  display: flex;
  gap: 15px;
}

.btn-gradient {
  padding: 14px 40px;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(125, 87, 49, 0.25);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 87, 49, 0.35);
}

/* =========================================
   STATISTIK GRID
   ========================================= */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 30px;
}
.stat-card {
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
}
.stat-icon {
  margin-bottom: 20px;
}
.stat-icon svg {
  width: 28px;
  height: 28px;
  stroke: #7d5731;
}
.stat-number {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 8px;
}
.stat-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #a0a0a0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* =========================================
   PENGATURAN AKUN (Bawah)
   ========================================= */
.settings-card {
  background-color: #f4f4f0;
  border-radius: 24px;
  padding: 40px;
}
.settings-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 30px;
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 25px;
}
.input-group {
  margin-bottom: 25px;
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
  background-color: #ffffff; /* Input putih di atas latar abu-abu */
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 16px 20px;
  font-family: inherit;
  font-size: 0.95rem;
  color: #333;
  width: 100%;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
}
.form-control:focus {
  border-color: #7d5731;
  outline: none;
}

/* Khusus Input Kata Sandi */
.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input-password {
  padding-left: 50px;
  padding-right: 50px;
}
.icon-left {
  position: absolute;
  left: 20px;
  width: 18px;
  height: 18px;
  stroke: #a0a0a0;
  pointer-events: none;
}
.btn-toggle-password {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-toggle-password svg {
  width: 18px;
  height: 18px;
  stroke: #a0a0a0;
  transition: stroke 0.2s;
}
.btn-toggle-password:hover svg {
  stroke: #7d5731;
}

/* =========================================
   TOMBOL AKSI BAWAH
   ========================================= */
.form-actions {
  display: flex;
  justify-content: flex-end; /* Memaksa tombol merapat ke kanan */
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
  padding: 14px 30px;
  background: linear-gradient(135deg, #7d5731 0%, #fac898 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 400;
  font-size: 0.9rem;
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
  background-color: #f4f4f0; /* Krem muda */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px auto;
}

.success-icon-inner {
  width: 36px;
  height: 36px;
  background-color: #7d5731; /* Cokelat pekat */
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

/* Responsif Dasar */
@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .form-row-2 {
    grid-template-columns: 1fr;
  }
  .profile-hero-card {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .hero-meta,
  .hero-actions {
    justify-content: center;
  }
}
</style>
