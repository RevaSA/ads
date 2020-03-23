<template>
    <v-container>
        <v-row>
            <v-col sm="6" offset-sm="3">
                <h1 class="mb-3">Create new ad</h1>

                <v-form class="mb-3" ref="form" validation v-model="valid">
                    <v-text-field
                        type="text"
                        name="title"
                        label="Ad title"
                        v-model="title"
                        required
                        :rules="[v => !!v || 'Title is required']"
                    ></v-text-field>

                    <v-textarea
                        name="description"
                        label="Ad description"
                        rows="1"
                        v-model="description"
                        :rules="[v => !!v || 'Description is required']"
                    ></v-textarea>
                </v-form>

                <v-row class="mb-3">
                    <v-col>
                        <v-btn>
                            Upload
                            <v-icon right>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <img src="" height="100" alt="">
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-switch label="Add to promo?" v-model="promo"/>
                </v-row>

                <v-row no-gutters>
                    <v-btn class="ml-auto" @click="createAd" :loading="loading" :disabled="!valid || loading">Create ad</v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                valid: false,
                title: '',
                description: '',
                promo: false,
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
        },
        methods: {
            createAd() {
                if (!this.$refs.form.validate()) return

                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    imageSrc: 'https://vignette.wikia.nocookie.net/harrypotter/images/4/49/DementorConceptArt.jpg/revision/latest?cb=20150928152038',
                }

                this.$store.dispatch('createAd', ad)
                    .then(() => this.$router.push('/list'))
                    .catch(() => {})
            },
        },
    }
</script>
