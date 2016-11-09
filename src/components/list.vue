<template>
  <div class="main">
      <ul class="listUl">
          <li  :class="{'select': tab == item.id } " v-for="item in classify"  @click="changeTab(item.id)" >
              {{item.name}}
          </li>
      </ul>
      <ul id="proList">
        <template v-for="item in list">
          <li class="hotlist"  @click="gotoDetail(item._id)">
              <div class="title">{{item.title}}</div>
              <div class="info">
                  <span class="author">作者：{{item.user}}</span>
                  <span class="read">点击量：{{item.sum}}</span>
              </div>
          </li>
        </template>
        <div class="nomore" v-show="list.length && allLoad"> 没有更多结果了 </div>
      </ul>
      <div v-show="allLoad && !list.length" class="noresult">
        暂无相关内容
      </div>
  </div>
</template>
<script>
    import api from "../model/api.js"
    let models = new api()
    export default {
        data (){
            return {
                //分类
                classify:[
                    {name:'全部',id:0},
                    {name:'随笔',id:1},
                    {name:'JavaScript',id:2},
                    {name:'NodeJS',id:3},
                    {name:'MongoDB',id:4},
                    {name:'游记',id:5},
                    {name:'Ejs',id:6},
                    {name:'CSS',id:7},
                    {name:'HTML',id:8}
                ],
                tab:0,
                pageIndex:1,
                pageSize:10,
                list:[],
                busy:true,//滚动延迟
                allLoad:false
            }
        },
        route:{
          activate(transition){
            this.init();
            transition.next()
          },
          deactivate(transition){
            //去掉滚动动作
            $(window).off('scroll')
            transition.next()
          }
        },
        methods:{
          init(){
            $(window).off('scroll')
            this.list = [];
            this.pageIndex = 1;
            this.busy = true;
            this.allLoad = false;
            this.getData(()=>{
              this.loadBottom()
              $(window).on('scroll',this.loadBottom)
            })
          },
          getData(callabck){
            let self = this,
                postData ;
            if(this.tab){
               postData= 'index='+this.pageIndex+'&name=&num='+this.pageSize+'&orderby=1&type='+this.tab+'';
            }else{
               postData= 'index='+this.pageIndex+'&name=&num='+this.pageSize+'&orderby=1&type=';
            }
            models.send('queryBlogList',postData,(d)=>{
              this.busy = false;
              if(d && d.data.blogList.length){
                if(d.data.blogList.length < self.pageSize){
                    self.allLoad = true;
                    $(window).off('scroll')
                }
                self.list =  self.list.concat(d.data.blogList);
                self.pageIndex ++ ;
                if(d.data.blogList.length >= self.pageSize){
                  window.setTimeout(()=>{
                    callabck && callabck()
                  },200)
                }
              }else{
                this.allLoad = true;
                $(window).off('scroll')
              }
            })
          },
          changeTab(id){
            this.tab = id;
            this.init()
          },
          //滚动加载更多
          loadBottom(){
            //结构限制，实际滚动的是  $(window);文档高度是$("#pageListContent").height()
            if(!this.busy && !this.allLoad){
              let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
              //提前100px开始加载
              if ($("#proList").height() <= totalheight - 100 ) {
                  this.busy = true;
                  // this.searchKey.limit += 20;
                  this.getData();
              }
            }
          },
          gotoDetail(id){
            this.$route.router.go({'name':'detail',params:{'id':id},query:{'qhfrom':'list'}})
          }
        }
    }
</script>
