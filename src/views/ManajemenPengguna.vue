<template>
  <main class="content-body">
    <div class="page-shell">
      <section class="welcome-section">
        <div>
          <h1>Manajemen Pengguna</h1>
          <p>
            Kelola hak akses dan profil kurator dalam ekosistem Digital Atelier
            ScentVault.
          </p>
        </div>
        <div class="head-actions">
          <router-link to="/tambah-pengguna" class="btn btn-solid">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <span>Tambah Pengguna</span>
          </router-link>
        </div>
      </section>

      <section class="stats-grid">
        <article
          v-for="user in users"
          :key="user.id"
          class="stat-card"
        >
          <div class="stat-header">
            <div class="avatar-wrap">
              <div class="avatar">
                <img
                  v-if="user.image && !imageErrors[user.id]"
                  :src="user.image"
                  :alt="user.name"
                  @error="markImageError(user.id)"
                />
                <span v-else>{{ getInitials(user.name) }}</span>
              </div>
            </div>

            <div class="user-meta">
              <span class="stat-badge">{{ formatRole(user.role) }}</span>
              <h3>{{ user.name }}</h3>
              <p>{{ user.email }}</p>
            </div>
          </div>

          <div class="card-divider" />

          <div class="card-actions">
            <button
              class="icon-btn"
              type="button"
              aria-label="Lihat pengguna"
              @click="viewUser(user)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </button>

            <button
              class="icon-btn"
              type="button"
              aria-label="Edit pengguna"
              @click="editUser(user)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 20h4l10.5-10.5a2.12 2.12 0 0 0-3-3L5 17v3Z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              class="icon-btn"
              type="button"
              aria-label="Hapus pengguna"
              @click="deleteUser(user)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 7h14M9 7V5h6v2m-7 3v7m4-7v7m4-7v7M7 7l1 12h8l1-12"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </article>
      </section>

      <p v-if="!isLoading && users.length === 0" class="empty-state">
        Tidak ada pengguna yang cocok dengan pencarian saat ini.
      </p>

      <nav class="pagination" aria-label="Pagination pengguna" v-if="pagination.lastPage > 1">
        <button
          class="page-arrow"
          type="button"
          :disabled="pagination.currentPage === 1 || isLoading"
          @click="prevPage"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M14 6l-6 6 6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          v-for="page in pagination.lastPage"
          :key="page"
          type="button"
          class="page-number"
          :class="{ active: page === pagination.currentPage }"
          :disabled="isLoading"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <button
          class="page-arrow"
          type="button"
          :disabled="pagination.currentPage === pagination.lastPage || isLoading"
          @click="nextPage"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M10 6l6 6-6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, inject, watch } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'

const router = useRouter()

const searchQuery = inject('globalSearch', ref(''))

const perPage = 5
const imageErrors = ref({})
const users = ref([])
const isLoading = ref(false)
const pagination = ref({
  currentPage: 1,
  lastPage: 1,
  perPage,
  total: 0
})

const getImageUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) return path

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `http://localhost:8000/storage/${normalizedPath}?t=${Date.now()}`
}

const mapUser = (user) => ({
  ...user,
  role: user.role || 'Kurator',
  image: getImageUrl(user.photo || user.image || '')
})

