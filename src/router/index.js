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
    {
        path: '/podcast',
        name: 'podcast',
        component: () => import('../Pages/Podcast.vue'),
    },
    {
        path: '/single',
        name: 'singlepodcast',
        component: () => import('../Pages/SinglePodcast.vue'),
    },
    {
        path: '/blog',
        name: 'readblog',
        component: () => import('../Pages/Blog.vue'),
    },
    {
        path: '/single_blog',
        name: 'singleblog',
        component: () => import('../Pages/SingleBlog.vue'),
    },
    {
        path: '/contact_us',
        name: 'contact',
        component: () => import('../Pages/Contact.vue'),
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
