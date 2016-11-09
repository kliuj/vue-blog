import store from "./store.js"
let stores = new store()
import fun from './fun.js'
let baseFun = new fun()
export default class Api {
  constructor() {
    //path可配置
    this.path = 'http://lwons.com:3000/';
  }
  //设置api接口
  setModel(url){
      return this.path + url
  }
  models(){
    let _ret ={};
    //查询列表
    _ret.queryBlogList = this.setModel('query/blog');
    //详细
    _ret.queryBlogDetail = this.setModel('query/blogDetail');
    return _ret;
  }
  //发送请求
  /*
  * @author  k.liu
  * Description: 通用的api接口调用
  * @param url [必选]		[url信息，从上面的key匹配]
  * @param postData      [必选]		[post参数]
  * @param successCallback        [必选]		[成功回调]
  * @param errorCallback        [可以传空]		[失败的回调]
  * @param nocheck	 [可选]		[是否需要验证登录信息]
  */
  send(url,postData,successCallback,errorCallback,nocheck,notShowLoading){
    if(!notShowLoading){
      //自定义是否showloading
      $("#CommonLoading").show();
    }
    let apiType = typeof postData == "string" ? 'get' : 'post';

    let self= this;
    $.ajax({
      url:self.models()[url],
      type:apiType,
      data:postData,
      success:function(data){
        if(!notShowLoading){
          $("#CommonLoading").hide();
        }
        successCallback && successCallback(data)
      },
      error:function(){
        if(!notShowLoading){
          $("#CommonLoading").hide();
        }
        baseFun.showAlert("网络繁忙");
        return false;
      }
    })
  }
}
