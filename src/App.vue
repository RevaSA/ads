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
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
            <v-toolbar-title>Ad application</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text v-for="link in navLinks" :key="link.title" :to="link.url">
                    <v-icon left>{{ link.icon }}</v-icon> {{ link.title }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            navLinks: [
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
            ],
        }),
        created() {
            this.$vuetify.theme.dark = true
        },
    }
</script>