const loadUsers = async (page = pagination.value.currentPage) => {
  isLoading.value = true
  try {
    const res = await api.get('/admin/users', {
      params: {
        page,
        per_page: perPage,
        search: searchQuery.value || undefined
      }
    })

    const payload = res.data?.data || {}
    const fetchedUsers = payload.users || []
    const fetchedPagination = payload.pagination || {}

    users.value = fetchedUsers.map(mapUser)
    pagination.value = {
      currentPage: fetchedPagination.current_page || page,
      lastPage: fetchedPagination.last_page || 1,
      perPage: fetchedPagination.per_page || perPage,
      total: fetchedPagination.total || fetchedUsers.length
    }
  } catch (err) {
    console.error(err)
    users.value = []
    pagination.value = {
      currentPage: 1,
      lastPage: 1,
      perPage,
      total: 0
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadUsers()
})

watch(searchQuery, () => {
  loadUsers(1)
})

const prevPage = () => {
  if (pagination.value.currentPage > 1) {
    loadUsers(pagination.value.currentPage - 1)
  }
}

const nextPage = () => {
  if (pagination.value.currentPage < pagination.value.lastPage) {
    loadUsers(pagination.value.currentPage + 1)
  }
}

const goToPage = (page) => {
  if (page !== pagination.value.currentPage) {
    loadUsers(page)
  }
}

const getInitials = (name) => {
  if (!name) return 'U'
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

const formatRole = (role) => {
  if (!role) return 'User'
  const map = {
    kurator: 'Kurator',
    admin: 'Admin',
    operator: 'Operator',
    Kurator: 'Kurator',
    Admin: 'Admin',
    Operator: 'Operator',
    system_admin: 'Admin',
    curator: 'Kurator'
  }
  return map[role] || role
}

const markImageError = (userId) => {
  imageErrors.value[userId] = true
}

const viewUser = (user) => {
  router.push({
    path: `/manajemen-pengguna/detail/${user.id}`,
  })
}

const editUser = (user) => {
  router.push({
    path: `/manajemen-pengguna/edit/${user.id}`,
  })
}

const deleteUser = async (user) => {
  if (!confirm(`Hapus pengguna ${user.name}?`)) return
  try {
    await api.delete(`/admin/users/${user.id}`)
    const targetPage = users.value.length === 1 && pagination.value.currentPage > 1
      ? pagination.value.currentPage - 1
      : pagination.value.currentPage
    await loadUsers(targetPage)
  } catch(err) {
    console.error(err)
  }
}
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

.content-body {
  --bg: #f7f5f1;
  --card: #fbfaf8;
  --card-line: rgba(125, 87, 49, 0.08);
  --title: #8a6035;
  --text: #736b65;
  --primary: #8b6138;
  --primary-dark: #7d5731;
  --primary-soft: #e9bf84;
  --badge-bg: #f2d6cb;
  --badge-text: #8f6140;
  --icon-bg: #f3f1ec;
  --icon-color: #987347;
  --green: #4faf6c;
  --green-soft: #e8f5eb;
  --gray: #9d9a96;
  --gray-soft: #ece9e5;

  background: transparent;
}

.page-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.welcome-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 36px;
}

.welcome-section h1 {
  margin: 0 0 10px;
  color: #7d5731;
  font-family: 'Manrope', sans-serif;
  font-size: 35.2px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.welcome-section p {
  max-width: 540px;
  margin: 0;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.6;
}

.head-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 700;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn svg {
  width: 18px;
  height: 18px;
}

.btn-solid {
  color: #fff;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 16px 30px rgba(139, 97, 56, 0.18);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.stat-card {
  position: relative;
  min-height: 244px;
  padding: 26px;
  border-radius: 26px;
  background: var(--card);
  border: 1px solid var(--card-line);
  box-shadow: 0 18px 34px rgba(77, 57, 34, 0.04);
}

.card-menu {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #988b7f;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.card-menu svg {
  width: 18px;
  height: 18px;
}

.stat-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 22px;
}

.avatar-wrap {
  position: relative;
  width: 64px;
  min-width: 64px;
  height: 64px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  overflow: hidden;
  background: linear-gradient(180deg, #d8d3ca 0%, #ede8e0 100%);
  color: var(--primary-dark);
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-status {
  position: absolute;
  right: -1px;
  bottom: 1px;
  width: 14px;
  height: 14px;
  border: 3px solid var(--card);
  border-radius: 50%;
}

.avatar-status.is-active {
  background: var(--green);
}

.avatar-status.is-inactive {
  background: #c9c4bf;
}

.user-meta {
  min-width: 0;
}

.stat-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  padding: 5px 12px;
  border-radius: 999px;
  background: var(--badge-bg);
  color: var(--badge-text);
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.user-meta h3 {
  margin: 0 0 4px;
  color: #383430;
  font-size: 1.75rem;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.user-meta p {
  margin: 0;
  color: #77706a;
  font-size: 0.96rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status-pill {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.07em;
}

.status-pill.active {
  background: var(--green-soft);
  color: #3c8a54;
}

.status-pill.inactive {
  background: var(--gray-soft);
  color: var(--gray);
}

.status-pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
}

.card-divider {
  height: 1px;
  margin: 22px 0 18px;
  background: rgba(125, 87, 49, 0.09);
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon-btn {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: var(--icon-bg);
  color: var(--icon-color);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
}

.icon-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(139, 97, 56, 0.08);
}

.icon-btn svg {
  width: 18px;
  height: 18px;
}

.empty-state {
  margin: 28px 0 0;
  padding: 24px;
  border-radius: 20px;
  background: rgba(251, 250, 248, 0.9);
  border: 1px solid rgba(125, 87, 49, 0.08);
  color: var(--text);
  text-align: center;
  font-weight: 600;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 54px;
}

.page-arrow,
.page-number {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(125, 87, 49, 0.12);
  background: #f8f5f0;
  color: #786d63;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.18s ease;
}

.page-arrow svg {
  width: 16px;
  height: 16px;
}

.page-number.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 12px 24px rgba(139, 97, 56, 0.2);
}

.page-arrow:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.page-number:disabled {
  cursor: wait;
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .welcome-section {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .content-body {
    /* Padding handled globally */
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .head-actions {
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
