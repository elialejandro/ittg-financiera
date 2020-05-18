import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        drawerOpen: true,
        isAuthenticated: JSON.parse(localStorage.getItem('auth')) || false,
        user: {}
    },
    actions: {
        async login ({ dispatch }, credentials) {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login', credentials);
            return dispatch('getUser');
        },
        async logout({ dispatch }) {
            await axios.post('/logout');
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
