<template>
  <section class="admin-profile-view">
    <div class="profile-shell">
      <header class="page-header">
        <h1>Profile Admin</h1>
      </header>

      <section class="hero-card">
        <div class="hero-avatar">
          <img src="https://i.pravatar.cc/150?img=11" alt="Foto Profil" />
        </div>

        <div class="hero-content">
          <h2>{{ adminProfile.fullName }}</h2>
          <button class="edit-photo-btn" type="button">Edit Foto</button>
        </div>
      </section>

      <div class="stats-grid">
        <article v-for="stat in adminStats" :key="stat.key" class="stat-card">
          <div class="stat-icon">
            <svg
              v-if="stat.key === 'collections'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8a6035"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <svg
              v-else-if="stat.key === 'reviews'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8a6035"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M12 7v4"></path>
              <path d="M12 15h.01"></path>
            </svg>
          </div>

          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </article>
      </div>

      <form class="settings-card" @submit.prevent="saveAdminProfile">
        <h3>Pengaturan Akun</h3>

        <div class="form-grid">
          <div class="form-group">
            <label for="fullName">Nama Lengkap</label>
            <input
              id="fullName"
              v-model="adminProfile.fullName"
              type="text"
              placeholder="Elena Vance"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="adminProfile.email"
              type="email"
              placeholder="Elenavance@gmail.com"
            />
          </div>

          <div class="form-group">
            <label for="password">Kata Sandi</label>
            <div class="input-icon-wrap">
              <svg class="left-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                id="password"
                v-model="adminProfile.password"
                type="password"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="passwordConfirm">Konfirmasi Kata Sandi</label>
            <input
              id="passwordConfirm"
              v-model="adminProfile.passwordConfirm"
              type="password"
            />
          </div>

          <div class="form-group">
            <label for="role">Pilih Peran</label>
            <div class="select-wrap">
              <select id="role" v-model="adminProfile.role">
                <option value="" disabled></option>
                <option value="kurator">Kurator</option>
                <option value="admin">Admin</option>
              </select>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>

          <div class="form-group">
            <label for="provinsi">Provinsi</label>
            <div class="select-wrap">
              <select id="provinsi" v-model="adminProfile.provinsi"><option value="" disabled></option></select>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>

          <div class="form-group">
            <label for="kabupaten">Kabupaten/Kota</label>
            <div class="select-wrap">
              <select id="kabupaten" v-model="adminProfile.kabupaten"><option value="" disabled></option></select>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>

          <div class="form-group">
            <label for="kecamatan">Kecamatan</label>
            <div class="select-wrap">
              <select id="kecamatan" v-model="adminProfile.kecamatan"><option value="" disabled></option></select>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>

          <div class="form-group">
            <label for="kelurahan">Kelurahan/Desa</label>
            <div class="select-wrap">
              <select id="kelurahan" v-model="adminProfile.kelurahan"><option value="" disabled></option></select>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button class="btn btn-secondary" type="button" @click="resetProfile">
            Batal
          </button>
          <button class="btn btn-primary" type="submit">
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>

    <transition name="modal-fade">
      <div
        v-if="showModal"
        class="modal-overlay"
        @click.self="closeModal"
      >
        <div class="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title">
          <div class="success-icon-wrap">
            <div class="success-icon-glow"></div>
            <div class="success-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 12.5l3.2 3.2L17.5 8.5"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <h2 id="success-title">Perubahan Berhasil Disimpan</h2>
          <p>Profile telah diperbarui secara otomatis di seluruh sistem ScentVault.</p>

          <div class="modal-actions">
            <button class="btn btn-primary modal-btn" type="button" @click="closeModal">
              SELESAI
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const defaultProfile = {
  fullName: 'Brando',
  email: 'Elenavance@gmail.com',
  role: 'admin',
  password: '',
  passwordConfirm: '',
  provinsi: '',
  kabupaten: '',
  kecamatan: '',
  kelurahan: '',
}

const adminProfile = reactive({ ...defaultProfile })

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}

const adminStats = ref([
  { key: 'collections', value: 128, label: 'TOTAL KOLEKSI' },
  { key: 'reviews', value: 42, label: 'ULASAN TERBIT' },
])

const adminInitials = computed(() =>
  adminProfile.fullName
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase(),
)

const resetProfile = () => {
  Object.assign(adminProfile, defaultProfile)
}

const saveAdminProfile = () => {
  console.log('Admin profile saved:', { ...adminProfile })
  showModal.value = true
}
</script>

<style scoped>
.admin-profile-view {
  width: 100%;
  min-height: 100vh;
  padding: 42px 56px 48px;
  box-sizing: border-box;
  background: #f7f5f1;
}

.profile-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.top-toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 26px;
}

.toolbar-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.1;
}

.toolbar-copy strong {
  color: #7d5731;
  font-size: 0.92rem;
  font-weight: 800;
}

.toolbar-copy span {
  color: #9a9189;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.8px;
}

