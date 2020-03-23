<template>
    <v-app>
        <v-navigation-drawer app temporary v-model="drawer">
            <v-list>
                <v-list-item v-for="link in navLinks" :key="link.title" :to="link.url">
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"/>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item v-if="isUserLogged" @click="onLogoutUser">
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
            <v-toolbar-title>
                <router-link to="/" class="v-toolbar__link-home">Ad application</router-link>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text v-for="link in navLinks" :key="link.title" :to="link.url">
                    <v-icon left>{{ link.icon }}</v-icon> {{ link.title }}
                </v-btn>

                <v-btn text v-if="isUserLogged" @click="onLogoutUser">
                    <v-icon left>mdi-exit-to-app</v-icon> Logout
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>

        <template v-if="error">
            <v-snackbar
                :timeout="5000"
                :multi-line="true"
                :value="true"
            >
                {{ error }}
                <v-btn @click="closeSnackbar">Close</v-btn>
            </v-snackbar>
        </template>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
        }),
        computed: {
            error() {
                return this.$store.getters.error
            },
            isUserLogged() {
                return this.$store.getters.isUserLogged
            },
            navLinks() {
                if (this.isUserLogged) {
                    return [
                        {
                            title: 'Orders',
                            icon: 'mdi-bookmark',
                            url: '/orders',
                        },
                        {
                            title: 'New ad',
                            icon: 'mdi-note',
                            url: '/new',
                        },
                        {
                            title: 'My ads',
                            icon: 'mdi-format-list-bulleted',
                            url: '/list',
                        },
                    ]
                }

                return [
                    {
                        title: 'Login',
                        icon: 'mdi-lock',
                        url: '/login',
                    },
                    {
                        title: 'Registration',
                        icon: 'mdi-face',
                        url: '/registration',
                    },
                ]
            },
        },
        methods: {
            onLogoutUser() {
                this.$store.dispatch('logoutUser')

                if (this.$route.path !== '/') {
                    this.$router.push('/')
                }
            },
            closeSnackbar() {
                this.$store.dispatch('clearError')
            },
        },
    }
</script>

<style lang="less">
    .v-toolbar {
        &__link-home {
            text-decoration: none;
        }
    }
</style>
