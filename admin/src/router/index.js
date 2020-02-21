import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
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
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
