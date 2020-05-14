<template>
    <v-row align="center" justify="center">
        <v-col col="12" md="4" sm="6">
            <v-card>
                <v-card-title>Login</v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="credentials.username"
                        label="Usuario">
                    </v-text-field>
                    <v-text-field
                        label="Contraseña"
                        v-model="credentials.password"
                        :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
                        :type="showPassword ? 'text': 'password'"
                        @click:append="showPassword = !showPassword"
                        >
                    </v-text-field>
                    <v-btn color="primary" @click="login">Ingresar</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Login',
    data: () => ({
        showPassword: false,
        credentials: {
            username: '',
            password: '',
        }
    }),
    methods: {
        login() {
            console.log(this.credentials);
        }
    }
}
</script>
