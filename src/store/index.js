import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userlist:[],
    axiosList: []
  },
  mutations: {
    userlistChange(state,payload){
        
         state.userlist = payload
    },
    axiosListChange(state,payload){
     
         state.axiosList = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
