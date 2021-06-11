<template>
    <el-row :gutter="24" class="el-row-header">
                    <!-- el-row 默认将屏幕width分割成24份 通过el-col的span来决定占多少比例 -->
                  <el-col :span="12">
                      <el-input placeholder="请输入内容" v-model="inputValue" clearable>
                           <el-button icon="el-icon-search" slot="append" @click="search(inputValue)"></el-button>
                      </el-input>
                   </el-col>

                   <el-col :span="4">
                      <el-button type="primary" class="addBtn" @click="isOpenDialog(true)">添加用户</el-button>
                   </el-col>

            <el-dialog :visible.sync="$store.state.openDialog" @close="cancel">
                <div slot="title">{{ $store.state.dialogTitle }}</div>
   
                <el-form :model="userform"  label-width="80px" :rules="rules" ref="userforms">
                    <el-form-item label="id" prop="id">
                        <el-input placeholder="请输入身份id" prefix-icon="el-icon-key" v-model.number="userform.id"/>
                    </el-form-item>
                    <el-form-item label="用户名" prop="UserName">
                        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="userform.UserName"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="Password">
                        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="userform.Password" 
                        :disabled="$store.state.formState=== 1 "/>
                    </el-form-item>
                    <el-form-item label="手机号" prop="Mobile">
                        <el-input placeholder="请输入手机号" prefix-icon="el-icon-mobile" v-model.number="userform.Mobile"/>
                    </el-form-item>
                    <el-form-item label="电子邮箱" prop="Email">
                        <el-input placeholder="请输入电子邮箱" prefix-icon="el-icon-message" v-model="userform.Email"/>
                    </el-form-item>
                    <el-form-item label="职位">
                        <el-input placeholder="请输入职位" prefix-icon="el-icon-suitcase" v-model="userform.RoleName"/>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-input placeholder="请输入状态" prefix-icon="el-icon-s-opportunity" :value="userState" />
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <el-input  prefix-icon="el-icon-alarm-clock"  v-model="formatTime" disabled/>
                    </el-form-item>
                </el-form>
                
                <div slot="footer" class="dialog-footer">
                   <el-button type="primary" @click="addUser" v-if="$store.state.formState === 0">确定</el-button>
                   <el-button type="primary"  v-else @click="updateUser">提交</el-button>
                   <el-button type="info" @click="cancel">取消</el-button>
                </div>
         </el-dialog>
                  
    </el-row>
</template>

<script>

import UserFormRules from './UserRules'

export default {
    name: "Header",
     data(){
         return {
             inputValue: '',
             openDialog: false,
             pageNum: null,
             pageSize: null,
             disposeData: null,
             rules: UserFormRules,
             userform: {
                  id: '',
                  UserName: '',
                  Password: '',
                  Mobile: '',
                  Email: '',
                  RoleName: '',
                  MgState: '' ,
                  CreateTime: ''
             }
         }
     },
     components: {
         
     },
     methods: {
         // 搜索框点击事件
        search(value){
              const searchData = this.$store.state.axiosList.filter(item => {
                    return item.UserName.includes(value)
              }) 
              this.$store.commit('userlistChange',searchData)
        },
        // 对话框取消按钮
        cancel(formname){
     
            this.isOpenDialog(false)
       
        },

        // 添加用户按钮
        addUser(){

            this.$refs.userforms.validate(async state => {
                if(state){
                   this.$message.success('数据添加成功~~~')

                     this.userform.CreateTime = this.formatTime

                    const res = await this.$axios.get('/api/user/add',{ params : this.userform })

                    this.$store.commit('axiosListChange',res.data.data)

                    this.isOpenDialog(false)
                    
                }else{
                    this.$message.error('数据格式错误，请重新输入')
                }
            })
           
            
        },
        // 打开/关闭 添加用户的对话框
        isOpenDialog(value,formState=0){
        
            this.$store.commit('openDialogChange',value)
            this.$store.commit('dialogStateChange',formState)

        },

        updateUser(){

            // this.userform.MgState = String(this.userform.MgState)
            this.$refs.userforms.validate(async state => {
                
                if(state){

                    const query = this.userform
                    const res =  await this.$axios.get('/api/user/update',{params:query})

                  if(res.status == 200){
                     
                      this.$message.success(res.data.message)
                      this.$store.commit('openDialogChange',false)
                      this.$store.commit('axiosListChange',res.data.data)
                  }
                } 
            })
            
           
          
       
               
         
        }
     },
      watch: {
            // 实时监听input输入的数据，根据改变列表数据
            inputValue(value){
               
                this.search(value)
                if(!value){ 
                   
                   this.disposeData(this.pageNum,this.pageSize)
                }
            }
      },
      created(){
          this.eventBus.$on('pageinfo',data => {

              this.pageNum = data.pageNum
              this.pageSize = data.pageSize
          })

          this.eventBus.$on('disposeData',data => {
              this.disposeData = data
          })

          this.eventBus.$on('userinfo',obj => {
              
              obj.id = Number(obj.id)
              obj.Mobile = Number(obj.Mobile)
              this.userform = obj
          })
      },
      computed: {

           formatTime(){
            const time = new Date().toLocaleString()
            const fulltime = time.replace(/\//g,'-')  
            return fulltime
        },

        userState(){
            return this.$store.state.formState === 1? 'true' : 'false'
        }
      }
}
</script>


<style scoped>
  .el-row-header{
      margin: 20px 0;
         }
</style>