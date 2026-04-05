<template>
  <div class="auth-page">
    <main class="auth-container">
      <div class="auth-card">
        <div class="auth-image-section">
          <div class="image-overlay"></div>
          <div class="branding-content">
            <h1 class="brand-title">Atelier<br />Digital.</h1>
            <p class="brand-tagline">
              Kurasi identitas penciuman Anda dalam brankas pribadi wewangian langka dan esensi
              artisan kami.
            </p>
          </div>
        </div>

        <div class="auth-form-section">
          <div class="form-scroll-wrapper">
            <div class="form-header">
              <span class="sub-heading">KEANGGOTAAN</span>
              <h2>Buat Akun</h2>
              <p>Mulailah perjalanan Anda ke dunia wewangian mewah</p>
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
              Daftar dengan Google
            </button>

            <div class="divider">
              <span>ATAU</span>
            </div>

            <form @submit.prevent="handleRegister" class="auth-form">
              <div class="form-group">
                <label for="name">NAMA LENGKAP</label>
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    placeholder="Elias Vance"
                    required
                  />
                </div>
              </div>

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

              <div class="form-row">
                <div class="form-group half-width">
                  <label for="password">KATA SANDI</label>
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
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>

                    <input
                      :type="showPassword ? 'text' : 'password'"
                      id="password"
                      v-model="form.password"
                      placeholder="••••••••"
                      required
                    />

                    <svg
                      class="toggle-password-icon"
                      @click="showPassword = !showPassword"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        v-if="!showPassword"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle v-if="!showPassword" cx="12" cy="12" r="3"></circle>
                      <path
                        v-if="showPassword"
                        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      ></path>
                      <line v-if="showPassword" x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </div>
                </div>

                <div class="form-group half-width">
                  <label for="password_confirmation">KONFIRMASI</label>
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>

                    <input
                      :type="showConfirmPassword ? 'text' : 'password'"
                      id="password_confirmation"
                      v-model="form.password_confirmation"
                      placeholder="••••••••"
                      required
                    />

                    <svg
                      class="toggle-password-icon"
                      @click="showConfirmPassword = !showConfirmPassword"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        v-if="!showConfirmPassword"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle v-if="!showConfirmPassword" cx="12" cy="12" r="3"></circle>
                      <path
                        v-if="showConfirmPassword"
                        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      ></path>
                      <line v-if="showConfirmPassword" x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <p v-if="passwordError" class="error-text">Kata sandi tidak cocok.</p>

              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="form.agreeTerms" required />
                  <span class="checkmark"></span>
                  <span
                    >Saya setuju dengan <a href="#" class="inline-link">Ketentuan Layanan</a> dan
                    <a href="#" class="inline-link">Kebijakan Privasi</a>.</span
                  >
                </label>
              </div>

              <button type="submit" class="btn-submit" :disabled="isLoading || !form.agreeTerms">
                {{ isLoading ? 'MEMPROSES...' : 'Bergabung dengan Atelier' }}
              </button>
            </form>

            <p class="login-link">Sudah punya akun? <RouterLink to="/">Masuk</RouterLink></p>

            <div class="preferences-section">
              <div class="divider-sub">
                <span>TONA PILIHAN</span>
              </div>
              <div class="tone-pills">
                <button
                  v-for="tone in availableTones"
                  :key="tone"
                  type="button"
                  class="pill"
                  :class="{ active: form.selectedTones.includes(tone) }"
                  @click="toggleTone(tone)"
                >
                  {{ tone }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="auth-footer">
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
import { reactive, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  agreeTerms: false,
  selectedTones: [], // Menyimpan pilihan aroma pengguna
})

const isLoading = ref(false)
const availableTones = ['KAYU', 'BUNGA', 'SITRUS', 'AMBER']

// UNTUK FITUR MATA (EYE ICON)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Logika reaktif untuk mengecek kecocokan kata sandi
const passwordError = computed(() => {
  if (form.password_confirmation && form.password !== form.password_confirmation) {
    return true
  }
  return false
})

// Fungsi untuk memilih/membatalkan pilihan Tona
const toggleTone = (tone) => {
  const index = form.selectedTones.indexOf(tone)
  if (index === -1) {
    form.selectedTones.push(tone) // Tambahkan jika belum ada
  } else {
    form.selectedTones.splice(index, 1) // Hapus jika sudah ada
  }
}

const handleRegister = async () => {
  if (passwordError.value) {
    alert('Mohon pastikan konfirmasi kata sandi Anda sama.')
    return
  }

  isLoading.value = true
  console.log('Mengirim data registrasi:', form)

  setTimeout(() => {
    isLoading.value = false
    alert('Data Registrasi & Pilihan Tona berhasil ditangkap! Cek Console.')
  }, 1500)
}
</script>

<style scoped>
/* =========================================
   Layout Utama & Header
   ========================================= */
.auth-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #f8f7f5; /* Warna latar sedikit cream sesuai desain */
}

.auth-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 20px 20px;
  height: calc(100% - 130px); /* Memperhitungkan tinggi header & footer */
}

/* =========================================
   Kartu Registrasi
   ========================================= */
