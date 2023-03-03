import { createStore } from 'vuex'

export default createStore({
  state: {
    userData:{},
    token:'',
  },
  getters: {
    getStoreToken:state => state.token, // returns the token//  get ယူတာ
    getStoreUserData:state =>state.userData,
  },
  mutations: {
  },
  actions: {
    setToken:({state},value) => state.token = value, //arrow function parameter ထဲ့တာ
    setUserData:({state},value) => state.userData = value,
  },
  modules: {
  }
})
