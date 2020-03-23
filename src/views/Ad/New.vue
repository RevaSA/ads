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
                        <v-btn @click="triggerUpload">
                            Upload
                            <v-icon right>mdi-cloud-upload</v-icon>
                        </v-btn>

                        <input type="file" accept="image/*" ref="fileInput" @change="onFileChange">
                    </v-col>
                </v-row>

                <v-row v-if="imageSrc">
                    <v-col>
                        <img :src="imageSrc" height="100">
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-switch label="Add to promo?" v-model="promo"/>
                </v-row>

                <v-row no-gutters>
                    <v-btn class="ml-auto" @click="createAd" :loading="loading" :disabled="!valid || !image || loading">Create ad</v-btn>
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
                image: null,
                imageSrc: '',
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
        },
        methods: {
            createAd() {
                if (!this.$refs.form.validate() || !this.image) return

                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image,
                }

                this.$store.dispatch('createAd', ad)
                    .then(() => this.$router.push('/list'))
                    .catch(() => {})
            },
            triggerUpload() {
                this.$refs.fileInput.click()
            },
            onFileChange(event) {
                const file = event.target.files[0]
                const reader = new FileReader()

                reader.onload = () => { this.imageSrc = reader.result }
                reader.readAsDataURL(file)
                this.image = file
            },
        },
    }
</script>

<style scoped>
    input[type=file] {
        display: none;
    }
</style>
