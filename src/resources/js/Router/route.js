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
    {
        path: '/product',
        component: () => import('../Pages/Product.vue'),
        name: 'Product'
    },
    {
        path: '/analysis',
        component: () => import('../Pages/Analysis.vue'),
        name: 'Analysis',
        children: [
            {
                path: 'recommend',
                component: () => import('../Pages/Analysis/recommend.vue'),
            },
            {
                path: 'normal',
                component: () => import('../Pages/Analysis/normal.vue'),
            }
        ]
    },
]

export  default routes;
