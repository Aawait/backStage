<template>
    <div class="welcome">
        <el-header>
          <span class="title">Welcome to this vuejs Backstage Management System</span>
        </el-header>
         <div class="mainImg">
            <img src="https://z3.ax1x.com/2021/06/11/24P5LR.jpg" alt="">
         </div> 
    </div>
</template>


<script>
export default {
    name: "Welecome"
}
</script>


<style scoped>
 
 .welcome{
     background-color: #EBEEF5;
 }

  .welcome .el-header{
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .welcome .title{
        font-size: 22px;
        font-weight: 600;
        color: #409EFF;
  }

  .mainImg{
      width: 100%;
      height: 80vh;
      text-align: center
  }

  .mainImg img{
      width: 80%;
      height: 100%;
  }
</style>