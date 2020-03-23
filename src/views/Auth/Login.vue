<template>
    <v-container fill-height>
        <v-row align="center" justify="center" no-gutters>
            <v-col cols="11" sm="8" md="6" xl="4">
                <v-card class="elevation-12">
                    <v-toolbar dark>
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-form ref="form" validation v-model="valid">
                            <v-text-field
                                type="text"
                                name="email"
                                label="Email"
                                prepend-icon="mdi-account"
                                v-model="email"
                                :rules="emailRules"
                            />

                            <v-text-field
                                type="password"
                                name="password"
                                label="Password"
                                prepend-icon="mdi-lock"
                                v-model="password"
                                :rules="passwordRules"
                            />

                            <v-row no-gutters>
                                <v-spacer/>
                                <v-btn @click="onSubmit" :loading="loading" :disabled="!valid || loading">Login</v-btn>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be equals or more than 6 characters',
            ],
        }),
        computed: {
            loading() {
                return this.$store.getters.loading
            },
        },
        methods: {
            onSubmit() {
                if (!this.$refs.form.validate()) return

                const user = {
                    email: this.email,
                    password: this.password,
                }

                this.$store.dispatch('loginUser', user)
                    .then(() => this.$router.push('/'))
                    .catch(() => {})
            },
        },
        created() {
            if (this.$route.query.loginError) {
                this.$store.dispatch('setError', 'Please log in to access this page')
            }
        },
    };
</script>
