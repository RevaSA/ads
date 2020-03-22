<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-img height="300" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"/>

                    <v-card-text>
                        <h1 class="text--primary">lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ipsa?</p>
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
        data: () => ({}),
    };
</script>
