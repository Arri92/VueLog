import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const state = {
    usersName: "TEST",
    usersPass: "TEST",
    isLog: false
  }
  const  mutations = {
   SET_USER_NAME(state, payload) {
   state.usersName = payload
},
   SET_USER_NAME_OUT(state, payload) {
   state.usersName = payload
}
  }
  const actions = {
    setLogged(context, payload){
      context.commit("SET_USER_NAME", payload)
    },
    setLogout(context, payload){
      context.commit("SET_USER_NAME_OUT", payload)
  }
}
 const getters = {
   getUsersName: state => state.usersName,
   getUsersPass: state => state.usersPass
 }
export default new Vuex.Store({
  state,mutations,actions,getters
})