<template>
    <v-app>
        <v-navigation-drawer app temporary/>

        <v-app-bar app dark>
            <v-app-bar-nav-icon/>
            <v-toolbar-title>Ad application</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn text>Link</v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>
