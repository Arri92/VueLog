import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const state = {
    usersName: "TEST",
    usserPassword : "TEST",
    isLog: false
  }
  const  mutations = {
   SET_USER_NAME(state, payload) {
   state.usersName = payload
},
  
  }
  const actions = {
    setLogged(context, payload){
      context.commit("SET_USER_NAME", payload)
    }
}
 const getters = {
   getUsersName: state => state.usersName,
   getUsersPassword: state => state.ussersPassword 
 }
export default new Vuex.Store({
  state,mutations,actions,getters
})