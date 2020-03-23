<template>
    <v-container v-if="!loading && orders.length !== 0">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="mb-3">Orders</h1>

                <v-list two-line subheader>
                    <v-list-item v-for="order in orders" :key="order.id">
                        <v-list-item-action>
                            <v-checkbox v-model="order.done" @change="onChangeMark(order)"/>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{order.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>

    <v-container v-else-if="!loading" fill-height>
        <v-row align="center" justify="center" no-gutters>
            <h1>You have no orders</h1>
        </v-row>
    </v-container>

    <v-container v-else fill-height>
        <v-row align="center" justify="center" no-gutters>
            <v-progress-circular :size="100" :width="4" indeterminate color="purple"/>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        computed: {
            orders() {
                return this.$store.getters.orders
            },
            loading() {
                return this.$store.getters.loading
            },
        },
        methods: {
            onChangeMark(order) {
                this.$store.dispatch('changeMarkOrder', order)
                    .catch(() => {})
            },
        },
        created() {
            this.$store.dispatch('fetchOrders')
        },
    }
</script>
