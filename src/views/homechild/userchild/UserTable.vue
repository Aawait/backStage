<template>

    <el-row :gutter="24" class="el-row-table">
                <el-col :span="22">
                    <el-table :stripe="true" :data="$store.state.userlist">
                         <el-table-column label="序号" width="80px" type="index"></el-table-column>
                         <el-table-column label="用户名" width="100px" prop="UserName"></el-table-column>
                         <el-table-column label="手机" width="180px" prop="Mobile"></el-table-column>
                         <el-table-column label="邮箱" width="180px" prop="Email"></el-table-column>
                         <el-table-column label="角色" width="100px" prop="RoleName"></el-table-column>
                         <el-table-column label="状态" width="80px" prop="MgState">
                               <!-- 引用子组件插槽传递的数据 -->
                              <template slot-scope="isSwitch">      
                                <el-switch 
                                v-model="isSwitch.row.MgState"
                                @change="changeSwitch(isSwitch.row)"
                                ></el-switch>
                              </template>
                         </el-table-column>
                         <el-table-column label="操作" width="150px">
                             <template slot-scope="current">
                               <el-button type="success" size="mini" @click="upData(current.row)">修改</el-button>
                               <el-button type="danger" size="mini" @click="removeData(current.row.id)">删除</el-button>
                               </template>
                         </el-table-column>
                         <el-table-column label="创建时间" width="200px" prop="CreateTime"></el-table-column>
                    </el-table>
                </el-col>

                 <el-col :span="16">
                      <el-pagination
                      background
                      @size-change="sizeChange"
                      @current-change="currentChange"
                      layout="prev,pager,sizes,next,jumper,->,total"
                      :page-sizes="[3,5,8,10]"
                      :page-size ="pageSize"
                      :total="this.$store.state.axiosList.length">
                      </el-pagination>
                   </el-col>
              </el-row>
</template>


<script>

export default {
     name: "UserTable",
     props: [],
     data(){
         return {
               axiosList: [],
               pageNum: 1,
               pageSize: 3,
               isSwitch: false,
               currentUser: null
         }
     } ,
     created(){
           this.getUserList()
           this.disposeData(this.pageNum,this.pageSize)

           // 发送事件传递页码数据
           this.eventBus.$emit('pageinfo',{pageNum:this.pageNum, pageSize:this.pageSize})
           this.eventBus.$emit('disposeData',this.disposeData)
     },
     methods: {
          // 网络请求数据
          getUserList(){
            this.$axios.get('/api/user')
            .then(res => {
              
                // const axiosList = res.data.data.sort((a,b) => {
                //     return a.id - b.id
                // })
                this.$store.commit('axiosListChange',res.data.data)

                const userlist = res.data.data.slice(0,this.pageSize)
                this.$store.commit('userlistChange',userlist)
                
            })
        },

          // 修改switch的状态
        changeSwitch(isSwitch){
             
            this.$message.success(isSwitch.UserName + " 的状态修改为" + " " + isSwitch.MgState)
        },

         // 处理数据
        disposeData(pageNum,pageSize){
            
            const statrIndex = (pageNum-1)*pageSize
            const endIndex = pageNum * pageSize
            const userlist = this.$store.state.axiosList.slice(statrIndex,endIndex)
            this.$store.commit('userlistChange',userlist)
        },

        // size显示改变,改变每页显示多少条数据,会把点击的当页显示数量传递过来
        sizeChange(size){
              // 将传递过来的数据一页显示多少条数据保存下来，再筛选数组重新改变数据
             this.pageSize = size
             this.disposeData(this.pageNum,this.pageSize)

              // 发送事件传递页码数据
             this.eventBus.$emit('pageinfo',{pageNum:this.pageNum, pageSize:this.pageSize})
        },

         // 页码改变  页码改变时会把具体的页数传递过来,再次截取数据
        currentChange(current){
            this.pageNum = current
            this.disposeData(this.pageNum,this.pageSize)

            // 发送事件传递页码数据
           this.eventBus.$emit('pageinfo',{pageNum:this.pageNum, pageSize:this.pageSize})

        },
        // 修改用户数据按钮
        upData(current){
           
            this.$store.commit('openDialogChange',true)
            this.$store.commit('dialogStateChange',1)
            
            this.eventBus.$emit('userinfo',current)
        },

        // 删除用户数据
       removeData(userid){
           
            this.$confirm("此操作将永久删除用户，是否继续？","提示",{
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
            .then(async res => {
              let result  = await this.$axios.get('/api/user/remove',{params:{userid}})
                if(result.data.status == 200){
                    this.$store.commit('axiosListChange',result.data.data)

                    const userlist = result.data.data.slice(0,this.pageSize)
                    this.$store.commit('userlistChange',userlist)
                }

                this.$message.success("删除用户成功")
            })
            .catch(err => {
                this.$message.info("算了算了")
            })

          



           
        }
     }
}
</script>


<style lang="scss" scoped>
  .el-pagination{
     margin: 30px 0;
         }
</style>