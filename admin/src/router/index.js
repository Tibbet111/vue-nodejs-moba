import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue'),
    meta:{isPublic : true}
  },
  {
    path: '/',
    name: 'main',
    component: ()=>import('../views/main.vue'),
    children:[
      {
        path:'/categories/create',
        component:()=>import('../views/categoryEdit.vue')
      },
      {
        path:'/categories/list',
        component:()=>import('../views/categoryList.vue')
      },
      {
        path:'/categories/edit/:id',
        component:()=>import('../views/categoryEdit.vue'),
        props:true
      },
      {
        path:'/items/create',
        component:()=>import('../views/itemEdit.vue')
      },
      {
        path:'/items/list',
        component:()=>import('../views/itemList.vue')
      },
      {
        path:'/items/edit/:id',
        component:()=>import('../views/itemEdit.vue'),
        props:true
      },
      {
        path:'/heros/create',
        component:()=>import('../views/heroEdit.vue')
      },
      {
        path:'/heros/list',
        component:()=>import('../views/heroList.vue')
      },
      {
        path:'/heros/edit/:id',
        component:()=>import('../views/heroEdit.vue'),
        props:true
      },
      {
        path:'/articles/create',
        component:()=>import('../views/articleEdit.vue')
      },
      {
        path:'/articles/list',
        component:()=>import('../views/articleList.vue')
      },
      {
        path:'/articles/edit/:id',
        component:()=>import('../views/articleEdit.vue'),
        props:true
      },
      {
        path:'/ads/create',
        component:()=>import('../views/adEdit.vue')
      },
      {
        path:'/ads/list',
        component:()=>import('../views/adList.vue')
      },
      {
        path:'/ads/edit/:id',
        component:()=>import('../views/adEdit.vue'),
        props:true
      },
      {
        path:'/admin_users/create',
        component:()=>import('../views/adminUserEdit.vue')
      },
      {
        path:'/admin_users/list',
        component:()=>import('../views/adminUserList.vue')
      },
      {
        path:'/admin_users/edit/:id',
        component:()=>import('../views/adminUserEdit.vue'),
        props:true
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router
