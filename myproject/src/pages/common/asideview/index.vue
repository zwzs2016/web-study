<template>
    <div :style="{zIndex:z_index}">
        <aside v-if="isshow">
			<el-row class="tac elrow">
			<el-col :span="12">
				<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b">
				<el-submenu index="1">
					<template slot="title">
					<i class="el-icon-caret-bottom"></i>
					<span>Vue Study</span>
					</template>
					<el-menu-item-group>
					<template slot="title">基础</template>
					<el-menu-item index="1-1">
						<a href="/study01">Vue起步</a>
					</el-menu-item>
					<el-menu-item index="1-2">
						<a href="/study02">vfor</a>
					</el-menu-item>
					<el-menu-item index="1-3">
						<a href="/study03">computed/watch</a>
					</el-menu-item>
					<el-menu-item index="1-4">
						<a href="/study04">axios</a>
					</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="进阶">
					<el-menu-item index="2-1">
						<a href="/study05">es6methods</a>
					</el-menu-item>
					<el-menu-item index="2-2">
						<a href="/study06">mysqlconn</a>
					</el-menu-item>
					<el-menu-item index="2-3">
						<a href="/study07">vuex</a>
					</el-menu-item>
					<el-menu-item index="2-4">
						<a href="/study08">Componentcommunication</a>
					</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-submenu>
					<template slot="title">
					<i class="el-icon-caret-bottom"></i>
					<span>Javascript</span>
					</template>
				</el-submenu>
				<el-submenu>
					<template slot="title">
						<i class="el-icon-caret-bottom"></i>
						<span>Css</span>
					</template>
				</el-submenu>
				<el-submenu>
					<template slot="title">
						<i class="el-icon-caret-bottom"></i>
						<span>HTML</span>
					</template>
				</el-submenu>
				</el-menu>
				<i class="el-icon-s-fold" @click="cut"></i>
			</el-col>
			</el-row>	
		</aside>
		<i class="el-icon-s-unfold isunfold" @click="cut" v-show="isunfold"></i>
    </div>
</template>
<script>
export default {
	data(){
		return{
			isshow:false,
			isunfold:true,
			z_index:9,
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		cut(){
			if(this.isshow==false){
				this.isshow=true
				this.isunfold=false
				this.z_index=12
				console.log(this.style.iunfold);
			}else{
				this.isshow=false
				this.isunfold=true
				this.z_index=9
			}
		}
	},
}
</script>
<style lang="scss" scoped>
div{
	position: fixed;
	width: 14rem;
	bottom: 0;
	overflow: hidden;
	z-index: 9;
	aside{
		width: 100%;
		height: 100%;
	.elrow{
		a{
			text-decoration: none;
			color: #fff;
		}
		position: relative;
		text-align: left;
		.el-menu-vertical-demo{
			height: 100vh;
			overflow-y: scroll;
			overflow-x: hidden;
			&::-webkit-scrollbar { width: 0 !important }
			-ms-overflow-style: none;
		}
		.el-icon-s-fold{
			position: absolute;
			font-size: 1.75rem;
			left: 0;
			bottom: 0;
			color: #ffffff;
			transition: .5s;
			&:hover{
				color:#67C23A;
				transition: .5s;
			}
			z-index: 88;
		}
	}
	}
	.isunfold{
		position: fixed;
		font-size: 1.75rem;
		top: 0;
		left: 0;
		&:hover{
			color:#67C23A;
			transition: .5s;
		}
	}
}

</style>