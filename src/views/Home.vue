<template>
    <div>
        <v-container fluid pa-0>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="ad of ads"
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
        data() {
            return {
                ads: [
                    {
                        id: 0,
                        title: 'First title',
                        description: 'First description',
                        promo: false,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        id: 1,
                        title: 'Second title',
                        description: 'Second description',
                        promo: true,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        id: 2,
                        title: 'Third title',
                        description: 'Third description',
                        promo: true,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
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
