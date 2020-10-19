<template>
	<div>
		<h2>vue文件结构</h2>
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
						}
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
	}
</script>
<style scoped>
	code{
		text-align: left;
		font-weight: bold;
		font-size: 1.1rem;
	}
</style>