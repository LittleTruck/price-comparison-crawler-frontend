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
        redirect:'/analysis/recommend',
        children: [
            {
                name:'recommend',
                path: 'recommend',
                redirect:'/analysis/recommend/discount',
                component: () => import('../Pages/Analysis/recommend.vue'),
                children: [
                    {
                        name:'discount',
                        path: 'discount',
                        component: () => import('../Pages/Analysis/Recommend/discount.vue'),

                    },
                    {
                        name:'lowest',
                        path: 'lowest',
                        component: () => import('../Pages/Analysis/Recommend/lowest.vue'),
                    }
                ]
            },
            {
                name:'normal',
                path: 'normal',
                redirect:'/analysis/normal/chart',
                component: () => import('../Pages/Analysis/normal.vue'),
                children: [
                    {
                        name:'chart',
                        path: 'chart',
                        component: () => import('../Pages/Analysis/Normal/chart.vue'),

                    },
                    {
                        name:'list',
                        path: 'list',
                        component: () => import('../Pages/Analysis/Normal/list.vue'),
                    }
                ]
            }
        ]
    },
]

export  default routes;
