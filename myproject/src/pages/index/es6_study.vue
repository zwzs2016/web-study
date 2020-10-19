<template>
	<div>
		<h1>Vue学习</h1>
		<ul>
			<li><a href="/study01">study01</a></li>
			<li><a href="/study02">study02</a></li>
			<li><a href="/study03">study03</a></li>
			<li><a href="/study04">study04</a></li>
			<li><a href="/study05">study05</a></li>
			<li><a href="/study06">study06</a></li>
			<li><a href="/study07">study07</a></li>
			<li><a href="/study08">study08</a></li>
			<li><a href="/js">js study</a></li>
		</ul>
		<router-view />
	</div>
</template>
<script>
	export default{
		name:'es6_study',
	}
</script>
<style lang="scss">
div,p,h1,h2,h3,h4,h5,ul,li,ol,pre,a{
    margin: 0;
    padding: 0;
}
ul{
	li{
		list-style: none;
		margin: 0 1rem;
		a{
			text-decoration: none;
		}
	}
	display: flex;
	justify-content: center;
	width: 80%;
	left: 0;
	right: 0;
	margin: auto;
}
</style>