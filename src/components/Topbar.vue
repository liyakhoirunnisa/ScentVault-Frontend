<template>
  <header class="top-header">
    <div class="header-left">
      <slot></slot>
    </div>

    <div class="header-actions">
      <div class="profile-section" @click="$router.push('/profil')">
        <span class="profile-name">ELENA VANCE</span>
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
          alt="Elena Vance"
          class="profile-avatar"
        />
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

.profile-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.profile-name {
  font-size: 0.7rem;
  font-weight: 800;
  color: #000000;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.profile-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
