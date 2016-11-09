<template>
        <div class="main">
            <div class="hot">热门推荐</div>
            <ul >
                <li class="hotlist" v-for="item in hotList" @click="gotoDetail(item._id)"  >

                        <div class="title">{{item.title}}</div>
                        <div class="info">
                            <span class="author">作者：{{item.user}}</span>
                            <span class="read">点击量：{{item.sum}}</span>
                        </div>

                </li>
            </ul>
            <div class="hot new">最新推荐</div>
            <ul >
                <li class="hotlist"  v-for="item in newList"  @click="gotoDetail(item._id)" >

                        <div class="title">{{item.title}}</div>
                        <div class="info">
                            <span class="author">作者：{{item.user}}</span>
                            <span class="read">发布时间：{{item.time.substr(0,10)}}</span>
                        </div>

                </li>
            </ul>

        </div>
</template>
<script>
    import api from "../model/api.js"
    let models = new api()
    export default {
        data () {
            return {
                hotList:[],
                newList:[]
            }
        },
        route:{
          data(){
            this.getHot();
            this.getNew();
          }
        },
        methods:{
            //热门
            getHot(){
              let postData = 'name=&index=1&num=5&type=&orderby=3';
              models.send('queryBlogList',postData,(d)=>{
                if(d && d.data){
                    this.hotList = d.data.blogList;
                }
              })
            },
            //最新
            getNew(){
              let postData = 'name=&index=1&num=5&type=&orderby=1';
              models.send('queryBlogList',postData,(d)=>{
                if(d && d.data){
                    this.newList = d.data.blogList;
                }
              })
            },
            gotoDetail(id){
              this.$route.router.go({'name':'detail',params:{'id':id},query:{'qhfrom':'index'}})
            }
        }
    }
</script>
