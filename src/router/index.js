import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
import ShopList from '@/views/ShopList.vue'
import CheckOut from '@/views/CheckOut.vue'
import Login from '@/views/Login.vue'
import Address from '@/views/Address.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/detail/:id',
    component:Detail
  },
  {
    path:'/shop',
    component:ShopList
  },
  {
    path:'/checkout',
    component:CheckOut
  },
  {
    path:'/address',
    component:Address,
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem('token')
      if(token){
        next()
      }else{
        next({
          path:'/login'
        })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//     console.log(to,from)
//     let token = localStorage.getItem('token')
//     if(to.path == '/address'){
//       if(token){
//         next()
//       }else{
//         next({
//           path:'/login'
//         })
//       }
//     }else{
//       next()
//     }
// })

export default router
