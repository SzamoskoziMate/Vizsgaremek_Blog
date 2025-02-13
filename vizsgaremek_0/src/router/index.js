import IndexView from '@/views/IndexView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      meta:{
        title: "Főoldal"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        title: "Bejelentkezés"
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
      meta:{
        title: "Regisztráció"
      }
    },
  ],
})
router.beforeEach((to,from, next)=>{
  document.title = `${to.meta.title}`
  next(); 
})
export default router
