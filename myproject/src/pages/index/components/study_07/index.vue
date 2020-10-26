<template>
	<div>
		<div class="vs">
			<h3>Vuex study</h3>
		</div>
		<div>
			<p>获取store中的值：{{num}}</p>
			<el-button @click="getnum">获取store</el-button>
		</div>
		<div>
			<pre v-highlight>
				<code class="javascript">
					const store=new Vuex.Store({
						state:{//
							count:1
						},
						motations:{
							increment(state){
								state.count++
							}
						},
						actions:{

						},
						getters:{

						},
						modules:{

						}
					})
				</code>
			</pre>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num: 0
			}
		},
		methods:{
			getnum(){
				console.log(this.num)
				this.num=this.$store.state.count
			}
		}
	}
</script>
<style lang="scss" scoped>
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
</style>