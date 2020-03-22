<template>
    <v-container>
        <v-row>
            <v-col sm="6" offset-sm="3">
                <h1 class="mb-3">My ads</h1>

                <v-card class="elevation-10 mb-3" v-for="ad in ads" :key="ad.id">
                    <v-row no-gutters>
                        <v-col cols="4">
                            <v-img height="160" :src="ad.imageSrc"/>
                        </v-col>

                        <v-col cols="8">
                            <v-card-text>
                                <h2 class="text--primary">{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer/>
                                <v-btn class="primary" :to="'/ad/' + ad.id">Open</v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        computed: {
            ads() {
                return this.$store.getters.myAds
            },
        },
    }
</script>
