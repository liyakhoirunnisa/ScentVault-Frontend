<template>
  <header class="top-header">
    <div class="header-left">
      <slot></slot>
    </div>

    <div class="header-actions">
      <div class="profile-section" @click="$router.push(profileRoute)">
        <div class="profile-text">
          <span class="profile-name">{{ resolvedProfileName }}</span>
          <span v-if="resolvedProfileRole" class="profile-role">{{ resolvedProfileRole }}</span>
        </div>

        <img
          :src="resolvedProfileAvatar"
          :alt="resolvedProfileName"
          class="profile-avatar"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import defaultAvatar from '@/assets/profil.jpg'

const props = defineProps({
  profileName: {
    type: String,
    default: 'ELENA VANCE',
  },
  profileRole: {
    type: String,
    default: '',
  },
  profileAvatar: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
  },
  profileRoute: {
    type: String,
    default: '/profil',
  },
})

const userUpdateTrigger = ref(0)

const getUserFromStorage = () => {
  const userStr = localStorage.getItem('user')
  return userStr ? JSON.parse(userStr) : null
}

const currentUser = computed(() => {
  userUpdateTrigger.value
  return getUserFromStorage()
})

const formatRole = (role) => {
  const roleMap = {
    admin: 'Admin',
    user: 'Pengguna',
    system_admin: 'Admin'
  }

  return roleMap[role] || role || ''
}

const resolvedProfileName = computed(() => {
  const storedName = currentUser.value?.name
  return storedName ? storedName.toUpperCase() : props.profileName
})

const resolvedProfileRole = computed(() => {
  const storedRole = formatRole(currentUser.value?.role)
  return storedRole || props.profileRole
})

const resolvedProfileAvatar = computed(() => {
  const photo = currentUser.value?.photo
  if (photo) {
    return `http://localhost:8000/storage/${photo}?t=${Date.now()}`
  }

  return props.profileAvatar || defaultAvatar
})

const refreshUserData = () => {
  userUpdateTrigger.value += 1
}

onMounted(() => {
  window.addEventListener('user-data-updated', refreshUserData)
  window.addEventListener('storage', refreshUserData)
})

onUnmounted(() => {
  window.removeEventListener('user-data-updated', refreshUserData)
  window.removeEventListener('storage', refreshUserData)
})
</script>

<style scoped>
.top-header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.profile-text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.1;
}

.profile-name {
  font-size: 0.7rem;
  font-weight: 800;
  color: #000000;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.profile-role {
  font-size: 0.58rem;
  font-weight: 700;
  color: #7b7b7b;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 3px;
}

.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
