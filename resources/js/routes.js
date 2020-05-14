import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';
import Login from '@/js/pages/LoginPage';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Login
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});

const isAuthenticated = localStorage.getItem('token');

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
  })

export default router;
