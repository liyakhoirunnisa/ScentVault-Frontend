<template>
  <section class="rules-view">
    <div class="rules-shell">
      <header class="page-header">
        <h1>Konfigurasi Aturan</h1>
        <p>
          Modulasi parameter lingkungan untuk menjaga integritas koleksi wewangian di
          Digital Atelier. Pastikan setiap variabel sesuai dengan standar kurasi
          ScentVault.
        </p>
      </header>

      <div class="rules-grid">
        <form class="config-card" @submit.prevent="saveTemperatureSettings">
          <div class="card-head">
            <div class="card-icon temperature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 14.76V3.5a2 2 0 1 0-4 0v11.26a4 4 0 1 0 4 0Z" />
              </svg>
            </div>

            <div class="card-title">
              <h2>Konfigurasi Suhu</h2>
              <p>TEMPERATURE CONTROL</p>
            </div>
          </div>

          <div
            v-for="range in temperatureRanges"
            :key="range.key"
            class="field-group"
          >
            <label :for="`${range.key}-min`">{{ range.label }}</label>

            <div class="range-inputs">
              <input
                :id="`${range.key}-min`"
                v-model.number="range.min"
                class="field-input"
                type="number"
                min="0"
                max="100"
                step="1"
                placeholder="Min"
              />
              <input
                :id="`${range.key}-max`"
                v-model.number="range.max"
                class="field-input"
                type="number"
                min="0"
                max="100"
                step="1"
                placeholder="Max"
              />
            </div>
          </div>

          <button class="btn btn-solid" type="submit">Simpan Perubahan</button>
        </form>

        <form class="config-card" @submit.prevent="saveTimeSettings">
          <div class="card-head">
            <div class="card-icon time-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>

            <div class="card-title">
              <h2>Interval Waktu</h2>
              <p>TIME CYCLES</p>
            </div>
          </div>

          <div class="schedule-list">
            <div
              v-for="cycle in timeCycles"
              :key="cycle.key"
              class="schedule-row"
            >
              <div class="schedule-label">
                <div class="cycle-icon">
                  <svg
                    v-if="cycle.key === 'pagi'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>

                  <svg
                    v-else-if="cycle.key === 'siang'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3" />
                    <path d="M12 19v3" />
                    <path d="M4.22 4.22l2.12 2.12" />
                    <path d="M17.66 17.66l2.12 2.12" />
                    <path d="M2 12h3" />
                    <path d="M19 12h3" />
                    <path d="M4.22 19.78l2.12-2.12" />
                    <path d="M17.66 6.34l2.12-2.12" />
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
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>

                <span>{{ cycle.label }}</span>
              </div>

              <div class="time-inputs">
                <input
                  v-model="cycle.start"
                  class="time-input"
                  type="time"
                />
                <span class="time-separator">sampai</span>
                <input
                  v-model="cycle.end"
                  class="time-input"
                  type="time"
                />
              </div>
            </div>
          </div>

          <button class="btn btn-outline" type="submit">
            Simpan Konfigurasi Waktu
          </button>
        </form>
      </div>

      <section class="info-banner">
        <div class="banner-copy">
          <h2>Preservasi Wewangian Adalah Seni yang Terukur</h2>
          <p>
            ScentVault menggunakan algoritma presisi untuk memastikan setiap botol
            parfum disimpan dalam kondisi atmosfer yang optimal. Konfigurasi yang Anda
            tetapkan di sini akan membantu sinkronisasi mikroklimat pada setiap unit
            atelier.
          </p>

          <div class="badge-group">
            <span class="info-badge">Atmosfer Terkendali</span>
            <span class="info-badge">Presisi Mikroklimat</span>
          </div>
        </div>

        <div class="banner-visual" aria-hidden="true">
          <div class="perfume-placeholder">
            <svg
              viewBox="0 0 200 220"
              class="perfume-illustration"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="bottleFill"
                  x1="100"
                  y1="68"
                  x2="100"
                  y2="196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#e5b169" />
                  <stop offset="1" stop-color="#8d5625" />
                </linearGradient>

                <radialGradient
                  id="glow"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(100 150) rotate(90) scale(90 80)"
                >
                  <stop stop-color="#ffcf86" stop-opacity="0.65" />
                  <stop offset="1" stop-color="#ffcf86" stop-opacity="0" />
                </radialGradient>
              </defs>

              <ellipse cx="100" cy="190" rx="70" ry="18" fill="url(#glow)" />
              <rect x="76" y="16" width="48" height="24" rx="4" fill="#171311" />
              <rect
                x="58"
                y="44"
                width="84"
                height="22"
                rx="6"
                fill="#2a211d"
                stroke="#f7d8a3"
                stroke-width="3"
              />
              <rect
                x="36"
                y="68"
                width="128"
                height="126"
                rx="18"
                fill="url(#bottleFill)"
                stroke="#f9dfb6"
                stroke-width="4"
              />
              <rect
                x="58"
                y="104"
                width="84"
                height="48"
                rx="8"
                fill="#231c19"
                stroke="#f9dfb6"
                stroke-width="2.5"
              />
              <text
                x="100"
                y="123"
                text-anchor="middle"
                fill="#f9dfb6"
                font-size="13"
                font-weight="700"
                font-family="Arial, sans-serif"
              >
                SCENTVAULT
              </text>
              <text
                x="100"
                y="141"
                text-anchor="middle"
                fill="#d9b887"
                font-size="10"
                font-weight="600"
                font-family="Arial, sans-serif"
              >
                ATELIER
              </text>
              <path
                d="M52 92C72 86 128 86 148 92"
                stroke="#ffffff"
                stroke-opacity="0.45"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </section>
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

          <h2 id="success-title">{{ modalContent.title }}</h2>
          <p>{{ modalContent.message }}</p>

          <div class="modal-actions">
            <button class="btn btn-solid modal-btn" type="button" @click="closeModal">
              SELESAI
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const modalContent = ref({
  title: '',
  message: '',
})

