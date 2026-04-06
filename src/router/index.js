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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: BerandaView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailParfumView,
    },
    {
      path: '/koleksi',
      name: 'koleksi',
      component: KoleksiView,
    },
    {
      path: '/tambah-parfum',
      name: 'tambah-parfum',
      component: TambahParfumView,
    },
    {
      path: '/buku',
      name: 'buku',
      component: BukuView,
    },
    { 
      path: '/edit-parfum', 
      name: 'edit-parfum', 
      component: EditParfumView 
    },
    { 
      path: '/kesesuaian', 
      name: 'kesesuaian', 
      component: KesesuianView 
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView
    }
  ],
})

export default router
