<template>
    <el-header height="80px">
        <div class="header-main">
           <div class='logo'>
                <img src="~assets/img/logo.png" alt="">
           </div>
           <span class="header-text">Vue后台管理系统</span>
        </div>
     
        <div class="header-btn">
             <el-button type="danger" size="small" @click="signout">退出登录</el-button>
        </div>
    </el-header>
</template>


<script>
export default {
    name: "Header",
    methods: {
        signout(){
            window.sessionStorage.removeItem('token')
            this.$message.success('退出登录成功')
            this.$router.push('/login')
        }
    }
}
</script>


<style lang="scss" scoped>
   .el-header{
    //    background: #4f5555;
       background: #3e4145;
       display: flex;
       justify-content: space-evenly;
       align-items: center;

       .header-main{
            display: flex;
            align-items: center;
       .logo{
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #fff;
              box-shadow: 0px 0px 10px #eee;
              img{
                  width: 70%;
                  height: 70%;
               
              }
          }
       }

       .header-text{
           font-size: 22px;
           font-weight: 600;
           color: #fff;
           margin:0  20px;
       }

   }
</style>