const closeModal = () => {
  showModal.value = false
}

const temperatureRanges = ref([
  { key: 'dingin', label: 'Rentang Dingin (°C)', min: 24, max: 28 },
  { key: 'normal', label: 'Rentang Normal (°C)', min: 29, max: 30 },
  { key: 'panas', label: 'Rentang Panas (°C)', min: 30, max: 35 },
])

const timeCycles = ref([
  { key: 'pagi', label: 'Pagi', start: '06:00', end: '10:00' },
  { key: 'siang', label: 'Siang', start: '10:01', end: '15:00' },
  { key: 'malam', label: 'Malam', start: '18:00', end: '05:59' },
])

const saveTemperatureSettings = () => {
  console.log('Temperature settings saved:', temperatureRanges.value)
  modalContent.value = {
    title: 'Perubahan Suhu Berhasil Disimpan',
    message: 'Parameter sensor suhu telah diperbarui secara global di seluruh sistem Digital Atelier.'
  }
  showModal.value = true
}

const saveTimeSettings = () => {
  console.log('Time cycle settings saved:', timeCycles.value)
  modalContent.value = {
    title: 'Konfigurasi Waktu Berhasil Diperbarui',
    message: 'Interval waktu operasional untuk kurasi aroma telah berhasil disinkronkan.'
  }
  showModal.value = true
}
</script>

<style scoped>
.rules-view {
  width: 100%;
  box-sizing: border-box;
  background: transparent;
}

.rules-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 30px;
}

.page-header h1 {
  margin: 0 0 10px;
  font-size: 35.2px;
  line-height: 1.1;
  color: #7d5731;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
}

.page-header p {
  margin: 0;
  max-width: 760px;
  font-size: 0.98rem;
  line-height: 1.75;
  color: #736b65;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 28px;
}

.config-card {
  margin: 0;
  background: #fbfaf8;
  border: 1px solid rgba(125, 87, 49, 0.08);
  border-radius: 26px;
  padding: 28px;
  box-shadow: 0 12px 35px rgba(59, 42, 31, 0.07);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  color: #7d5731;
  flex-shrink: 0;
}

