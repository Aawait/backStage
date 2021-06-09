<template>
    <div id="home">
           <Header />
        <div class="main">
           <LeftTab :tabList="tabData" />
           <HomeMain />
        </div>
    </div> 
</template>

<script>

import Header from 'components/Header'
import LeftTab from 'components/LeftTab'
import HomeMain from 'views/HomeMain'
export default {
    name: 'Home',
    components: {
       Header,
       LeftTab,
       HomeMain
    },
    data(){
        return {
            tabData: []
        }
    },
    created(){
      this.getTabData()
    },
    methods: {
        // 网络请求数据
        getTabData(){
            this.$axios.get('/api/menu')
            .then(res => {

                this.tabData = res.data.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
  #home{
      height: 100vh;
      display: flex;
      flex-direction: column;

      .main{
          flex: 1;
          display: flex;
      }
  }
</style>