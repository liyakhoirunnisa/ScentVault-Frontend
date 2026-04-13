<template>
  <header class="top-header">
    <div class="header-left">
      <slot></slot>
    </div>

    <div class="header-actions">
      <div class="profile-section" @click="$router.push(profileRoute)">
        <div class="profile-text">
          <span class="profile-name">{{ profileName }}</span>
          <span v-if="profileRole" class="profile-role">{{ profileRole }}</span>
        </div>

        <img
          :src="profileAvatar"
          :alt="profileName"
          class="profile-avatar"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
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
</script>

<style scoped>
.top-header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: transparent;
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
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}
</style>