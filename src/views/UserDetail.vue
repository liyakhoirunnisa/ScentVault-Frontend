<template>
  <section class="user-detail-page">
    <div class="user-card">
      <header class="profile-header">
        <div class="profile-info">
          <div class="avatar-wrap">
            <img
              v-if="avatarSrc"
              :src="avatarSrc"
              :alt="form.name || 'User avatar'"
              class="avatar-image"
            />
            <div v-else class="avatar-fallback">
              {{ initials }}
            </div>
          </div>

          <div class="profile-meta">
            <div class="name-row">
              <h1 class="user-name">{{ form.name }}</h1>
            </div>
            <p class="user-role">{{ form.role }}</p>
          </div>
        </div>

        <div class="header-actions">
          <button type="button" class="ghost-btn" @click="toggleEdit()">
            {{ isEditing ? 'Mode Lihat' : 'Edit Profil' }}
          </button>

          <button type="button" class="danger-btn" @click="handleDelete">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="btn-icon">
              <path
                d="M9 3h6l1 2h4v2H4V5h4l1-2Zm1 7h2v7h-2v-7Zm4 0h2v7h-2v-7ZM7 10h2v7H7v-7Zm-1 10h12a2 2 0 0 0 2-2V8H4v10a2 2 0 0 0 2 2Z"
                fill="currentColor"
              />
            </svg>
            Hapus Akun
          </button>
        </div>
      </header>

      <div class="form-grid">
        <div class="field">
          <label class="field-label">Nama Lengkap</label>
          <input
            v-model="form.name"
            class="input-field"
            type="text"
            :readonly="!isEditing"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div class="field">
          <label class="field-label">Tanggal Bergabung</label>

          <input
            v-if="isEditing"
            v-model="form.joinedAt"
            class="input-field"
            type="date"
          />

          <input
            v-else
            class="input-field"
            type="text"
            :value="joinedAtDisplay"
            readonly
          />
        </div>

        <div class="field">
          <label class="field-label">Alamat Email</label>
          <input
            v-model="form.email"
            class="input-field"
            type="email"
            :readonly="!isEditing"
            placeholder="Masukkan email"
          />
        </div>

        <div class="field">
          <label class="field-label">ID Pengguna</label>
          <div class="input-with-action">
            <input
              class="input-field has-action"
              type="text"
              :value="form.userId"
              readonly
            />

            <button
              type="button"
              class="icon-action-btn"
              :title="copied ? 'Tersalin' : 'Salin ID'"
              @click="copyUserId"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9Zm-4 6V6a2 2 0 0 1 2-2h8v2H7v9H5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <span v-if="copied" class="helper-text">ID berhasil disalin</span>
        </div>

        <div class="field">
          <label class="field-label">Peran</label>
          <div class="select-wrap">
            <select
              v-model="form.role"
              class="input-field select-field"
              :disabled="!isEditing"
            >
              <option
                v-for="role in roles"
                :key="role"
                :value="role"
              >
                {{ role }}
              </option>
            </select>

            <span class="select-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M7 10l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="field full-width">
        <label class="field-label">Filosofi Kurasi</label>
        <textarea
          v-model="form.philosophy"
          class="textarea-field"
          :readonly="!isEditing"
          placeholder="Tuliskan filosofi kurasi"
          rows="6"
        />
      </div>

      <footer class="footer-actions">
        <button type="button" class="secondary-btn" @click="handleCancel">
          {{ isEditing ? 'Batal' : 'Kembali' }}
        </button>

        <button
          type="button"
          class="primary-btn"
          @click="isEditing ? handleSave() : toggleEdit(true)"
        >
          <svg
            v-if="isEditing"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="btn-icon"
          >
            <path
              d="M17 3a2 2 0 0 1 1.414.586l2 2A2 2 0 0 1 21 7v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h11Zm-5 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 5v4h8V5H7Z"
              fill="currentColor"
            />
          </svg>
          {{ isEditing ? 'Simpan Perubahan' : 'Edit Profil' }}
        </button>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  },
  mode: {
    type: String,
    default: ''
  },
  roles: {
    type: Array,
    default: () => ([
      'Kurator',
      'Admin'
    ])
  }
})