.temperature-icon {
  background: #f3ddd2;
}

.time-icon {
  background: #ece2b8;
}

.card-icon svg,
.cycle-icon svg {
  width: 22px;
  height: 22px;
}

.card-title h2 {
  margin: 0;
  font-size: 1.18rem;
  color: #30241f;
  font-weight: 800;
}

.card-title p {
  margin: 4px 0 0;
  color: #a29b94;
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.field-group + .field-group {
  margin-top: 18px;
}

.field-group label {
  display: block;
  margin-bottom: 10px;
  font-size: 0.76rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #91867c;
  font-weight: 700;
}

.range-inputs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.field-input,
.time-input {
  border: none;
  outline: none;
  color: #43312a;
  font-size: 0.95rem;
  font-weight: 600;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.field-input {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;
  border-radius: 12px;
  background: #efefeb;
}

.time-input {
  width: 110px;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffff;
  text-align: center;
}

.field-input:focus,
.time-input:focus {
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(125, 87, 49, 0.12);
}

.field-input::-webkit-outer-spin-button,
.field-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.field-input[type='number'] {
  -moz-appearance: textfield;
}

.time-input::-webkit-calendar-picker-indicator {
  opacity: 0.6;
  cursor: pointer;
}

.btn {
  width: 100%;
  height: 54px;
  margin-top: 26px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-solid {
  border: none;
  color: #ffffff;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 10px 24px rgba(125, 87, 49, 0.24);
}

.btn-outline {
  background: transparent;
  border: 1.5px solid rgba(125, 87, 49, 0.6);
  color: #7d5731;
}

.btn-outline:hover {
  background: rgba(125, 87, 49, 0.04);
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.schedule-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 16px;
  background: #f3f1ec;
}

.schedule-label {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 120px;
  color: #3b2b25;
  font-weight: 700;
}

.cycle-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  color: #987347;
  display: grid;
  place-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.time-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.time-separator {
  font-size: 0.78rem;
  color: #958d86;
  font-weight: 600;
}

.info-banner {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(240px, 0.85fr);
  gap: 24px;
  align-items: center;
  background: #f0eeea;
  border: 1px solid rgba(125, 87, 49, 0.08);
  border-radius: 28px;
  padding: 32px 28px;
  box-shadow: 0 12px 28px rgba(59, 42, 31, 0.05);
}

.banner-copy h2 {
  margin: 0 0 14px;
  max-width: 560px;
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  line-height: 1.12;
  color: #8a6035;
  font-weight: 800;
}

.banner-copy p {
  margin: 0 0 20px;
  max-width: 600px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #756d67;
}

.badge-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.info-badge {
  display: inline-flex;
  align-items: center;
  padding: 9px 14px;
  border-radius: 999px;
  background: #f2d6cb;
  color: #8f6140;
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.banner-visual {
  display: flex;
  justify-content: flex-end;
}

.perfume-placeholder {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1.1 / 1;
  border-radius: 24px;
  background:
    radial-gradient(circle at 50% 36%, rgba(255, 193, 107, 0.18), transparent 36%),
    linear-gradient(180deg, #0f1622 0%, #23160f 100%);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.06),
    0 18px 36px rgba(17, 19, 34, 0.28);
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 18px;
}

.perfume-illustration {
  width: 78%;
  height: auto;
  filter: drop-shadow(0 18px 22px rgba(255, 171, 79, 0.22));
}

@media (max-width: 1100px) {
  .rules-grid,
  .info-banner {
    grid-template-columns: 1fr;
  }

  .banner-visual {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .rules-view {
    /* Padding handled globally */
  }

  .range-inputs {
    grid-template-columns: 1fr;
  }

  .schedule-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .time-inputs {
    width: 100%;
    justify-content: flex-start;
  }

  .time-input {
    width: 100%;
    max-width: 160px;
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