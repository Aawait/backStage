<template>
    <div class="users">
        <el-container>
             <!-- 顶部面包屑 -->
            <el-header>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                   <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
                   <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                   <el-breadcrumb-item>用户列表</el-breadcrumb-item>
              </el-breadcrumb>
            </el-header>
            
            <!-- 卡片区域内容 -->
            <el-card class="box-card">
                <el-header>
                      <el-input placeholder="请输入内容">
                           <el-button icon="el-icon-search" slot="append"></el-button>
                      </el-input>
                     
                      <el-button type="primary" class="addBtn">添加用户</el-button>
                </el-header>
                <el-table :stripe="true" :data="userList" style="width:100%">
                     <el-table-column label="序号" width="80px" prop="id"></el-table-column>
                     <el-table-column label="用户名" width="100px" prop="UserName"></el-table-column>
                     <el-table-column label="手机" width="180px" prop="Mobile"></el-table-column>
                     <el-table-column label="邮箱" width="180px" prop="Email"></el-table-column>
                     <el-table-column label="角色" width="80px" prop="RoleName"></el-table-column>
                     <el-table-column label="状态" width="80px" prop="MgState"></el-table-column>
                     <el-table-column label="操作" width="80px" prop="CreateTime"></el-table-column>
                </el-table>
             </el-card>
        </el-container>
    </div>
</template>

<script>

export default {
      name: "Users",
      props: {
            userList: {
                  type: Array,
                  default(){
                        return []
                  }
            }
      },
      created(){
           
      } ,
      methods: {
         
      }
}
</script>

<style lang="scss" scoped>
     .el-container{
           background: #E4E7ED;
           .el-header{
                display: flex;
                align-items: center;
           }

           .box-card{
                 background: #fff;
                 .el-header{
                       width: 700px;
                 }

                 .addBtn{
                       margin-left:50px;
                 }

                 .el-table{
                       width: 100%;
                       .el-table__row{
                             width: 100%;
                       }
                 }

           }
     }
</style>