const emit = defineEmits([
  'save',
  'cancel',
  'delete',
  'copy-id',
  'edit-mode-change'
])

const route = useRoute()
const defaultUsers = [
  {
    id: 1,
    name: 'Clara Amandine',
    email: 'clara.a@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=32',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 2,
    name: 'Julian Sterling',
    email: 'sterling.j@scentvault.com',
    role: 'Admin',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=12',
    joinedAt: '2023-01-12',
    philosophy: '“Setiap wewangian adalah narasi cair yang belum selesai...”'
  },
  {
    id: 3,
    name: 'Elara Vance',
    email: 'evance@scentvault.com',
    role: 'Kurator',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=47',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 4,
    name: 'Marcus Thorne',
    email: 'm.thorne@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=14',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 5,
    name: 'Sophia Lazar',
    email: 's.lazar@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=48',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 6,
    name: 'Noah Bellamy',
    email: 'n.bellamy@scentvault.com',
    role: 'Admin',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=19',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 7,
    name: 'Isla Moreau',
    email: 'imoreau@scentvault.com',
    role: 'Kurator',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=25',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 8,
    name: 'Theo Arden',
    email: 'theo.arden@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=67',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 9,
    name: 'Aurora Flint',
    email: 'aurora.f@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=44',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 10,
    name: 'Elias Hart',
    email: 'elias.h@scentvault.com',
    role: 'Admin',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=60',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 11,
    name: 'Luna Cervantes',
    email: 'l.cervantes@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=39',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 12,
    name: 'Milo Vesper',
    email: 'mvesper@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=15',
    joinedAt: '2023-01-12',
    philosophy: ''
  },
  {
    id: 13,
    name: 'Freya Solene',
    email: 'freya.s@scentvault.com',
    role: 'Kurator',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=50',
    joinedAt: '2023-01-12',
    philosophy: ''
  }
]

const users = ref([])

function loadUsers() {
  const savedUsers = JSON.parse(localStorage.getItem('scentvault_users') || '[]')
  users.value = [...savedUsers, ...defaultUsers]
}

const emptyUser = {
  id: '',
  name: '',
  joinedAt: '',
  email: '',
  userId: '',
  role: '',
  philosophy: '',
  status: 'aktif',
  avatar: ''
}

