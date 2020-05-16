<template>
    <v-row align="center" justify="center">
        <v-col col="12" md="4" sm="6">
            <v-card>
                <v-card-title>Login</v-card-title>
                <v-card-text>
                    <v-text-field
                        prepend-icon="mdi-account"
                        v-model="credentials.email"
                        label="Correo Electrónico">
                    </v-text-field>
                    <v-text-field
                        label="Contraseña"
                        v-model="credentials.password"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
                        :type="showPassword ? 'text': 'password'"
                        @click:append="showPassword = !showPassword"
                        >
                    </v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="login" text>Ingresar</v-btn>
                </v-card-actions>
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
            email: 'admin@app.com',
            password: 'password',
        }
    }),
    methods: {
        login() {
            this.$store.dispatch('login', this.credentials);
            // return this.$router.push("/");
        }
    }
}
</script>
