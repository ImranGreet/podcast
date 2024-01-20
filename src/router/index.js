import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../Pages/Home.vue'),
    },
    {
        path: '/host',
        name: 'host',
        component: () => import('../Pages/Host.vue'),
    },
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
