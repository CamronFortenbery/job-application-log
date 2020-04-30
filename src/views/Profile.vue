<template>
    <v-container fluid class="pt-0">
        <v-row justify="space-around">
            <!-- Side Profile Details -->
            <v-col md=2>
                <v-container fluid>
                    <v-row justify="center">
                        <v-col cols=6 md=12>
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
            <v-divider class="d-none d-md-flex" vertical></v-divider>
            <v-divider class="d-flex d-md-none"></v-divider>
            <!-- <v-col md=1 class="ma-0 pa-0 d-none d-md-flex" no-gutters>
                <v-divider vertical></v-divider>
            </v-col> -->

            <!-- <v-col cols=12 class="d-flex d-md-none">
                <v-divider></v-divider>
            </v-col> -->
            <!-- Jobs Grid -->
            <v-col cols=12 md=9>
                <v-container>
                    <v-row justify="center">
                        <v-col cols=12 class="text-center display-3">
                            Jobs
                        </v-col>
                        <v-col cols=12 md=3 v-for="(job, i) in jobs" :key="i">
                            <v-card elevation=8>
                                <v-container>
                                    <v-row justify="center">
                                        <v-col cols=12 class="title">
                                            {{ job.title }}
                                        </v-col>
                                        <v-col cols=12 class="caption">
                                            Applied on: {{job.dateApplied}}
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
                                        <v-col cols=12 class="body-1 font-weight-bold text-center">
                                            <span v-if="job.status == 'Rejected'" class="red--text">Rejected <span class="emoji-size">&#x1F62D;</span></span>
                                            <span v-if="ghosted(job.dateApplied) && job.status != 'Rejected'" class="orange--text">Ghosted <span class="emoji-size">&#x1F47B;</span></span>
                                            <span v-if="!ghosted(job.dateApplied) && job.status != 'Rejected'" class="blue--text">Pending</span>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                        <v-col cols=12>
                            <v-container>
                                <v-row>
                                    <v-col cols=12 md=6>
                                        <v-btn block large dark color="green">
                                            <v-icon left>mdi-plus</v-icon>Add New Job
                                        </v-btn>
                                    </v-col>
                                    <v-col cols=12 md=6>
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
    },
    methods: {
        ghosted(d) {
            // Make the parameter date a date object
            let ogDate = new Date(d);
            // Create a new date that is 60 days from the OG date to determine
            let ghostDate = new Date(ogDate.getFullYear(), ogDate.getMonth(), (ogDate.getDate() + 60))
            // Get todays date
            let today = new Date();

            if (today >= ghostDate) {
                return true;
            } else {
                return false;
            }

        }
    }
    
}
</script>

<style scoped>
.emoji-size {
    font-size: 3rem;
}

</style>