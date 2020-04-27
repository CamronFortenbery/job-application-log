<template>
    <v-container>
        <v-row justify="center">
            <v-col cols=10>
                <v-card elevation=8>
                    <v-form>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols=8>
                                    <v-text-field type="email" label="Email" aria-placeholder="Email"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            msg: "This is the SignIn page"
        }
    }
}
</script>

<style scoped>

</style>