.hero-avatar {
  overflow: hidden;
  background: transparent;
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-header {
  margin-bottom: 26px;
}

.page-header h1 {
  margin: 0;
  font-size: clamp(2rem, 2.8vw, 2.55rem);
  color: #8a6035;
  font-weight: 800;
}

.hero-card {
  display: flex;
  align-items: center;
  gap: 26px;
  background: #f0eeea;
  border: 1px solid rgba(125, 87, 49, 0.08);
  border-radius: 28px;
  padding: 28px 30px;
  box-shadow: 0 12px 30px rgba(59, 42, 31, 0.05);
  margin-bottom: 24px;
}

.hero-avatar {
  width: 118px;
  height: 118px;
  border-radius: 24px;
  font-size: 2rem;
  flex-shrink: 0;
}

.hero-content h2 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.05;
  color: #8a6035;
  font-weight: 800;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.role-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: #f2d6cb;
  color: #8f6140;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.member-since {
  color: #8f8881;
  font-size: 0.95rem;
}

.edit-photo-btn {
  height: 44px;
  padding: 0 24px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 10px 24px rgba(125, 87, 49, 0.22);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 22px;
  margin-bottom: 26px;
}

.stat-card {
  position: relative;
  background: #fbfaf8;
  border: 1px solid rgba(125, 87, 49, 0.08);
  border-radius: 24px;
  padding: 28px 26px 24px;
  box-shadow: 0 12px 30px rgba(59, 42, 31, 0.05);
}

.stat-icon {
  color: #8a6035;
  margin-bottom: 26px;
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-card h3 {
  margin: 0 0 6px;
  font-size: 3rem;
  line-height: 1;
  color: #0f172a;
  font-weight: 800;
}

.stat-card p {
  margin: 0;
  color: #8b847e;
  font-size: 0.95rem;
  font-weight: 600;
}

.settings-card {
  background: #f0eeea;
  border: 1px solid rgba(125, 87, 49, 0.08);
  border-radius: 28px;
  padding: 34px 32px;
  box-shadow: 0 12px 28px rgba(59, 42, 31, 0.04);
}

.settings-card h3 {
  margin: 0 0 24px;
  font-size: 1.65rem;
  color: #30241f;
  font-weight: 800;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 22px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  margin-bottom: 10px;
  font-size: 0.76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #91867c;
  font-weight: 700;
}

.form-group input {
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  border-radius: 14px;
  padding: 0 18px;
  box-sizing: border-box;
  background: #ffffff;
  color: #43312a;
  font-size: 0.95rem;
  font-weight: 600;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.form-group input:focus {
  box-shadow: 0 0 0 3px rgba(125, 87, 49, 0.12);
}

.input-icon-wrap {
  position: relative;
  width: 100%;
}

.left-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #a39c96;
}

.input-icon-wrap input {
  padding-left: 42px !important;
}

.select-wrap {
  position: relative;
}

.select-wrap select {
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  border-radius: 14px;
  padding: 0 18px;
  box-sizing: border-box;
  background: #ffffff;
  color: #43312a;
  font-size: 0.95rem;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.select-wrap select:focus {
  box-shadow: 0 0 0 3px rgba(125, 87, 49, 0.12);
}

.select-wrap svg {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #a39c96;
  pointer-events: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  border: 1.5px solid rgba(125, 87, 49, 0.24);
  color: #8a6035;
}

.btn-primary {
  border: none;
  color: #ffffff;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 10px 24px rgba(125, 87, 49, 0.22);
}

@media (max-width: 1080px) {
  .stats-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group.full-width {
    grid-column: auto;
  }
}

@media (max-width: 720px) {
  .admin-profile-view {
    padding: 32px 20px 40px;
  }

  .top-toolbar {
    justify-content: flex-start;
  }

  .hero-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-content h2 {
    font-size: 2.15rem;
  }

  .form-actions {
    justify-content: stretch;
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(33, 27, 21, 0.45);
  backdrop-filter: blur(4px);
}

.success-modal {
  width: min(100%, 462px);
  padding: 42px 36px 34px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 26px 60px rgba(41, 31, 21, 0.16);
  text-align: center;
}

.success-icon-wrap {
  position: relative;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
}

.success-icon-glow {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(101, 214, 122, 0.24) 0%, rgba(101, 214, 122, 0) 72%);
}

.success-icon {
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #4caf62;
  border: 4px solid currentColor;
  background: #e7f7eb;
}

.success-icon svg {
  width: 22px;
  height: 22px;
}

.success-modal h2 {
  margin: 0 0 12px;
  color: #2f2c29;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  line-height: 1.35;
  font-weight: 800;
}

.success-modal p {
  max-width: 320px;
  margin: 0 auto;
  color: #7a726b;
  font-size: 0.92rem;
  line-height: 1.65;
}

.modal-actions {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}

.modal-btn {
  width: 100%;
  max-width: 280px;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .success-modal,
.modal-fade-leave-to .success-modal {
  transform: translateY(10px) scale(0.98);
}
</style>