import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from 'router/routers/home'

Vue.use(VueRouter)

const routes = [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/login',
        component: () => import('views/Login')
      },
      homeRouter
     
]


// 重构router的push方法,解决重复点击报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes,
  mode: 'history'
})

// 全局路由守卫
router.beforeEach((to,from,next) => {
  
    if(to.path === '/login'){
      next()
      return
    }

    const token = window.sessionStorage.getItem('token')
    if(token){
       next()
    }else{
      next('/login')
    }
    
})


export default router
