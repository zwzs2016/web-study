<template>
	<div>
		<div class="vs">
			<h3>Vuex study</h3>
		</div>
	</div>
</template>
<script>
	export default{
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