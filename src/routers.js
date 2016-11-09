'use strict'

export default function(router){
		router.map({
		    '/index': {
		    	name:'index',
		    	component:function (resolve) {
						//打包分开的文件异步加载
			      require(['./components/index.vue'], resolve)
			    }
		    },
				'/detail/:id': {
						name:'detail',
						component:function (resolve) {
							require(['./components/detail.vue'], resolve)
						}
				},
				'/list': {
						name:'list',
						component:function (resolve) {
							require(['./components/list.vue'], resolve)
						}
				},
				'/edit': {
						name:'edit',
						component:function (resolve) {
							require(['./components/edit.vue'], resolve)
						}
				},
				'/user':{
						name:'user',
						component:function(resolve){
							require(['./components/user.vue'], resolve)
						}
				},
				'/reg':{
						name:'reg',
						component:function (resolve) {
							//打包分开的文件异步加载
							require(['./components/reg.vue'], resolve)
						}
				}
		})

		router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
		    '*':"/index"//重定向任意未匹配路径到/index
		});
		//注册路由切换前
		//使底部菜单栏在一级路由切换时一直保持显示
		//在二级页时隐藏
		router.beforeEach(function (transition) {
				$("#CommonLoading").show();
		    var toPath = transition.to.path;
				//判断是否是一级目录
		    if(toPath.replace(/[^/]/g,"").length>1){
		        router.app.isIndex = false;
		    }else{
		        router.app.isIndex = true;
		    }
		    transition.next()
		})
		//注册路由切换后
		router.afterEach(function (transition) {
			  $("#CommonLoading").hide();
		    console.log('成功浏览到: ' + transition.to.path)
		    //$.refreshScroller();
		})
}
