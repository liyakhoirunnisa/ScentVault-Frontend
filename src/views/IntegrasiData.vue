<template>
  <main class="integration-page">
    <section class="page-head">
      <div class="page-copy">
        <h1>Integrasi Data</h1>
        <p>
          Kelola koneksi eksternal yang menyusun narasi sensorik ScentVault.
          Sinkronisasi otomatis untuk data lingkungan dan spasial.
        </p>
      </div>

    </section>

    <section class="integration-grid">
      <article
        v-for="item in integrations"
        :key="item.id"
        class="integration-card"
      >
        <div class="card-top">
          <div class="icon-badge" v-html="item.icon" />
          <span
            class="status-chip"
            :class="item.connected ? 'connected' : 'inactive'"
          >
            <span class="status-dot"></span>
            {{ item.statusText }}
          </span>
        </div>

        <div class="card-body">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </article>

    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const integrations = ref([
  {
    id: 1,
    title: 'API Cuaca',
    description:
      'Menyinkronkan kelembapan dan suhu untuk kalibrasi difusi aroma ruangan secara real-time.',
    connected: true,
    enabled: true,
    statusText: 'TERHUBUNG',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 18h8a4 4 0 0 0 .3-7.99A5.5 5.5 0 0 0 6.1 8.4 3.8 3.8 0 0 0 8 18Z"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 21h.01M12 21h.01M16 21h.01"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    `
  },
  {
    id: 2,
    title: 'API Lokasi',
    description:
      'Data pemetaan spasial untuk menentukan titik distribusi wewangian di seluruh galeri pameran.',
    connected: false,
    enabled: false,
    statusText: 'TIDAK TERHUBUNG',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="10" r="2.2" stroke="currentColor" stroke-width="1.8" />
      </svg>
    `
  }
])
</script>

<style scoped>
.integration-page {
  --bg: #f7f5f1;
  --card: #fbfaf8;
  --title: #8a6035;
  --text: #736b65;
  --primary: #8b6138;
  --primary-dark: #7d5731;
  --primary-soft: #e9bf84;
  --danger: #e74c3c;
  --danger-soft: #fdeaea;
  --line: rgba(125, 87, 49, 0.12);
  --green: #4faf6c;
  --green-soft: #e8f5eb;
  --gray-soft: #f1eee9;
  --chip-bg: #f4f0ea;

  background: transparent;
}

.page-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 36px;
}

.page-copy {
  max-width: 520px;
}

.page-copy h1 {
  margin: 0 0 10px;
  color: #7d5731;
  font-family: 'Manrope', sans-serif;
  font-size: 35.2px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.page-copy p {
  margin: 0;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.65;
}

.page-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 320px;
}

.meta-pill {
  min-width: 132px;
  padding: 12px 14px;
  border-radius: 999px;
  background: var(--chip-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.meta-label {
  color: rgba(115, 107, 101, 0.75);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-pill strong {
  color: var(--primary-dark);
  font-size: 0.86rem;
  font-weight: 800;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.integration-card,
.integration-add-card {
  min-height: 320px;
  border-radius: 24px;
  background: var(--card);
}

.integration-card {
  padding: 22px;
  box-shadow: 0 18px 34px rgba(77, 57, 34, 0.04);
  border: 1px solid rgba(125, 87, 49, 0.06);
  display: flex;
  flex-direction: column;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 22px;
}

.icon-badge {
  width: 42px;
  height: 42px;
  border-radius: 16px;
  background: #f2efea;
  color: var(--primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.icon-badge :deep(svg) {
  width: 22px;
  height: 22px;
}

.status-chip {
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.08em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.status-chip.connected {
  color: #3f8f57;
  background: var(--green-soft);
}

.status-chip.inactive {
  color: #e74c3c;
  background: #fdeaea;
}

.card-body {
  flex: 1;
}

.card-body h3 {
  margin: 0 0 10px;
  color: #302b27;
  font-size: 1.9rem;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.card-body p {
  margin: 0;
  max-width: 230px;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.7;
}

.card-bottom {
  padding-top: 24px;
}

.toggle-switch {
  width: 38px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: #d9d2cb;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.toggle-switch:hover {
  transform: translateY(-1px);
}

.toggle-switch.active {
  background: var(--primary);
}

.toggle-knob {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(33, 24, 15, 0.15);
}

.toggle-switch.active .toggle-knob {
  transform: translateX(16px);
}

.integration-add-card {
  border: 2px dashed rgba(125, 87, 49, 0.14);
  background: transparent;
  color: inherit;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
}

.integration-add-card:hover {
  transform: translateY(-1px);
  border-color: rgba(139, 97, 56, 0.28);
  background: rgba(255, 255, 255, 0.34);
}

.add-icon-wrap {
  width: 54px;
  height: 54px;
  border-radius: 999px;
  background: #ece9e5;
  color: #7f786f;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
}

.add-icon-wrap svg {
  width: 22px;
  height: 22px;
}

.integration-add-card h3 {
  margin: 0 0 10px;
  color: #302b27;
  font-size: 1.85rem;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.integration-add-card p {
  margin: 0;
  max-width: 220px;
  color: var(--text);
  font-size: 0.94rem;
  line-height: 1.65;
}

@media (max-width: 1100px) {
  .integration-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .page-head {
    flex-direction: column;
    align-items: stretch;
  }

  .page-meta {
    justify-content: flex-start;
    max-width: none;
  }
}

@media (max-width: 768px) {
  .integration-page {
    /* Padding handled by global layout */
  }

  .integration-grid {
    grid-template-columns: 1fr;
  }

  .page-copy h1 {
    font-size: 2rem;
  }

  .meta-pill {
    min-width: 120px;
  }

  .card-body h3,
  .integration-add-card h3 {
    font-size: 1.55rem;
  }
}
</style>