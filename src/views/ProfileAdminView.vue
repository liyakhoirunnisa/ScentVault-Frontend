<template>
  <section class="admin-profile-view">
    <div class="profile-shell">
      <div class="top-toolbar">
        <div class="toolbar-profile">
          <div class="toolbar-copy">
            <strong>Profil Admin</strong>
            <span>{{ adminProfile.role.toUpperCase() }}</span>
          </div>
          <div class="toolbar-avatar">{{ adminInitials }}</div>
        </div>
      </div>

      <header class="page-header">
        <h1>Profil Admin</h1>
      </header>

      <section class="hero-card">
        <div class="hero-avatar">{{ adminInitials }}</div>

        <div class="hero-content">
          <h2>{{ adminProfile.fullName }}</h2>

          <div class="hero-meta">
            <span class="role-badge">{{ adminProfile.role.toUpperCase() }}</span>
            <span class="member-since">Mengelola panel sejak Januari 2024</span>
          </div>

          <button class="edit-photo-btn" type="button">Edit Foto</button>
        </div>
      </section>

      <div class="stats-grid">
        <article v-for="stat in adminStats" :key="stat.key" class="stat-card">
          <div class="stat-icon">
            <svg
              v-if="stat.key === 'rules'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33
                   1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51
                   1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82
                   1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1
                   1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33
                   1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51
                   1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82
                   1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>

            <svg
              v-else-if="stat.key === 'users'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
              <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path>
            </svg>
          </div>

          <span class="stat-tag">{{ stat.tag }}</span>
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </article>
      </div>

      <form class="settings-card" @submit.prevent="saveAdminProfile">
        <h3>Pengaturan Akun Admin</h3>

        <div class="form-grid">
          <div class="form-group">
            <label for="fullName">Nama Lengkap</label>
            <input
              id="fullName"
              v-model="adminProfile.fullName"
              type="text"
              placeholder="Nama admin"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="adminProfile.email"
              type="email"
              placeholder="Email admin"
            />
          </div>

          <div class="form-group">
            <label for="role">Jabatan</label>
            <input
              id="role"
              v-model="adminProfile.role"
              type="text"
              placeholder="Jabatan admin"
            />
          </div>

          <div class="form-group">
            <label for="phone">Nomor Kontak</label>
            <input
              id="phone"
              v-model="adminProfile.phone"
              type="text"
              placeholder="Nomor kontak"
            />
          </div>

          <div class="form-group full-width">
            <label for="password">Ubah Kata Sandi</label>

            <div class="password-field">
              <input
                id="password"
                v-model="adminProfile.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Masukkan kata sandi baru"
              />

              <button
                class="password-toggle"
                type="button"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Sembunyikan password' : 'Tampilkan password'"
              >
                <svg
                  v-if="!showPassword"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"></path>
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
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.8 21.8 0 0 1 5.06-5.94"></path>
                  <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.68 21.68 0 0 1-3.17 4.59"></path>
                  <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path>
                  <path d="M1 1l22 22"></path>
                </svg>
              </button>
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
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const defaultProfile = {
  fullName: 'Arkana Virel',
  email: 'admin@scentvault.com',
  role: 'Kepala Kurator',
  phone: '+62 812 4500 8899',
  password: 'adminsecure123',
}

const adminProfile = reactive({ ...defaultProfile })
const showPassword = ref(false)

const adminStats = ref([
  { key: 'rules', value: 18, label: 'Aturan Aktif', tag: 'SISTEM' },
  { key: 'users', value: 42, label: 'Pengguna Dikelola', tag: 'PENGGUNA' },
  { key: 'integrations', value: 7, label: 'Integrasi Data', tag: 'KONEKSI' },
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
  showPassword.value = false
}

const saveAdminProfile = () => {
  console.log('Admin profile saved:', { ...adminProfile })
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

.toolbar-avatar,
.hero-avatar {
  background: linear-gradient(180deg, #20445d 0%, #102635 100%);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(16, 38, 53, 0.2);
}

.toolbar-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1rem;
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
  grid-template-columns: repeat(3, minmax(220px, 1fr));
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

.stat-tag {
  position: absolute;
  top: 22px;
  right: 22px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #f1efeb;
  color: #b0aaa3;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.8px;
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

.password-field {
  position: relative;
}

.password-field input {
  padding-right: 56px;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border: none;
  background: transparent;
  color: #91867c;
  cursor: pointer;
}

.password-toggle svg {
  width: 18px;
  height: 18px;
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
</style>