const monthMap = {
  januari: '01',
  january: '01',
  februari: '02',
  february: '02',
  maret: '03',
  march: '03',
  april: '04',
  mei: '05',
  may: '05',
  juni: '06',
  june: '06',
  juli: '07',
  july: '07',
  agustus: '08',
  august: '08',
  september: '09',
  oktober: '10',
  october: '10',
  november: '11',
  desember: '12',
  december: '12'
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function toISODate(value) {
  if (!value) return ''

  const raw = String(value).trim()

  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return raw
  }

  const numericMatch = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/)
  if (numericMatch) {
    const [, day, month, year] = numericMatch
    return `${year}-${pad(month)}-${pad(day)}`
  }

  const namedMonthMatch = raw.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/)
  if (namedMonthMatch) {
    const [, day, monthName, year] = namedMonthMatch
    const month = monthMap[monthName.toLowerCase()]
    if (month) {
      return `${year}-${month}-${pad(day)}`
    }
  }

  const parsed = new Date(raw)
  if (!Number.isNaN(parsed.getTime())) {
    return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`
  }

  return ''
}

function formatDateId(value) {
  const iso = toISODate(value)

  if (!iso) return value || '-'

  const [year, month, day] = iso.split('-').map(Number)

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(year, month - 1, day))
}

function normalizeString(value, fallback = '') {
  if (value === null || value === undefined) return fallback
  return String(value)
}

const initialMode = computed(() => {
  if (props.mode) return String(props.mode).toLowerCase() === 'edit'
  return route.name === 'UserEdit'
})

const isEditing = ref(initialMode.value)
const copied = ref(false)

const form = reactive({
  ...emptyUser
})

const selectedUser = computed(() => {
  const routeId = Number(route.params.id)
  if (!routeId) return null

  return users.value.find((item) => Number(item.id) === routeId) || null
})

function mapUserToForm(user) {
  if (!user) {
    Object.assign(form, { ...emptyUser })
    return
  }

  Object.assign(form, {
    id: user.id ?? '',
    name: normalizeString(user.name),
    joinedAt: toISODate(user.joinedAt || '2023-01-12'),
    email: normalizeString(user.email),
    userId: normalizeString(user.userId || `UID-${String(user.id).padStart(5, '0')}-ATELIER`),
    role: normalizeString(user.role),
    philosophy: normalizeString(user.philosophy),
    status: normalizeString(user.status || 'aktif'),
    avatar: normalizeString(user.image || user.avatar)
  })
}

onMounted(() => {
  loadUsers()
})

watch(
  selectedUser,
  (user) => {
    mapUserToForm(user)
  },
  { immediate: true }
)

watch(initialMode, (value) => {
  isEditing.value = value
})

const avatarSrc = computed(() => form.avatar || '')

const initials = computed(() => {
  return (form.name || 'U')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0]?.toUpperCase() || '')
    .join('')
})

const statusLabel = computed(() => {
  return String(form.status || 'aktif').toUpperCase()
})

const statusClass = computed(() => {
  const value = String(form.status || '').toLowerCase()
  return ['aktif', 'active'].includes(value) ? 'is-active' : 'is-inactive'
})

const joinedAtDisplay = computed(() => formatDateId(form.joinedAt))

function toggleEdit(forceValue) {
  const nextValue =
    typeof forceValue === 'boolean' ? forceValue : !isEditing.value

  if (isEditing.value && !nextValue) {
    mapUserToForm(selectedUser.value)
  }

  isEditing.value = nextValue
  emit('edit-mode-change', nextValue)
}

function handleSave() {
  const payload = {
    ...form,
    joinedAt: toISODate(form.joinedAt)
  }

  emit('save', payload)
  isEditing.value = false
  emit('edit-mode-change', false)
}

function handleCancel() {
  if (isEditing.value) {
    mapUserToForm(selectedUser.value)
    toggleEdit(false)
    return
  }

  emit('cancel')
}

function handleDelete() {
  emit('delete', { ...form })
}

let copyTimeout = null

async function copyUserId() {
  const value = form.userId || ''
  if (!value) return

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value)
    } else {
      const temp = document.createElement('textarea')
      temp.value = value
      temp.setAttribute('readonly', '')
      temp.style.position = 'absolute'
      temp.style.left = '-9999px'
      document.body.appendChild(temp)
      temp.select()
      document.execCommand('copy')
      document.body.removeChild(temp)
    }

    copied.value = true
    emit('copy-id', value)

    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (error) {
    console.error('Gagal menyalin ID pengguna:', error)
  }
}

onBeforeUnmount(() => {
  if (copyTimeout) clearTimeout(copyTimeout)
})
</script>

<style scoped>
.user-detail-page {
  box-sizing: border-box;
  background: transparent;
}

.user-card {
  max-width: 1120px;
  margin: 0 auto;
  padding: 36px;
  background: var(--card, #fbfaf8);
  border-radius: 28px;
  box-shadow: 0 18px 50px rgba(25, 18, 12, 0.06);
  border: 1px solid rgba(139, 97, 56, 0.06);
}

.profile-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.avatar-wrap {
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.avatar-image,
.avatar-fallback {
  width: 100%;
  height: 100%;
  display: block;
}

.avatar-image {
  object-fit: cover;
}

.avatar-fallback {
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary-soft, #e9bf84), var(--primary, #8b6138));
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.profile-meta {
  min-width: 0;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.user-name {
  margin: 0 0 10px;
  font-size: 35.2px;
  line-height: 1.1;
  font-weight: 700;
  color: #7d5731;
  font-family: 'Manrope', sans-serif;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.status-badge.is-active {
  color: #27965a;
  background: rgba(39, 150, 90, 0.12);
}

.status-badge.is-inactive {
  color: #9b6a1d;
  background: rgba(233, 191, 132, 0.22);
}

.user-role {
  margin: 0;
  font-size: 1rem;
  color: var(--text, #736b65);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.ghost-btn,
.danger-btn,
.secondary-btn,
.primary-btn,
.icon-action-btn {
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: 0.2s ease;
  font: inherit;
}

.ghost-btn {
  padding: 12px 18px;
  border-radius: 999px;
  color: var(--primary, #8b6138);
  background: rgba(139, 97, 56, 0.08);
}

.ghost-btn:hover {
  transform: translateY(-1px);
  background: rgba(139, 97, 56, 0.14);
}

.danger-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 999px;
  color: var(--danger, #e74c3c);
  background: var(--danger-soft, #fdeaea);
}

.danger-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(231, 76, 60, 0.12);
}

.btn-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px 28px;
}

.field {
  min-width: 0;
}

.full-width {
  width: 100%;
}

.field-label {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(115, 107, 101, 0.8);
}

.input-field,
.textarea-field {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 14px;
  background: var(--bg, #f7f5f1);
  color: #3a332f;
  font: inherit;
  transition: 0.2s ease;
  box-sizing: border-box;
}

.input-field {
  min-height: 54px;
  padding: 0 16px;
}

.textarea-field {
  min-height: 140px;
  padding: 16px;
  resize: vertical;
  line-height: 1.7;
}

.input-field::placeholder,
.textarea-field::placeholder {
  color: rgba(115, 107, 101, 0.55);
}

.input-field:focus,
.textarea-field:focus,
.select-field:focus {
  border-color: rgba(139, 97, 56, 0.24);
  box-shadow: 0 0 0 4px rgba(139, 97, 56, 0.08);
  background: #fff;
}

.input-field[readonly],
.textarea-field[readonly] {
  cursor: default;
}

.select-wrap,
.input-with-action {
  position: relative;
}

.select-field {
  appearance: none;
  padding-right: 46px;
}

.select-field:disabled {
  opacity: 1;
  color: #3a332f;
  -webkit-text-fill-color: #3a332f;
  cursor: default;
}

.select-icon {
  position: absolute;
  top: 50%;
  right: 16px;
  width: 18px;
  height: 18px;
  color: var(--text, #736b65);
  transform: translateY(-50%);
  pointer-events: none;
}

.select-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.has-action {
  padding-right: 52px;
}

.icon-action-btn {
  position: absolute;
  top: 50%;
  right: 12px;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: var(--text, #736b65);
  background: transparent;
  transform: translateY(-50%);
}

.icon-action-btn:hover {
  color: var(--primary, #8b6138);
  background: rgba(139, 97, 56, 0.08);
}

.icon-action-btn svg {
  width: 18px;
  height: 18px;
  display: block;
}

.helper-text {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.82rem;
  color: #27965a;
}

.divider {
  height: 1px;
  margin: 30px 0;
  background: rgba(139, 97, 56, 0.1);
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 28px;
}

.secondary-btn {
  min-width: 120px;
  padding: 14px 22px;
  border-radius: 999px;
  background: transparent;
  color: var(--text, #736b65);
  border: 1px solid rgba(139, 97, 56, 0.12);
}

.secondary-btn:hover {
  background: rgba(139, 97, 56, 0.05);
}

.primary-btn {
  min-width: 190px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 12px 24px rgba(139, 97, 56, 0.18);
}

.primary-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(139, 97, 56, 0.24);
}

@media (max-width: 900px) {
  .user-detail-page {
    padding: 20px;
  }

  .user-card {
    padding: 24px;
    border-radius: 24px;
  }

  .profile-header {
    flex-direction: column;
    align-items: stretch;
  }

  .header-actions {
    justify-content: flex-start;
  }

  .user-name {
    font-size: 1.7rem;
  }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .profile-info {
    align-items: flex-start;
  }

  .footer-actions {
    flex-direction: column-reverse;
  }

  .secondary-btn,
  .primary-btn {
    width: 100%;
  }
}

@media (max-width: 520px) {
  .user-detail-page {
    /* Padding handled globally */
  }

  .user-card {
    padding: 18px;
    border-radius: 20px;
  }

  .profile-info {
    flex-direction: column;
  }

  .avatar-wrap {
    width: 78px;
    height: 78px;
  }

  .user-name {
    font-size: 1.4rem;
  }

  .header-actions {
    width: 100%;
  }

  .ghost-btn,
  .danger-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>