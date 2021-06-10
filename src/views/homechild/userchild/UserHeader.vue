<template>
    <el-row :gutter="24" class="el-row-header">
                    <!-- el-row 默认将屏幕width分割成24份 通过el-col的span来决定占多少比例 -->
                  <el-col :span="12">
                      <el-input placeholder="请输入内容" v-model="inputValue" clearable>
                           <el-button icon="el-icon-search" slot="append" @click="search(inputValue)"></el-button>
                      </el-input>
                   </el-col>

                   <el-col :span="4">
                      <el-button type="primary" class="addBtn" @click="openDialog=true">添加用户</el-button>
                   </el-col>
                   <el-dialog :visible.sync="openDialog" center @close="cancel">
                        <div slot="title">添加用户信息</div>
                       <AddUserForm ref="userform" />
                       <div slot="footer">
                          <el-button type="primary">确定</el-button>
                          <el-button type="info" @click="cancel">取消</el-button>
                       </div>
                   </el-dialog>
              </el-row>
</template>

<script>
import AddUserForm from 'views/homechild/userchild/AddUser'

export default {
    name: "Header",
     data(){
         return {
             inputValue: '',
             openDialog: false,
             pageNum: null,
             pageSize: null,
             disposeData: null
         }
     },
     components: {
         AddUserForm
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
        cancel(){
            this.openDialog = false
            // 获取子组件的form表单 关闭对话框后清空表单双向绑定内容
            const sonForm = this.$refs.userform.addUserForm
            for(let key in sonForm){
                  sonForm[key] = ''
            }
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
      }
}
</script>


<style scoped>
  .el-row-header{
      margin: 20px 0;
         }
</style>