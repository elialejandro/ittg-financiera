import './bootstrap';
import Vue from 'vue';
import vuetify from '@/js/plugins/vuetify';

import Routes from '@/js/routes.js';

import App from '@/js/views/App';
import store  from '@/js/stores';


if (store.state.isAuthenticated) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token;
}

store.dispatch('getUser');

const app = new Vue({
    vuetify,
    el: '#app',
    router: Routes,
    render: h => h(App),
    store: store
})

export default app;
