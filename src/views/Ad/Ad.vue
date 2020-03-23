<template>
    <v-container v-if="!loading">
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
                        <add-edit-ad-modal v-if="isOwner" :ad="ad"/>
                        <buy-modal :ad="ad"/>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container v-else fill-height>
        <v-row align="center" justify="center" no-gutters>
            <v-progress-circular :size="100" :width="4" indeterminate color="purple"/>
        </v-row>
    </v-container>
</template>

<script>
    import EditAdModal from '@/components/ad/EditAdModal'
    import BuyModal from '@/components/BuyModal'

    export default {
        props: ['id'],
        computed: {
            ad() {
                return this.$store.getters.adById(this.id)
            },
            loading() {
                return this.$store.getters.loading
            },
            isOwner() {
                return this.ad.ownerId === this.$store.getters.user.id
            },
        },
        components: {
            addEditAdModal: EditAdModal,
            BuyModal,
        },
    }
</script>
