<template>
    <div>
		<el-container :direction="vertical">
			<el-header height="">
				<h1>js 学习</h1>
			</el-header>
				<el-aside width="200px">
					<asideview></asideview>
				</el-aside>
				<el-container :direction="vertical">
					<el-main>
						<ul class="navigation">
							<li><el-link href="/js/study01">callapply</el-link></li>
							<li><el-link href="/js/study02">ArrayIteration</el-link></li>
							<li><el-link href="/js/study03">study03</el-link></li>
							<li><el-link href="/js/study04">study04</el-link></li>
							<li><el-link href="/js/study05">study05</el-link></li>
							<li><el-link href="/js/study06">study06</el-link></li>
							<li><el-link href="/js/study07">study07</el-link></li>
							<li><el-link href="/">esstudy</el-link></li>
						</ul>
						<router-view />
					</el-main>
				</el-container>
		</el-container>
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
<style lang="scss">

</style>