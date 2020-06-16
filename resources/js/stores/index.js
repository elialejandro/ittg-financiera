import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        drawerOpen: true,
        isAuthenticated: JSON.parse(localStorage.getItem('auth')) || false,
        token: localStorage.getItem('access_token') || undefined,
        refreshToken: localStorage.getItem('refresh_token') || undefined,
        user: {}
    },
    actions: {
        async login ({ dispatch }, credentials) {
            const data = {
                grant_type: 'password',
                client_id: '90d28397-222f-4aaf-92eb-70915fab2946',
                client_secret: 'R21sDuM6txJZn6gKbBEFpXFBHNQ3JvgugBaBvW7z',
                username: credentials.email,
                password: credentials.password,
                scopes: ''
            };

            const response = await axios.post('/oauth/token', data);

            console.log(response.data);

            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

            return dispatch('getUser');
        },
        async logout({ dispatch }) {
            localStorage.clear();
            axios.defaults.headers.common['Authorization'] = undefined;
            return dispatch('getUser');
        },

        getUser ({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/api/user')
                    .then(response => {
                        resolve();
                        commit('SET_USER', response.data);
                    })
                    .catch(error => {
                        resolve()
                        commit('SET_USER', null);
                    });
            });
        },
        drawerToggle ({ commit }) {
            commit('DRAWER_TOGGLE');
        }
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user;
            state.isAuthenticated = Boolean(user);
            localStorage.setItem('auth', state.isAuthenticated);
        },
        DRAWER_TOGGLE(state) {
            state.drawerOpen = !state.drawerOpen;
        }
    },
    getters: {}
});

export default store;
