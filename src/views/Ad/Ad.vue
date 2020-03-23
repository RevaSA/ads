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
                        <addEditAdModal v-if="isOwner" :ad="ad"></addEditAdModal>
                        <v-btn class="primary">Buy</v-btn>
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

    export default {
        props: ['id'],
        computed: {
            ad() {
                const { id } = this
                return this.$store.getters.adById(id)
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
        },
    }
</script>
