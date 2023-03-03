import { mapGetters } from "vuex"
import axios from "axios";
export default {
    name: 'RegisterForm',
    data() {
        return {
            userData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            tokenStatus: false,
            loginStatus: true,
        }
    },
    computed: {
        ...mapGetters(['getStoreToken', 'getStoreUserData']),
    },
    methods: {
        storeUserInfo(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch('setUserData', response.data.user);

        },
        home() {
            this.$router.push({
                name: 'homePage',
            });
        },
        register() {
            this.$router.push({
                name: 'RegisterForm',
            });
        },
        registerAccount() {
            if (this.userData.password == this.userData.confirmPassword) {
                axios
                    .post('http://helloshanni.khonhein.com/api/user/register', this.userData)
                    .then((response) => {

                        if (response.data.status == true) {

                            this.loginStatus = true;
                            this.storeUserInfo(response);
                            this.home();
                        } else {
                            this.loginStatus = false;
                            this.register();
                        }

                        //this.postDetails = response.data.user;
                        //console.log(this.postDetails);
                    }).catch((err) => console.log(err));
            } else {
                this.loginStatus = false;
                this.register();
            }

        },
    },
    mounted() {
        this.userData = {}
    }
}