import './bootstrap';
import Vue from 'vue';
import vuetify from '@/js/plugins/vuetify';

import Routes from '@/js/routes.js';

import App from '@/js/views/App';

const app = new Vue({
    vuetify,
    el: '#app',
    router: Routes,
    render: h => h(App),
})

export default app;
