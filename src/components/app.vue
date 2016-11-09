<template>
<div>
    <heade ></heade>
    <router-view keep-alive></router-view>
    <bot></bot>
    <load></load>
</div>
</template>
<script>
    import load from "./loading.vue"
    import heade from "./headTitle.vue" //头部
    import bot from "./bottom.vue"
    import api from '../model/api.js'
    export default {
        components:{
            heade ,bot,load  //若还有更多的组件，只需要在import的情况下，以逗号分割，继续注册就好
        },

    }
</script>
