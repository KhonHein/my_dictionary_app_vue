import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'loginPage',
    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            tokenStatus: false,
            loginStatus: true,
        }
    },
    computed: {
        ...mapGetters(['getStoreToken', 'getStoreUserData']),
    },
    methods: {
        home() {
            this.$router.push({
                name: 'homePage',
            });
        },
        login() {
            this.$router.push({
                name: 'loginPage',
            });
        },
        register() {
            this.$router.push({
                name: 'RegisterForm',
            });
        },
        loginAccount() {
            //console.log(this.userData);
            axios
                .post('http://helloshanni.khonhein.com/api/user/login', this.userData)
                .then((response) => {

                    if (response.data.status == true) {

                        this.loginStatus = true;
                        this.storeUserInfo(response);
                        this.home();
                    } else {
                        this.loginStatus = false;
                        this.login();
                    }

                    //this.postDetails = response.data.user;
                    //console.log(this.postDetails);
                }).catch((err) => console.log(err));
        },
        storeUserInfo(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch('setUserData', response.data.user);

        },
        checkToken() {
            console.log(this.getStoreToken);
            console.log(this.getStoreUserData);
        }
    },
    mounted() {
        // this.login();
        this.userData = {}
    }
}