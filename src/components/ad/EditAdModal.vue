<template>
    <v-dialog width="400px" v-model="modal">
        <template v-slot:activator="{ on }">
            <v-btn text class="warning" v-on="on">
                Edit
            </v-btn>
        </template>

        <v-card>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card-title class="pa-0">
                            <h1 class="text--primary">Edit ad</h1>
                        </v-card-title>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row>
                    <v-col>
                        <v-card-text class="pa-0">
                            <v-text-field type="text" name="title" label="Title" v-model="editedTitle"/>
                            <v-textarea name="description" label="Description" rows="1" v-model="editedDescription"/>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-card-actions class="pa-0">
                            <v-spacer></v-spacer>
                            <v-btn text @click="onCancel">Cancel</v-btn>
                            <v-btn text class="success" @click="onSave">Save</v-btn>
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
                editedDescription: this.ad.description,
                editedTitle: this.ad.title,
            }
        },
        methods: {
            onCancel() {
                this.editedDescription = this.ad.description
                this.editedTitle = this.ad.title
                this.modal = false
            },
            onSave() {
                if (this.editedDescription === '' || this.editedTitle === '') return

                this.$store.dispatch('updateAd', {
                    title: this.editedTitle,
                    description: this.editedDescription,
                    id: this.ad.id,
                })
                this.modal = false
            },
        },
    }
</script>
