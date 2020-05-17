import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        drawerOpen: true,
        isAuthenticated: localStorage.getItem('auth') || false,
        user: {}
    },
    actions: {
        async login ({ dispatch }, credentials) {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login', credentials);
            dispatch('getUser');
        },

        getUser ({ commit }) {
            axios.get('/api/user')
                .then(response => {
                    commit('setUser', response.data);
                })
                .catch(error => {
                    commit('setUser', {});
                });
        },
        drawerToggle ({ commit }) {
            commit('DRAWER_TOGGLE');
        }
    },
    mutations: {
        setUser (state, user) {
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
