<template>
    <v-app>
        <v-navigation-drawer app color="primary" absolute :value="drawerOpen" dark>
            <navigation></navigation>
        </v-navigation-drawer>

        <v-app-bar app color="yellow">
            <v-app-bar-nav-icon @click="drawerToggle"></v-app-bar-nav-icon>
            <v-toolbar-title>
                Financiera
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
import Navigation from '@/js/components/Navigation';
export default {
    components: {
        navigation: Navigation
    },
    computed: {
        drawerOpen () {
            return this.$store.state.drawerOpen;
        }
    },
    methods: {
        drawerToggle () {
            this.$store.dispatch('drawerToggle');
        }
    }
}
</script>
