import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';
import Login from '@/js/pages/LoginPage';
import View from '@/js/views/View';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            component: View,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
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

const isAuthenticated = localStorage.getItem('auth');

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else if (to.name === 'Login' && isAuthenticated) next({ name: 'home' })
    else next()
  })

export default router;
