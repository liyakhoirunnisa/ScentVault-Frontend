import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import BerandaView from '../views/BerandaView.vue'
import DetailParfumView from '../views/DetailParfumView.vue'
import KoleksiView from '../views/KoleksiView.vue'
import TambahParfumView from '../views/TambahParfumView.vue'
import BukuView from '../views/BukuView.vue'
import EditParfumView from '../views/EditParfumView.vue'
import KesesuianView from '../views/KesesuaianView.vue'
import ProfilView from '../views/ProfilView.vue'
import KonfigurasiAturan from '../views/KonfigurasiAturan.vue'
import ProfileAdminView from '../views/ProfileAdminView.vue'
import ManajemenPengguna from '../views/ManajemenPengguna.vue'
import TambahPengguna from '../views/TambahPengguna.vue'
import UserDetail from '../views/UserDetail.vue'
import IntegrasiData from '../views/IntegrasiData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { guestOnly: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { guestOnly: true },
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: BerandaView,
      meta: { requiresAuth: true },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailParfumView,
      meta: { requiresAuth: true },
    },
    {
      path: '/koleksi',
      name: 'koleksi',
      component: KoleksiView,
      meta: { requiresAuth: true },
    },
    {
      path: '/tambah-parfum',
      name: 'tambah-parfum',
      component: TambahParfumView,
      meta: { requiresAuth: true },
    },
    {
      path: '/buku',
      name: 'buku',
      component: BukuView,
      meta: { requiresAuth: true },
    },
    {
      path: '/edit-parfum/:id',
      name: 'edit-parfum',
      component: EditParfumView,
      meta: { requiresAuth: true },
    },
    {
      path: '/kesesuaian',
      name: 'kesesuaian',
      component: KesesuianView,
      meta: { requiresAuth: true },
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView,
      meta: { requiresAuth: true },
    },
    {
      path: '/konfigurasi-aturan',
      name: 'KonfigurasiAturan',
      component: KonfigurasiAturan,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari konfigurasi aturan...',
      },
    },
    {
      path: '/manajemen-pengguna',
      name: 'ManajemenPengguna',
      component: ManajemenPengguna,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari pengguna...',
      },
    },
    {
      path: '/tambah-pengguna',
      name: 'TambahPengguna',
      component: TambahPengguna,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari pengguna...',
      },
    },
    {
      path: '/integrasi-data',
      name: 'IntegrasiData',
      component: IntegrasiData,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari integrasi...',
      },
    },
    {
      path: '/manajemen-pengguna/detail/:id',
      name: 'UserDetail',
      component: UserDetail,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari pengguna...',
      },
    },
    {
      path: '/manajemen-pengguna/edit/:id',
      name: 'UserEdit',
      component: UserDetail,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari pengguna...',
      },
    },
    {
      path: '/profil-admin',
      name: 'ProfileAdminView',
      component: ProfileAdminView,
      meta: {
        layout: 'admin',
        topbarPlaceholder: 'Cari profil admin...',
      },
    },
  ],
})

router.beforeEach((to) => {
  const token = localStorage.getItem('token')
  const isAuthenticated = !!token

  if (to.meta.requiresAuth && !isAuthenticated) {
    return '/'
  }

  if (to.meta.guestOnly && isAuthenticated) {
    return '/beranda'
  }
})

export default router
