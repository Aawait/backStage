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
          <el-card class="box-card" shadow="alawys">

              <user-header />
              <user-table  />
              
          </el-card>
        </el-container>
    </div>
</template>

<script>

import UserHeader from 'views/homechild/userchild/UserHeader'
import UserTable from 'views/homechild/userchild/UserTable'


export default {
      name: "Users",
      props: {},
      components: {
            UserHeader,
            UserTable
      },
     
}
</script>

<style lang="scss" scoped>
     .el-container{
           
           .el-header{
                display: flex;
                align-items: center;
           }
           
     }
</style>