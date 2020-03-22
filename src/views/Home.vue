<template>
    <div>
        <v-container fluid pa-0>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="ad of promoAds"
                            :key="ad.id"
                            :src="ad.imageSrc"
                        >
                            <div class="v-responsive__link">
                                <v-btn class="primary" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
                    <v-card>
                        <v-img height="200" :src="ad.imageSrc"/>
                        <v-card-title>
                            <div>
                                <h3 class="headline">{{ad.title}}</h3>
                                <p>{{ad.description}}</p>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer/>
                            <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raised class="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        computed: {
            ads() {
                return this.$store.getters.ads
            },
            promoAds() {
                return this.$store.getters.promoAds
            },
        },
    };
</script>

<style lang="less">
    .v-responsive {
        &__link {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            background: rgba(0, 0, 0, .3);
        }
    }
</style>
