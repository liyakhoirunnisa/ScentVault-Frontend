<template>
  <main class="users-page">
    <section class="page-head">
      <div>
        <h1>Manajemen Pengguna</h1>
        <p>
          Kelola hak akses dan profil kurator dalam ekosistem Digital Atelier
          ScentVault.
        </p>
      </div>
      <div class="head-actions">
        <router-link to="/tambah-pengguna" class="btn btn-primary">
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

    <section class="users-grid">
      <article
        v-for="user in paginatedUsers"
        :key="user.id"
        class="user-card"
      >

        <div class="user-top">
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
            <span class="role-badge">{{ formatRole(user.role) }}</span>
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

    <nav class="pagination" aria-label="Pagination pengguna" v-if="totalPages > 1">
      <button
        class="page-arrow"
        type="button"
        :disabled="currentPage === 1"
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
        v-for="page in totalPages"
        :key="page"
        type="button"
        class="page-number"
        :class="{ active: page === currentPage }"
        @click="currentPage = page"
      >
        {{ page }}
      </button>

      <button
        class="page-arrow"
        type="button"
        :disabled="currentPage === totalPages"
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
  </main>
</template>

<script setup>
import { computed, onMounted, ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchQuery = inject('globalSearch', ref(''))

const currentPage = ref(1)
const perPage = 5
const imageErrors = ref({})

const defaultUsers = [
  {
    id: 1,
    name: 'Clara Amandine',
    email: 'clara.a@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=32',
  },
  {
    id: 2,
    name: 'Julian Sterling',
    email: 'sterling.j@scentvault.com',
    role: 'Admin',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=12',
  },
  {
    id: 3,
    name: 'Elara Vance',
    email: 'evance@scentvault.com',
    role: 'Kurator',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=47',
  },
  {
    id: 4,
    name: 'Marcus Thorne',
    email: 'm.thorne@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=14',
  },
  {
    id: 5,
    name: 'Sophia Lazar',
    email: 's.lazar@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=48',
  },
  {
    id: 6,
    name: 'Noah Bellamy',
    email: 'n.bellamy@scentvault.com',
    role: 'Admin',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=19',
  },
  {
    id: 7,
    name: 'Isla Moreau',
    email: 'imoreau@scentvault.com',
    role: 'Kurator',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=25',
  },
  {
    id: 8,
    name: 'Theo Arden',
    email: 'theo.arden@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=67',
  },
  {
    id: 9,
    name: 'Aurora Flint',
    email: 'aurora.f@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=44',
  },
  {
    id: 10,
    name: 'Elias Hart',
    email: 'elias.h@scentvault.com',
    role: 'Admin',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=60',
  },
  {
    id: 11,
    name: 'Luna Cervantes',
    email: 'l.cervantes@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=39',
  },
  {
    id: 12,
    name: 'Milo Vesper',
    email: 'mvesper@scentvault.com',
    role: 'Kurator',
    status: 'active',
    image: 'https://i.pravatar.cc/120?img=15',
  },
  {
    id: 13,
    name: 'Freya Solene',
    email: 'freya.s@scentvault.com',
    role: 'Kurator',
    status: 'inactive',
    image: 'https://i.pravatar.cc/120?img=50',
  },
]

const users = ref([])

const loadUsers = () => {
  const savedUsers = JSON.parse(localStorage.getItem('scentvault_users') || '[]')
  users.value = [...savedUsers, ...defaultUsers]
}

onMounted(() => {
  loadUsers()
})

const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value
  return users.value.filter(u => u.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / perPage))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredUsers.value.slice(start, end)
})

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const getInitials = (name) => {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

const formatRole = (role) => {
  const map = {
    kurator: 'Kurator',
    admin: 'Admin',
    operator: 'Operator',
    Kurator: 'Kurator',
    Admin: 'Admin',
    Operator: 'Operator',
  }
  return map[role] || role
}

const markImageError = (userId) => {
  imageErrors.value[userId] = true
}

const viewUser = (user) => {
  console.log('Membuka profil: ' + user.name)

  router.push({
    path: `/manajemen-pengguna/detail/${user.id}`,
  })
}

const editUser = (user) => {
  console.log('Membuka profil: ' + user.name)

  router.push({
    path: `/manajemen-pengguna/edit/${user.id}`,
  })
}

const deleteUser = (user) => {
  const savedUsers = JSON.parse(localStorage.getItem('scentvault_users') || '[]')
  const updatedSavedUsers = savedUsers.filter((item) => item.id !== user.id)

  localStorage.setItem('scentvault_users', JSON.stringify(updatedSavedUsers))
  users.value = users.value.filter((item) => item.id !== user.id)

  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value)
  }

  console.log('Delete user:', user)
}
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

.users-page {
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

  min-height: 100%;
  padding: 48px 56px;
  background: var(--bg);
}

.page-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 36px;
}

.page-head h1 {
  margin: 0 0 10px;
  color: var(--title);
  font-size: clamp(2rem, 2.4vw, 2.8rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.page-head p {
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

.btn-primary {
  color: #fff;
  background: linear-gradient(90deg, #8b6138 0%, #e9bf84 100%);
  box-shadow: 0 16px 30px rgba(139, 97, 56, 0.18);
}

.users-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.user-card {
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

.user-top {
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

.role-badge {
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

@media (max-width: 1200px) {
  .users-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .page-head {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .users-page {
    padding: 32px 20px;
  }

  .users-grid {
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