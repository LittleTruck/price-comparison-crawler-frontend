const routes = [
    {
        path: '/home',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import('../Pages/About.vue'),
        name: 'about'
    },
    {
        path: '/recorder',
        component: () => import('../Pages/Recorder.vue'),
        name: 'recorder'
    },
    {
        path: '/index',
        component: () => import('../Pages/Index.vue'),
        name: 'index'
    },
]

export  default routes;
