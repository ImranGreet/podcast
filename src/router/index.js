
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
    {
        path:'/',
        component:()=>import('../components/Header/Navabar.vue')
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    base: '/',
    scrollBehavior() {
      window.scrollTo(0, 0);
    },
  });


  
  export default router;