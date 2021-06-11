import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userlist:[],
    axiosList: [],
    openDialog: false,
    formState: null,
    dialogTitle: '',
  },
  mutations: {
    // 打开或关闭添加用户操作框
    openDialogChange(state,bol){
  
      state.openDialog = bol
    },
    // 更改对话框的标题
    dialogStateChange(state,payload){
      if(payload === 0){
        state.formState = 0
        state.dialogTitle = '添加用户信息'
      }else{
        state.formState = 1
        state.dialogTitle = '修改用户信息'
      }
      
    },
    // 用户列表数据按分页显示
    userlistChange(state,payload){
        
         state.userlist = payload
    },

    // 请求得所有用户数据
    axiosListChange(state,payload){
     
         state.axiosList = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
