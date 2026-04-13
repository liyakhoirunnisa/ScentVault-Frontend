<template>
  <header class="admin-topbar">
    <div class="topbar-left">
      <div v-if="showSearch" class="search-wrap">
        <span class="search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <path
              d="M20 20l-4.2-4.2"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </span>

        <input
          v-model="keyword"
          type="text"
          class="search-input"
          :placeholder="placeholder"
        />
      </div>
    </div>

    <div class="topbar-right">
      <button
        type="button"
        class="profile-section"
        @click="goToProfile"
      >
        <div class="profile-text">
          <span class="profile-name">{{ profileName }}</span>
          <span v-if="profileRole" class="profile-role">{{ profileRole }}</span>
        </div>

        <img
          v-if="profileAvatar"
          :src="profileAvatar"
          :alt="profileName"
          class="profile-avatar"
        />

        <div v-else class="profile-fallback">
          {{ initials }}
        </div>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['update:search'])

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Cari integrasi...'
  },
  profileName: {
    type: String,
    default: 'Profil Admin'
  },
  profileRole: {
    type: String,
    default: 'Kurator Utama'
  },
  profileAvatar: {
    type: String,
    default: 'https://i.pravatar.cc/120?img=12'
  },
  profileRoute: {
    type: String,
    default: '/profil-admin'
  },
  hasNotificationDot: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  }
})

const router = useRouter()
const keyword = ref('')

watch(keyword, (val) => {
  emit('update:search', val)
})

const initials = computed(() => {
  return (props.profileName || 'A')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0]?.toUpperCase() || '')
    .join('')
})

function goToProfile() {
  router.push(props.profileRoute)
}
</script>

<style scoped>
.admin-topbar {
  --bg: #f7f5f1;
  --card: #fbfaf8;
  --title: #8a6035;
  --text: #736b65;
  --primary: #8b6138;
  --primary-soft: #e9bf84;
  --line: rgba(125, 87, 49, 0.1);

  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 32px;
  background: transparent;
}

.topbar-left {
  flex: 1;
  min-width: 0;
}

.search-wrap {
  position: relative;
  max-width: 420px;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  width: 18px;
  height: 18px;
  color: #93897f;
  transform: translateY(-50%);
  pointer-events: none;
}

.search-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.search-input {
  width: 100%;
  height: 44px;
  padding: 0 16px 0 42px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: #efede8;
  color: #3a332f;
  font: inherit;
  outline: none;
  transition: 0.2s ease;
}

.search-input::placeholder {
  color: #9a9188;
}

.search-input:focus {
  background: #ffffff;
  border-color: rgba(139, 97, 56, 0.18);
  box-shadow: 0 0 0 4px rgba(139, 97, 56, 0.06);
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.icon-btn {
  position: relative;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--primary);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.2s ease;
}

.icon-btn:hover {
  background: rgba(139, 97, 56, 0.08);
  transform: translateY(-1px);
}

.icon-btn svg {
  width: 18px;
  height: 18px;
}

.notif-dot {
  position: absolute;
  top: 7px;
  right: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #b57a43;
}

.divider {
  width: 1px;
  height: 28px;
  background: var(--line);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.profile-text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.1;
}

.profile-name {
  font-size: 0.84rem;
  font-weight: 800;
  color: #2f2925;
}

.profile-role {
  margin-top: 4px;
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.profile-avatar,
.profile-fallback {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
}

.profile-avatar {
  object-fit: cover;
  display: block;
}

.profile-fallback {
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary-soft), var(--primary));
  color: #fff;
  font-size: 0.82rem;
  font-weight: 800;
}

@media (max-width: 768px) {
  .admin-topbar {
    flex-direction: column;
    align-items: stretch;
    padding: 16px 20px;
  }

  .topbar-right {
    justify-content: space-between;
  }

  .search-wrap {
    max-width: none;
  }
}
</style>