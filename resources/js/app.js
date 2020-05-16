import './bootstrap';
import Vue from 'vue';
import vuetify from '@/js/plugins/vuetify';

import Routes from '@/js/routes.js';

import App from '@/js/views/App';
import store  from '@/js/stores';

const app = new Vue({
    vuetify,
    el: '#app',
    router: Routes,
    render: h => h(App),
    store: store
})

export default app;
