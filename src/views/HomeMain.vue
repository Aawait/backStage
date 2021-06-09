<template>
    <div class="content">
          <router-view :user-list="userList" />
    </div>
</template>


<script>


export default {
    name: 'HomeMain',
    data(){
        return {
             userList:[]
        }
    },
    created(){
        this.getUserList()
    },
    methods: {
        getUserList(){
            this.$axios.get('/api/user',{
                params: {
                  pageNum: 0,
                  pageSize: 10
               }
            })
            .then(res => {
                
                this.userList = res.data.sort((a,b) => {
                    return a.id - b.id
                })
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        flex: 1;
    }
</style>