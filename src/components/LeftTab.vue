<template>
        <el-aside :width="countWidth">
           <el-menu
           background-color="#545c64"
           text-color="#fff"
           default-active="0"
           :router="true"
           :unique-opened="true"
           :collapse ="isCollspan"
           >
           <div class="tabBtn">
                <el-button :icon="btnIcon" size="mini" type="primary" @click="isCollspan = !isCollspan"/>
           </div>

              <el-submenu 
              :index="String(item.id)" 
              v-for="item in tabList" 
              :key="item.id" 
              >
              <!-- 组件点击事件无效可以通过@click.native 来实现点击事件 -->
                   <div slot="title"  :class="{active: isActive === item.id}" @click="changeIndex(item.id)" >
                       <i :class="item.icon"></i>
                       <span>{{ item.name }}</span>
                   </div>
                   <el-menu-item :index="sonItem.path" v-for="sonItem in item.child" :key="sonItem.id">
                       <i :class="sonItem.icon"></i>
                      <span> {{ sonItem.name }} </span>
                       </el-menu-item>
              </el-submenu>
  
           </el-menu>
     </el-aside>

</template>


<script>

export default {
    name: 'LeftTab',
    props: {
        tabList: {
            type : Array,
            default(){
                return  []
            }
        }
    },
    data(){
        return {
            isCollspan: true,
            isActive: 0
        }
    },
    methods: {
        // 高亮索引
        changeIndex(i){
            this.isActive = i
        }
    },
    computed: {
       btnIcon(){
           return this.isCollspan ? "el-icon-s-unfold" : "el-icon-s-fold"
       },
       countWidth(){
           return this.isCollspan ? "60px" : "200px"
       }
    }
}
</script>


<style lang="scss" scoped>

  .el-aside{
      height: 100%;
      background: #545c64;
      transition: all .5s ease;
      overflow: hidden;
    .el-menu{
        border: none;
        .tabBtn{
            margin: 10px 0;
            text-align: right; 
            padding-right: 10px; 
           .el-button{
               font-size: 18px;
               color: #fff;
           }
        }
        .el-submenu{
            user-select: none;
        }
    }

    .active i,.active span{
        color: #ffd04b;
    }
    
    

  }

</style>