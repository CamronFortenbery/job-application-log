<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col class="pa-0">
                <div height=100%>
                    <v-img :src="require('../assets/img/login.jpg')">  
                    <v-row justify="end" class="pr-12 pt-12">
                        <v-col cols=5>
                            <v-card elevation=8>
                                <v-row justify="center">
                                    <v-col cols=8 class="titleFont">
                                        Sign in
                                    </v-col>
                                </v-row>
                                <v-row justify="center">
                                    <v-col cols=8 >
                                        New user? <a href="https://www.w3schools.com">Create an account</a>
                                    </v-col>
                                </v-row>
                                <v-form>
                                    <v-container>
                                        <v-row justify="center">
                                            <v-col cols=8 class="pb-0">
                                                <v-text-field type="email" label="Email" placeholder="email" v-model="username"></v-text-field>                 
                                            </v-col>
                                        </v-row>
                                    </v-container>   
                                    <v-container>
                                        <v-row justify="center">
                                            <v-col cols=8 class="pt-0">
                                                <v-text-field type="password" label="Password" placeholder="password" v-model="password"></v-text-field>                 
                                            </v-col>
                                        </v-row>
                                    </v-container>   
                                </v-form>                              
                                    <v-row justify="end">
                                        <v-col cols=5>
                                            <v-btn v-if="username != '' && password != ''" rounded color="success" class="white--text" @click="adminCheck">
                                                Continue
                                            </v-btn>
                                            <v-btn v-else rounded disabled>
                                                Continue
                                            </v-btn>
                                        </v-col>
                                    </v-row>                                                             
                            </v-card>               
                        </v-col>
                    </v-row>
                </v-img>            
                </div>
                
            </v-col>
        </v-row>        
    </v-container>
</template>

<script>
export default {
    computed: {
        username: {
            get() {
                return this.$store.state.user.username;
            },
            set(val) {
                this.$store.commit("changeUsername", val)
            }           
        },
        password: {
            get() {
                return this.$store.state.user.password;
            },
            set(val) {
                this.$store.commit("changePassword", val)
            }           
        }

    },
    data() {
        return {
            msg: "This is the SignIn page"
        }
    },
    methods: {
        adminCheck() {
            if (this.$store.state.user.username == this.$store.state.admin.username && this.$store.state.user.password == this.$store.state.admin.password) {
                this.$store.commit("changeLoggedIn");
            }
        },
    }

}
</script>

<style scoped>
    .titleFont {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif !important;
        font-size: 3rem;
    }
</style>