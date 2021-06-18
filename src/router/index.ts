import { createRouter, createWebHistory }  from 'vue-router'
import layout_page from '../layout/Page.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/index',
      component:layout_page,
      children:[
        {
          path:'',
          name:'index',
          component:() => import("../views/Index.vue")
        }
      ]
      
    },
    {
      path:'/home',
      name:'home',
      component:() => import("../views/Home.vue")
    }
  ]
})

export default router;