<template>
    <div  class="head" @click="goToSearch">
        <div class="innnerInput">
            <input type="text"   readonly  placeholder="点击搜索站内文章" class="search">
        </div>
    </div>
</template>
<script>

    export default {//这里是官方的写法，默认导出，ES6

        methods :{
            goToSearch () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({name:"list"});
            }
        }

    }
</script>
