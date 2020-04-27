<template>
    <v-container fluid class="pt-0">
        <v-row>
            <v-col cols=2>
                <v-container fluid>
                    <v-row>
                        <v-col>
                            <v-img :src="require('../assets/icon/profile.png')"></v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="text-center">
                        <v-col cols=12>
                            <v-list>
                                <v-list-item-group>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{ name }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Age: {{ age }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Applied: {{ jobsApplied }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Responded: {{ jobsResponded }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Rejected: {{ jobsRejected }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Ghosted: {{ jobsGhosted }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
            <v-col class="ma-0 pa-0">
                <v-divider vertical></v-divider>
            </v-col>
            <v-col cols=9>
                <v-container>
                    <v-row>
                        <v-col cols=12 class="text-center display-3">
                            Jobs
                        </v-col>
                        <v-col cols=3 v-for="(job, i) in jobs" :key="i">
                            <v-card elevation=8>
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols=12 class="title">
                                            {{ job.title }}
                                        </v-col>
                                        <v-col cols=12 class="subtitle-1">
                                            {{ job.company }}
                                        </v-col>
                                    </v-row>
                                    <v-row justify="space-between">
                                        <v-col cols=6>
                                            <v-btn block dark color="green">
                                                <v-icon left>mdi-file-outline</v-icon>Details
                                            </v-btn>
                                        </v-col>
                                        <v-col cols=6>
                                            <v-btn block dark color="blue">
                                                <v-icon left>mdi-pencil</v-icon>Edit
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols=12>
                                            <v-progress-linear :value="job.value" :color="job.color"></v-progress-linear>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                        <v-col cols=12>
                            <v-container>
                                <v-row>
                                    <v-col cols=6>
                                        <v-btn block large dark color="green">
                                            <v-icon left>mdi-plus</v-icon>Add New Job
                                        </v-btn>
                                    </v-col>
                                    <v-col cols=6>
                                        <v-btn block large dark color="blue">
                                            <v-icon left>mdi-pencil</v-icon>Edit Jobs
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed: {
        jobs() {
            return this.$store.state.jobs;
        }
    },
    data() {
        return {
            name: "AJ",
            age: "26",
            jobsApplied: 650,
            jobsResponded: 1,
            jobsRejected: 3,
            jobsGhosted: 647,
        }
    }
    
}
</script>

<style scoped>

</style>