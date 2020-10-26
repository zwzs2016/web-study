<template>
	<div>
		<el-container>
			<el-header>
				<h1>Vue学习</h1>
				<el-dropdown @command="gologin">
				<span class="el-dropdown-link">
					<i class="el-icon-user-solid" style="fontSize:1.5rem"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="login">注销</el-dropdown-item>
				</el-dropdown-menu>
				</el-dropdown>
			</el-header>
			<el-main>
				<ul class="navigation">
				<li><el-link href="/study01">Vuecli</el-link></li>
				<li><el-link href="/study02">vfor</el-link></li>
				<li><el-link href="/study03">computed/watch</el-link></li>
				<li><el-link href="/study04">axios</el-link></li>
				<li><el-link href="/study05">es6methods</el-link></li>
				<li><el-link href="/study06">mysqlconn</el-link></li>
				<li><el-link href="/study07">vuex</el-link></li>
				<li><el-link href="/study08">Componentcommunication</el-link></li>
				<li><el-link href="/css">css</el-link></li>
				<li><el-link href="/js">js</el-link></li>
			</ul>
			<router-view />
			
			</el-main>
			<el-aside width="14rem">
				<asideview></asideview>
			</el-aside>
		</el-container>
	</div>
</template>
<script>
	import asideview from '@/pages/common/asideview'
	import {mysql} from '@/config/httpconfig.js'
	export default{
    name:'es6_study',
    components: {
    asideview,
    },
	data(){
		return{
		}
	},
	beforeCreate(){
		mysql.get('/logininfo')
		.then(res=>{
			if(res.data===false){
				location.href="/login"
			}
			// console.log(res.data)
		})
	},
	methods: {
		gologin(command){
			if(command=="login"){
				mysql.post('/loginout')
				.then(res=>{
					if(res.data===false){
						this.$store.dispatch('logininfo',false)
						console.log(this.$store.state.logininfo)
						localStorage.removeItem('login')
						this.$router.push('/login')
					}
				})
			}
		}
	},	
	}
</script>
<style lang="scss">
div,body,p,h1,h2,h3,h4,h5,ul,li,ol,pre,a,aside{
    margin: 0;
    padding: 0;
}
ul,li{
	list-style: none;
}
html,body{
	width: 100%;
	height: 100%;
}
body{
	&::-webkit-scrollbar { width: 0 !important }
	-ms-overflow-style: none;
}
.navigation{
	li{
		list-style: none;
		margin: 0 1rem;
		a{
			text-decoration: none;
			color: #000;
			font-size: 1.2rem;
			&::after{
				content: "";
				display: block;
				width: 100%;
				height: .2rem;
				}
			&:active,&:hover{
				&::after{
					background-color: #67C23A;
				}
			}	
		}
	}
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 80%;
	left: 0;
	right: 0;
	margin: auto;
	position: relative;
	top: .5rem;
	z-index: 11;
}
.vs{
	width: 80%;
	// background-color:red;
	left: 0;
	right: 0;
	margin: 1.5rem auto;
	height: 2rem;
	&::before{
		content: "";
		width: .2rem;
		height: 1.5rem;
		display: block;
		float: left;
		margin-right: .5rem;
		margin-top: .25rem;
		background-color:#409EFF;
	}
	h3{
		text-align: left;
		line-height: 2rem;
	}
}

pre{
	width: 90%;
	left: 0;
	right: 0;
	margin: auto;
}
code{
	border-radius: .5rem;
	text-align: left;
	font-weight: bold;
	font-size: 1.1rem;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
	position: relative;
	.el-dropdown{
		position: absolute;
		right: 3rem;
		bottom: 0;
		top: 0;
		margin: auto;
	}
}
.el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 200px;
	height: 100%;
}
.el-footer{
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>