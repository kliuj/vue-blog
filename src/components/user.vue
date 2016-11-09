<style>
  body{
      background-color: #fbf9fe;
  }
</style>
<template>
<div transition="page" class="page page-current ">
    <div class="top">
        <span class="blogTitle">个人信息</span>
        <span class="toreg" v-link={'name':'reg'}>  注册 </span>
    </div>
    <div id="loginContainer" class="main">
		    <div class="list">
		        <label class="userInput ">
		          <span class="input-label">用户名</span>
		          <input type="text" placeholder="用户名"  v-model="username">
		        </label>
		        <label class="userInput ">
		           <span class="input-label">登录密码</span>
		           <input type="password" v-model="password" placeholder="密码">
		        </label>
		    </div>
		    <div class="padding">
		        <button class="g_btn_s " @click="log">登录</button>
		    </div>
    </div>
</div>
  <router-view ></router-view>
</template>
<script>
	export default {
		data () {
			 return {
            }
		},
		methods:{
        log:function(){

        }
		}
	}
</script>
