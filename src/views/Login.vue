<template>
    <div class="login">
           <div class="form">
             <el-form class="el-form" label-width="80px" :model="formData" :rules="rules" ref="elForm" status-icon>
                   <el-header height="60px">Welecome Signin BackStage</el-header>
                    <el-form-item label="用户名" prop="username">
                        <el-input
                        placeholder="请输入用户名"
                        v-model="formData.username"
                        prefix-icon="el-icon-user"
                         />
                    </el-form-item>
                     <el-form-item label="密码" prop="password">
                        <el-input
                        placeholder="请输入密码"
                        v-model="formData.password"
                        prefix-icon="el-icon-lock"
                         />
                    </el-form-item>
                    <el-button type="primary" @click="submit('elForm')">登录</el-button>
                    <el-button type="warning" @click="reset">重置</el-button>
             </el-form>
             <div class="logo">
                 <img src="~assets/img/logo.png" alt="">
             </div>
            </div>
    </div>
</template>


<script>

export default {
    name: 'Login',
    data(){
      return {
          formData: {
              username: '',
              password: ''
          },
          rules: {
              username: [
                  {
                      required: true,
                      message: "请输入用户名",
                      trigger: "blur"
                  },
                  {
                      min: 4,
                      max: 8,
                      message: "用户名长度为4-8位",
                      trigger: "blur"
                  }
              ],
              password: [
                  {
                      required: true,
                      message: "请输入密码",
                      trigger: "blur"
                  },
                  {
                      min: 6,
                      max: 12,
                      message: "密码长度为6-12位",
                      trigger: "blur"
                  }
              ]
          }
      }
    },
    methods: {
        // 登录按钮
        submit(formName){
           
           // 表单验证成功会把验证结果传到state
          this.$refs[formName].validate(state => {

              // 正则通过发送请求
               if(state){

                this.$axios.get('/api/login',{params : this.formData})
                   .then(res => {
                       console.log(res);
                       // 登录成功
                       if(res.data.code === 1){
                            console.log("进入了登录成功");
                           window.sessionStorage.setItem('token',res.data.token)
                           this.$message.success(res.data.message)
                           this.$router.push('/home')
                       }else{
                           this.$message.error(res.data.message)
                       }

                       this.reset()
                   })
               }
          })
        },
        // 重置按钮
        reset(){
            this.formData.username = ''
            this.formData.password = ''
        }
    }
}
</script>


<style lang="scss" scoped>

.login{
    position: relative;
     height: 753px;
     background-image: url('https://z3.ax1x.com/2021/06/09/2ygm8S.jpg');
     background-size: cover;
     background-repeat: no-repeat;
     .form{
         position: relative;
          width: 500px;
          background-color: #fff;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #ddd;

          .el-form{
              text-align: center;
              .el-header{
                  line-height: 60px;
                  font-size: 20px;
                  font-weight: 600;
                  color: #409EFF;
                  font-family:"Hiragino Sans GB";
                  user-select: none;
              }

              .el-button{
                  font-size: 16px;
                  font-weight: 600;
              }
          }
     }


     .logo{
         width: 60px;
         height: 60px;
         position: absolute;
         left: -15px;
         top: -15px;
         background: #fff;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         box-shadow: 2px 2px 10px #eee;
         border: 1px solid #ddd;
         img{
             width: 70%;
             height:70%;
         }
     }
   }
</style>