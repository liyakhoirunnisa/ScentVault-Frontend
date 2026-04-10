<template>
  <main class="add-user-page">
    <section class="page-header">
      <div>
        <h1>Tambah Pengguna</h1>
        <p>
          Daftarkan kurator atau pengelola baru ke dalam ekosistem Digital
          Atelier ScentVault.
        </p>
      </div>
    </section>

    <section class="form-shell">
      <form class="user-form" @submit.prevent="handleSubmit">
        <div class="form-grid">
          <div class="field-group">
            <label for="fullName">Nama Lengkap</label>
            <input
              id="fullName"
              v-model="form.name"
              type="text"
              placeholder="Contoh: Jean-Claude Ellena"
            />
          </div>

          <div class="field-group">
            <label for="email">Email Resmi</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="nama@scentvault.com"
            />
          </div>

          <div class="field-group">
            <label for="role">Peran Akses</label>
            <div class="select-wrap">
              <select id="role" v-model="form.role">
                <option value="" disabled>Pilih Peran</option>
                <option
                  v-for="option in roleOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 10l5 5 5-5"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="field-group">
            <label for="password">Kata Sandi Sementara</label>
            <div class="password-wrap">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
              />
              <button
                class="input-action"
                type="button"
                :aria-label="showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'"
                @click="showPassword = !showPassword"
              >
                <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 3l18 18M10.6 10.6A2 2 0 0 0 13.4 13.4M9.88 5.09A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a17.34 17.34 0 0 1-4.06 4.62M6.1 6.1C3.56 7.76 2 12 2 12a17.3 17.3 0 0 0 7.9 5.9"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="status-panel">
          <div class="status-copy">
            <h3>Status Akun</h3>
            <p>Aktifkan segera setelah dibuat?</p>
          </div>

          <div class="status-toggle-wrap">
            <button
              type="button"
              class="status-toggle"
              :class="{ active: form.isActive }"
              :aria-pressed="form.isActive"
              @click="form.isActive = !form.isActive"
            >
              <span class="toggle-thumb" />
            </button>
            <span class="toggle-label">{{ form.isActive ? 'AKTIF' : 'NONAKTIF' }}</span>
          </div>
        </div>

        <div class="form-actions">
          <button class="btn btn-primary" type="submit">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16 19a4 4 0 0 0-8 0"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <circle cx="12" cy="9" r="3" stroke="currentColor" stroke-width="2" />
            </svg>
            <span>Buat Pengguna</span>
          </button>

          <button class="btn btn-secondary" type="button" @click="handleCancel">
            Batal
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

const roleOptions = [
  { value: 'kurator', label: 'Kurator' },
  { value: 'admin', label: 'Admin' },
  { value: 'operator', label: 'Operator' },
]

const form = ref({
  name: '',
  email: '',
  role: '',
  password: '',
  isActive: true,
})

const handleSubmit = () => {
  console.log('Submit tambah pengguna:', form.value)
}

const handleCancel = () => {
  form.value = {
    name: '',
    email: '',
    role: '',
    password: '',
    isActive: true,
  }
  showPassword.value = false
}
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

.add-user-page {
  --bg: #f7f5f1;
  --panel: #fbfaf8;
  --panel-line: rgba(125, 87, 49, 0.08);
  --title: #8a6035;
  --body: #736b65;
  --label: #9b918a;
  --field-bg: #efefeb;
  --field-text: #5d554f;
  --field-placeholder: #b0a9a2;
  --primary: #8b6138;
  --primary-dark: #7d5731;
  --primary-soft: #e9bf84;
  --btn-soft: #f4f1eb;
  --white: #ffffff;

  min-height: 100%;
  padding: 48px 56px;
  background: var(--bg);
}

.page-header {
  margin-bottom: 42px;
}

.page-header h1 {
  margin: 0 0 12px;
  color: var(--title);
  font-size: clamp(2.35rem, 3vw, 3.35rem);
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.page-header p {
  max-width: 620px;
  margin: 0;
  color: var(--body);
  font-size: 1rem;
  line-height: 1.72;
}

.form-shell {
  max-width: 980px;
}

.user-form {
  padding: 38px 40px 44px;
  border-radius: 28px;
  background: var(--panel);
  border: 1px solid var(--panel-line);
  box-shadow: 0 20px 40px rgba(77, 57, 34, 0.035);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px 40px;
}

.field-group label {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--label);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.field-group input,
.field-group select {
  width: 100%;
  height: 56px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 14px;
  background: var(--field-bg);
  color: var(--field-text);
  font-size: 1rem;
  padding: 0 20px;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.field-group input::placeholder {
  color: var(--field-placeholder);
}

.field-group input:focus,
.field-group select:focus {
  border-color: rgba(139, 97, 56, 0.22);
  box-shadow: 0 0 0 4px rgba(139, 97, 56, 0.08);
  background: #f2f1ed;
}

.select-wrap,
.password-wrap {
  position: relative;
}

.select-wrap select {
  appearance: none;
  padding-right: 54px;
  cursor: pointer;
}

.select-wrap svg,
.input-action svg {
  width: 18px;
  height: 18px;
}

.select-wrap svg {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  color: #82776d;
  pointer-events: none;
}

.password-wrap input {
  padding-right: 52px;
  letter-spacing: 0.12em;
}

.input-action {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #86796d;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.status-panel {
  margin-top: 34px;
  padding: 22px 22px 22px 24px;
  border-radius: 16px;
  background: #f3f1ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.status-copy h3 {
  margin: 0 0 4px;
  color: #37332f;
  font-size: 1.18rem;
  font-weight: 800;
}

.status-copy p {
  margin: 0;
  color: var(--body);
  font-size: 0.96rem;
}

.status-toggle-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-toggle {
  position: relative;
  width: 46px;
  height: 26px;
  border: 0;
  border-radius: 999px;
  background: #d7d2cb;
  padding: 3px;
  cursor: pointer;
  transition: background 0.18s ease;
}

.status-toggle.active {
  background: var(--primary);
}

.toggle-thumb {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--white);
  transform: translateX(0);
  transition: transform 0.18s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.status-toggle.active .toggle-thumb {
  transform: translateX(20px);
}

.toggle-label {
  min-width: 68px;
  color: var(--primary);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 40px;
}

.btn {
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn svg {
  width: 18px;
  height: 18px;
}

.btn-primary {
  color: #fff;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 14px 28px rgba(139, 97, 56, 0.18);
}

.btn-secondary {
  min-width: 102px;
  color: var(--primary-dark);
  border-color: rgba(125, 87, 49, 0.14);
  background: transparent;
}

@media (max-width: 1024px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .status-panel {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .add-user-page {
    padding: 32px 20px;
  }

  .user-form {
    padding: 26px 20px 28px;
    border-radius: 22px;
  }

  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }
}
</style>
