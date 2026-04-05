<template>
  <header class="top-header">
    
    <div class="header-left">
      <slot></slot> 
    </div>

    <div class="header-actions">
      <button class="btn-bell" @click="$router.push('/notifikasi')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 5a2 2 0 0 1 4 0"></path>
          <path d="M6 10a6 6 0 0 1 12 0v8H6z"></path>
          <line x1="4" y1="18" x2="20" y2="18"></line>
          <polygon points="10.5 20 13.5 20 12 22.5"></polygon>
        </svg>
      </button>

      <div class="header-divider"></div>

      <div class="profile-section" @click="$router.push('/profil')">
        <span class="profile-name">ELENA VANCE</span>
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Elena Vance" class="profile-avatar" />
      </div>
    </div>
    
  </header>
</template>

<style scoped>
/* Pindahkan CSS khusus Header dari BerandaView ke sini */
.top-header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: transparent; /* Sesuaikan dengan desain */
}

.header-left {
  display: flex;
  align-items: center;
  flex: 1; /* Memberi ruang agar header-actions kedorong ke kanan */
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-bell { background: none; border: none; cursor: pointer; color: #888; transition: color 0.2s; display: flex;}
.btn-bell:hover { color: #7d5731; }
.btn-bell svg { width: 25px; height: 25px; }

.header-divider { width: 1px; height: 24px; background-color: #e5e5e5; }

.profile-section { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.profile-name { font-size: 0.7rem; font-weight: 800; color: #000000; letter-spacing: 0.5px; text-transform: uppercase; }
.profile-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
</style>