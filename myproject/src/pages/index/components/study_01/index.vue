<template>
	<div>
		<div class="vs">
			<h3>vue文件结构</h3>
		</div>
		<pre v-highlight>
			<code class="html">
				template-
					-div
					-h1
					- ...
				script-
					-export default{
						name:..//vue组件名字
						data(){
							return{
								//数据...
							}
						},
						mounted(){
							//挂载,初始化
						},
						computed:{
							//计算属性
						},
						watch:{
							//监听属性..
						},
						methods:{
							A(){

							},
							//方法
						},
						components:{
							//组件
						},
						props:[
						...组件属性
						'A','B'
						],
						//or:
						props:{
						...组件属性
						A:Number,
						B:String
						...
						},
					}
				style-
					-scoped //只作用在此style
					-lang="scss"  //css预处理
			</code>
		</pre>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				ab:''
			}
		},
		beforeCreate(){
			console.log(this.$store.state.logininfo)
		}
	}
</script>
<style scoped>
</style>