.auth-card {
  display: flex;
  width: 100%;
  max-width: 1050px;
  height: 100%; /* Mengisi sisa ruang */
  max-height: 850px;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
}

/* --- Kolom Kiri --- */
.auth-image-section {
  flex: 1;
  position: relative;
  background-image: url('@/assets/register-bg.jpeg');
  background-size: cover;
  background-position: center;
  background-color: #c0b2a3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 50px 40px;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to top, rgba(162, 142, 122, 0.8) 0%, rgba(162, 142, 122, 0) 100%);
  pointer-events: none;
}

.branding-content {
  position: relative;
  z-index: 2;
  color: white;
}

.brand-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 15px;
  color: #ffffff;
}

.brand-tagline {
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 500;
  opacity: 0.9;
}

/* --- Kolom Kanan --- */
.auth-form-section {
  flex: 1.1; /* Sedikit lebih lebar dari gambar */
  background-color: #ffffff;
  position: relative;
}

.form-scroll-wrapper {
  padding: 40px 60px;
  height: 100%;
  overflow-y: auto; /* Kunci rahasia agar bisa di-scroll internal */
  scrollbar-width: thin;
}

/* Scrollbar kustom agar terlihat bersih */
.form-scroll-wrapper::-webkit-scrollbar {
  width: 6px;
}
.form-scroll-wrapper::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 10px;
}

.sub-heading {
  font-size: 0.7rem;
  font-weight: 700;
  color: #986d4d;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.form-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-top: 5px;
  margin-bottom: 5px;
}

.form-header p {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 25px;
}

/* =========================================
   Elemen Formulir
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
  margin-bottom: 10px;
  transition: background-color 0.2s;
}
.btn-google:hover {
  background-color: #e2e5e4;
}

.icon-google {
  width: 18px;
  height: 18px;
  margin-right: 12px;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #eaeaea;
}
.divider span {
  padding: 0 15px;
  font-size: 0.65rem;
  font-weight: 700;
  color: #a0a0a0;
  letter-spacing: 1px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  color: #555;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.form-row {
  display: flex;
  gap: 15px;
}
.half-width {
  flex: 1;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input-icon {
  position: absolute;
  left: 14px;
  width: 16px;
  height: 16px;
  color: #a0a0a0;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 40px 12px 40px;
  background-color: #eeede8; /* Warna keabuan khas desain */
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.85rem;
  color: #333;
  transition: all 0.2s ease;
  outline: none;
}
.input-wrapper input:focus {
  background-color: #ffffff;
  border-color: #986d4d;
}

.toggle-password-icon {
  position: absolute;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #a0a0a0;
  cursor: pointer;
  transition: color 0.2s;
}
.toggle-password-icon:hover {
  color: #986d4d;
}

/* Custom Checkbox */
.checkbox-group {
  margin-top: 15px;
  margin-bottom: 25px;
}
.checkbox-label {
  display: flex;
  align-items: flex-start;
  font-size: 0.75rem !important;
  color: #666 !important;
  cursor: pointer;
  line-height: 1.4;
}
.checkbox-label input {
  display: none;
}
.checkmark {
  min-width: 16px;
  height: 16px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  margin-right: 10px;
  margin-top: 2px;
  display: inline-block;
  position: relative;
}
.checkbox-label input:checked ~ .checkmark {
  background-color: #986d4d;
  border-color: #986d4d;
}
.checkbox-label input:checked ~ .checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 3px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.inline-link {
  color: #986d4d;
  text-decoration: none;
  font-weight: 600;
}

/* Tombol Submit */
.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #b58b66 0%, #986d4d 100%);
  border: none;
  border-radius: 30px; /* Bentuk pil sesuai desain */
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition:
    transform 0.1s,
    box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(152, 109, 77, 0.2);
}
.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(152, 109, 77, 0.4);
}
.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 4px 15px rgba(152, 109, 77, 0.2);
}

.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 0.85rem;
  color: #666;
}
.login-link a {
  color: #986d4d;
  font-weight: 700;
  text-decoration: none;
}
.error-text {
  color: #e74c3c;
  font-size: 0.75rem;
  margin-top: -10px;
  margin-bottom: 10px;
}

/* =========================================
   Preferensi Tona (Pills)
   ========================================= */
.preferences-section {
  margin-top: 30px;
}
.divider-sub {
  text-align: center;
  border-top: 1px solid #eaeaea;
  position: relative;
  margin-bottom: 20px;
}
.divider-sub span {
  background: white;
  padding: 0 10px;
  position: relative;
  top: -8px;
  font-size: 0.65rem;
  font-weight: 700;
  color: #b0b0b0;
  letter-spacing: 1px;
}

.tone-pills {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
.pill {
  padding: 6px 16px;
  background-color: #faeee5; /* Warna kulit/peach terang */
  color: #b58b66;
  border: none;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s;
}
.pill:hover {
  background-color: #f0dece;
}
.pill.active {
  background-color: #986d4d;
  color: white;
}

/* =========================================
   Footer
   ========================================= */
.auth-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  border-top: 1px solid #e8e8e8;
  color: #888;
  background-color: transparent;
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
  margin: 0;
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
</style>
