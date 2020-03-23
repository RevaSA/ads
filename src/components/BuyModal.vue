<template>
    <v-dialog width="400px" v-model="modal">
        <template v-slot:activator="{ on }">
            <v-btn class="primary" v-on="on">Buy</v-btn>
        </template>

        <v-card>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card-title>
                            <h2>Do you wan't to buy it?</h2>
                        </v-card-title>
                    </v-col>
                </v-row>

                <v-divider/>

                <v-row>
                    <v-col>
                        <v-card-text>
                            <v-text-field type="text" name="name" label="Your name" v-model="name"/>
                            <v-text-field type="text" name="phone" label="Your phone" v-model="phone"/>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-divider/>

                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn text @click="onCancel" :disabled="localLoading">Close</v-btn>
                            <v-btn @click="onSave" :disabled="localLoading" :loading="localLoading">Buy it!</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: ['ad'],
        data() {
            return {
                modal: false,
                name: '',
                phone: '',
                localLoading: false,
            }
        },
        methods: {
            onCancel() {
                this.name = ''
                this.phone = ''
                this.modal = false
            },
            onSave() {
                if (this.name === '' || this.phone === '') return

                this.localLoading = true
                this.$store.dispatch('createOrder', {
                    name: this.name,
                    phone: this.phone,
                    adId: this.ad.id,
                    ownerId: this.ad.ownerId,
                })
                    .finally(() => {
                        this.localLoading = false
                        this.onCancel()
                    })
            },
        },
    }
</script>
