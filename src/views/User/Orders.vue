<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="mb-3">Orders</h1>

                <v-list subheader two-line>
                    <v-list-item v-for="order in orders" :key="order.id">
                        <v-list-item-action>
                            <v-checkbox
                                v-model="order.done"
                                @change="onChange(order)"
                            ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{order.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                orders: [
                    {
                        id: '0',
                        name: 'Stanislav',
                        phone: '8-921-121-12-12',
                        adId: '1',
                        done: false,
                    },
                    {
                        id: '1',
                        name: 'Stanislav',
                        phone: '8-921-121-12-12',
                        adId: '2',
                        done: true,
                    },
                ],
            }
        },
        methods: {
            onChange(order) {
                console.dir(order)
            },
        },
    }
</script>
