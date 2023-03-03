import axios from "axios";
import router from './../router/index';
import { mapGetters } from "vuex";
export default {
    name: 'HomePage',
    data() {
        return {
            postsList: {},
            categoriesList: {},
            searchKey: "",
            tokenStatus: false,
            userRole: '',
        };
    },
    computed: {
        ...mapGetters(['getStoreToken', 'getStoreUserData']),
    },
    methods: {
        getAllPosts() {
            axios.get('http://helloshanni.khonhein.com/api/allPost').then((response) => {

                for (let i = 0; i < response.data.post.length; i++) {
                    if (response.data.post[i].image != null) {
                        response.data.post[i].image = "http://helloshanni.khonhein.com/postImages/" + response.data.post[i].image;

                    } else {
                        response.data.post[i].image = "http://helloshanni.khonhein.com/defaultImage/defaultPost.jpg";

                    }
                }
                this.postsList = response.data.post;
            }).catch((e) => {
                console.log(e)
            });
        },
        loadCategories() {
            axios
                .get('http://helloshanni.khonhein.com/api/allCategories')
                .then((response) => {
                    //console.log(response.data.categories);
                    this.categoriesList = response.data.categories;

                })
                .catch((e) => {
                    console.log(e)
                });
        },
        searchPost() {
            // need to be Object type
            let search = {
                key: this.searchKey
            };
            axios
                .post('http://helloshanni.khonhein.com/api/post/search', search)
                .then((response) => {
                    for (let i = 0; i < response.data.searchData.length; i++) {
                        if (response.data.searchData[i].image != null) {
                            response.data.searchData[i].image = "http://helloshanni.khonhein.com/postImages/" + response.data.searchData[i].image;

                        } else {
                            response.data.searchData[i].image = "http://helloshanni.khonhein.com/defaultImage/defaultPost.jpg";
                        }
                    }
                    this.postsList = response.data.searchData;
                    //console.log(response.data);
                });
        },
        categorySearch(categoryKey) {
            //console.log(categoryKey);
            let search = {
                key: categoryKey
            };
            axios
                .post('http://helloshanni.khonhein.com/api/user/categorySearch', search)
                .then((response) => {
                    for (let i = 0; i < response.data.result.length; i++) {
                        if (response.data.result[i].image != null) {
                            response.data.result[i].image = "http://helloshanni.khonhein.com/postImages/" + response.data.result[i].image;

                        } else {
                            response.data.result[i].image = "http://helloshanni.khonhein.com/defaultImage/defaultPost.jpg";
                        }
                    }
                    this.postsList = response.data.result;
                    //console.log(response.data);
                }).catch((e) => {
                    console.log(e)
                });
        },
        postDetail(id) {
            //console.log(id);
            this.$router.push({
                name: 'PostDetail',
                query: { postId: id },
            });
        },
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
        logout() {
            this.$store.dispatch('setToken', null);
            this.login();
        },
        checkUserToken() {
            if (this.getStoreToken != null && this.getStoreToken !== undefined && this.getStoreToken != false) {
                this.tokenStatus = true;
                this.userRole = this.getStoreUserData.role;
            } else {
                this.tokenStatus = false;
            }
        }
    },
    mounted() {
        this.checkUserToken();
        this.getAllPosts();
        this.loadCategories();
    },
};