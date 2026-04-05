<template>
  <div class="login-page">
    <main class="login-container">
      <div class="login-card">
        <div class="login-image-section">
          <div class="image-overlay"></div>
          <div class="branding-content">
            <h1 class="brand-title">ScentVault</h1>
            <p class="brand-tagline">
              Atelier Digital untuk kurator seni efemer. Amankan koleksi Anda di brankas keanggunan
              kami.
            </p>
          </div>
        </div>

        <div class="login-form-section">
          <div class="form-header">
            <h2>Selamat Datang<br />Kembali</h2>
            <p>Masukkan kredensial Anda untuk mengakses koleksi Anda</p>
          </div>

          <button class="btn-google" type="button">
            <svg class="icon-google" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Masuk dengan Google
          </button>

          <div class="divider">
            <span>ATAU DENGAN EMAIL</span>
          </div>

          <form @submit.prevent="handleLogin" class="auth-form">
            <div class="form-group">
              <label for="email">ALAMAT EMAIL</label>
              <div class="input-wrapper">
                <svg
                  class="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="atelier@scentvault.com"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="label-row">
                <label for="password">KATA SANDI</label>
                <a href="#" class="forgot-link">LUPA KATA SANDI?</a>
              </div>
              <div class="input-wrapper">
                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="form.password" placeholder="••••••••" required>
                
                <svg class="toggle-password-icon" @click="showPassword = !showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path v-if="!showPassword" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle v-if="!showPassword" cx="12" cy="12" r="3"></circle>
                  <path v-if="showPassword" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line v-if="showPassword" x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </div>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.rememberMe" />
                <span class="checkmark"></span>
                Tetap masuk
              </label>
            </div>

            <button type="submit" class="btn-submit" :disabled="isLoading">
              {{ isLoading ? 'MEMPROSES...' : 'MASUK' }}
            </button>
          </form>

          <p class="register-link">
            Belum punya akun? <RouterLink to="/register">Mendaftar</RouterLink>
          </p>
        </div>
      </div>
    </main>

    <footer class="login-footer">
      <div class="footer-left">
        <h3 class="footer-logo">ScentVault</h3>
        <p>© 2024 SCENTVAULT. CRAFTED FOR THE DIGITAL ATELIER.</p>
      </div>
      <div class="footer-right">
        <a href="#">KEBIJAKAN PRIVASI</a>
        <a href="#">KETENTUAN LAYANAN</a>
        <a href="#">KONTAK</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

// State reaktif untuk menampung inputan pengguna
const form = reactive({
  email: '',
  password: '',
  rememberMe: false,
})

const isLoading = ref(false)

// Ini untuk toggle visibilitas password
const showPassword = ref(false)

// Fungsi yang dieksekusi saat tombol MASUK ditekan
const handleLogin = async () => {
  isLoading.value = true

  // LOGIKA API AXIOS NANTINYA AKAN DITULIS DI SINI
  // Contoh:
  // try {
  //   const response = await axios.post('http://localhost:8000/api/login', form)
  //   // Simpan token, arahkan ke dashboard...
  // } catch (error) {
  //   // Tampilkan pesan error...
  // }

  console.log('Mencoba login dengan data:', form)

  // Simulasi loading selama 1.5 detik agar terlihat profesional
  setTimeout(() => {
    isLoading.value = false
    alert('Logika Login Frontend Berhasil! Cek Console Browser.')
  }, 1500)
}
</script>

<style scoped>
/* =========================================
   Layout Utama
   ========================================= */
.login-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.login-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 20px;
  height: 100%;
}

/* =========================================
   Kartu Login (Grid 2 Kolom)
   ========================================= */
.login-card {
  display: flex;
  width: 100%;
  max-width: 950px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

/* --- Kolom Kiri --- */
.login-image-section {
  flex: 1;
  position: relative;
  background-image: url('@/assets/login-bg.jpeg');
  background-size: cover;
  background-position: center;
  background-color: #e0dcd5; /* Fallback color */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}

.branding-content {
  position: relative;
  z-index: 2;
}

.brand-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #986d4d; /* Warna cokelat/emas khas ScentVault */
  margin-bottom: 10px;
}

.brand-tagline {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  font-weight: 500;
}

/* --- Kolom Kanan --- */
.login-form-section {
  flex: 1;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: hidden;
}

.form-header h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 5px;
}

.form-header p {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 15px;
}

/* =========================================
   Elemen Formulir & Tombol
   ========================================= */
.btn-google {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: #f0f2f1;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.8rem;
  color: #4a4a4a;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-google:hover {
  background-color: #e2e5e4;
}

.icon-google {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 15px 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e5e5e5;
}

.divider span {
  padding: 0 15px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #a0a0a0;
  letter-spacing: 1px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #888;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 0.75rem;
  font-weight: 700;
  color: #a0a0a0;
  text-decoration: none;
}
.forgot-link:hover {
  color: #986d4d;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  width: 18px;
  height: 18px;
  color: #a0a0a0;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 42px 12px 42px;
  background-color: #f0f2f1;
  border: 2px solid transparent;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.9rem;
  color: #333;
  transition: all 0.2s ease;
  outline: none;
}

.input-wrapper input:focus {
  background-color: #ffffff;
  border-color: #986d4d;
  box-shadow: 0 0 0 4px rgba(152, 109, 77, 0.1);
}

.input-wrapper input::placeholder {
  color: #b0b0b0;
}

/* TAMBAHKAN CSS IKON MATA INI */
.toggle-password-icon {
  position: absolute;
  right: 14px; /* Menempatkan ikon di sisi kanan input */
  width: 20px;
  height: 20px;
  color: #A0A0A0;
  cursor: pointer;
  transition: color 0.2s;
}

.toggle-password-icon:hover {
  color: #986D4D; /* Efek menyala saat di-hover */
}

/* Custom Checkbox */
.checkbox-group {
  margin-top: 5px;
  margin-bottom: 15px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  color: #666 !important;
  cursor: pointer;
  text-transform: none;
  letter-spacing: normal;
}

.checkbox-label input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 1.5px solid #d0d0d0;
  border-radius: 6px;
  margin-right: 10px;
  display: inline-block;
  position: relative;
  transition: all 0.2s;
}

.checkbox-label input:checked ~ .checkmark {
  background-color: #986d4d;
  border-color: #986d4d;
}

.checkbox-label input:checked ~ .checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Submit Button */
.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #b58b66 0%, #986d4d 100%);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition:
    transform 0.1s,
    box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(152, 109, 77, 0.3);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(152, 109, 77, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.register-link {
  text-align: center;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #666;
}

.register-link a {
  color: #986d4d;
  font-weight: 700;
  text-decoration: none;
}

/* =========================================
   Footer
   ========================================= */
.login-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  border-top: 1px solid #e8e8e8;
  color: #888;
}

.footer-left .footer-logo {
  font-size: 1.1rem;
  font-weight: 800;
  color: #986d4d;
  margin-bottom: 4px;
}

.footer-left p {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.footer-right a {
  font-size: 0.75rem;
  font-weight: 700;
  color: #888;
  text-decoration: none;
  margin-left: 30px;
  transition: color 0.2s;
}

.footer-right a:hover {
  color: #986d4d;
}

/* =========================================
   Responsif (Mobile View)
   ========================================= */
@media (max-width: 900px) {
  .login-card {
    flex-direction: column;
  }
  .login-image-section {
    min-height: 250px;
    padding: 30px;
  }
  .login-form-section {
    padding: 40px 30px;
  }
  .login-footer {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .footer-right a {
    margin: 0 10px;
  }
}
</style>
