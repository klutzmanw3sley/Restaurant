import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import ContactUs from '@/components/ContactUs.vue'
import Menu from '@/components/Menu.vue'
import Login from '@/components/MenuItem.vue'
import MenuItem from '@/components/MenuItem.vue'
import Orders from '@/components/Orders.vue'
import Reservation from '@/components/Reservation.vue'
import SignUp from '@/components/SignUp.vue'
import UserProfile from '@/components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'home',
      path:'/',
      component:Home
    },
    {
      name:'contactus',
      path:'/contactus',
      component:ContactUs

    },
    {
      name:'menu',
      path:'/menu',
      component:Menu
    }, 
    {
      name:'login',
      path:'/login',
      component:Login
    
    },
    {
      name:'menuitem',
      path:'/menuitem',
      component:MenuItem
    },
    {
      name:'reservation',
      path:'/reservation',
      component:Reservation
    },
    {
      name:'orders',
      path:'/orders',
      component:Orders
    },
    {
      name:'signup',
      path:'/signup',
      component:SignUp
    },
    {
      name:'userprofile',
      path:'/userprofile',
      component:UserProfile
    }
  
  ],
})

export default router
