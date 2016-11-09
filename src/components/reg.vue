<style>
  body{
      background-color: #fbf9fe;
  }
</style>
<template>
<div transition="page" class="page page-current ">
    <div class="top">
        <span class="back" v-link={'name':'user'}></span>
        <span class="blogTitle">注册账户</span>
    </div>
    <div id="loginContainer" class="main">
		    <div class="list">
		        <label class="userInput ">
		          <span class="input-label">用户名</span>
		          <input type="text" placeholder="用户名"  v-model="username">
		        </label>
		        <label class="userInput ">
		           <span class="input-label">密码</span>
		           <input type="password" v-model="password" placeholder="密码">
		        </label>
            <label class="userInput ">
               <span class="input-label">确认密码</span>
               <input type="password" v-model="password" placeholder="密码">
            </label>
		    </div>
		    <div class="padding">
		        <button class="g_btn_s " @click="reg">注册</button>
		    </div>
    </div>
  </div>
</template>
<script>
	export default {
		data () {
			 return {
            }
		},
		methods:{
        reg:function(){
          
        }
		}
	}
</script>
