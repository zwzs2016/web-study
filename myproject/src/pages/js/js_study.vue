<template>
    <div>
        <h1>js 学习</h1>
        <ul class="navigation">
			<li><el-link href="/js/study01">study01</el-link></li>
			<li><el-link href="/js/study02">study02</el-link></li>
			<li><el-link href="/js/study03">study03</el-link></li>
			<li><el-link href="/js/study04">study04</el-link></li>
			<li><el-link href="/js/study05">study05</el-link></li>
			<li><el-link href="/js/study06">study06</el-link></li>
			<li><el-link href="/js/study07">study07</el-link></li>
			<li><el-link href="/js/study08">study08</el-link></li>
			<li><el-link href="/">esstudy</el-link></li>
		</ul>
		<asideview></asideview>
        <router-view />
    </div>
</template>
<script>
	import asideview from '@/pages/common/asideview/'
    export default {
		name:'js_study',
		components:{
			asideview
		}
    }
</script>
<style lang="scss" scoped>

</style>