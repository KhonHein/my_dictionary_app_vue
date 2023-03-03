import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'PostDetail',
    data() {
        return {
            postId: 0,
            postDetails: {},
            postViwe: 0,
        }
    },
    computed: {
        ...mapGetters(['getStoreToken', 'getStoreUserData']),
    },
    methods: {
        postDetailLoad(id) {
            // need to be Object type
            let searchId = {
                postId: id
            };
            axios
                .post('http://helloshanni.khonhein.com/api/post/details', searchId)
                .then((response) => {

                    if (response.data.post.image != null) {
                        response.data.post.image = "http://helloshanni.khonhein.com/postImages/" + response.data.post.image;

                    } else {
                        response.data.post.image = "http://helloshanni.khonhein.com/defaultImage/defaultPost.jpg";
                    }

                    this.postDetails = response.data.post;
                    //console.log(this.postDetails);
                });
        },
        back() {
            history.back();
            // this.$router.push({
            //     name: 'homePage',
            // });
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
    },
    mounted() {
        let data = {
            postId: this.$route.query.postId,
            userId: this.getStoreUserData.id,
        }
        axios.post('http://helloshanni.khonhein.com/api/user/actionLog', data).then((response) => {
            this.postViwe = response.data.post.length;
        });
        this.postId = this.$route.query.postId;
        this.postDetailLoad(this.postId);
    }
}