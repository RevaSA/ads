<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-img height="300" :src="ad.imageSrc"/>

                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn>Edit</v-btn>
                        <v-btn class="primary">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            ad() {
                return this.$store.getters.adById(this.id)
            },
        },
    };
</script>
