<template>
<div transition="page" class="page page-current detailPage">
      <template v-if="detail">
        <div class="top">
            <span class="back" @click="goback" ></span>
            <span class="blogTitle">{{detail.title}}</span>
        </div>
        <div class="blogDeatil" >
            {{{detail.blog}}}
        </div>
      </template>
    </div>
</template>
<script>
    import api from "../model/api.js"
    let models = new api()
    import localstore from "../model/store.js"
    let baseStore = new localstore()
    export default {
          data (){
              return {
                  isLoading:true,
                  detail:''
              }
          },
          route:{
              data (transition){
                  $('.fotTab').hide();
                  baseStore.saveFrom('detail',transition);
                  let did = transition.to.params.id;
                  this.getDetail(did)
              },
              deactivate(transition){
                //去掉滚动动作
                $('.fotTab').show()
                transition.next()
              }
          },
          methods:{
            getDetail(did){
              models.send('queryBlogDetail',{detailId:did},(d)=> {
                  if(d && d.data){
                      this.detail = d.data;
                  }
              })
            },
            goback(){
              let para = baseStore.getBack('detail');
              this.$route.router.go({'name':para.name})
            }
          }
    }
</script>
