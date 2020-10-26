import Vue from 'vue'
import Router from 'vue-router'

import es6_study from '../pages/index/es6_study'
import js_study from '../pages/js/js_study'
const study_01=()=>import('../pages/index/components/study_01')
const study_02=()=>import('../pages/index/components/study_02')
const study_03=()=>import('../pages/index/components/study_03')
const study_04=()=>import('../pages/index/components/study_04')
const study_05=()=>import('../pages/index/components/study_05')
const study_06=()=>import('../pages/index/components/study_06')
const stduy_07=()=>import('../pages/index/components/study_07')
const study_08=()=>import('../pages/index/components/study_08')
const study_09=()=>import('../pages/index/components/study_09')

const js_study01=()=>import('../pages/js/components/study01')
const js_study02=()=>import('../pages/js/components/study02')

const login=()=>import('../pages/login/')


Vue.use(Router)

/*初始化组件*/
export default new Router({
	mode: 'history',
	routes :[
	{
		path:'/',
		component:es6_study,
		meta:{
			requireAuth:true
		},
		children:[
		{
			path:'study01',
			component:study_01
		},
		{
			path:'study02',
			component:study_02
		},
		{
			path:'study03',
			component:study_03
		},
		{
			path:'study04',
			component:study_04
		},
		{
			path:'study05',
			component:study_05
		},
		{
			path:'study06',
			component:study_06
		},
		{
			path:'study07',
			component:stduy_07
		},
		{
			path:'study08',
			component:study_08,
			children:[
				{
					path:'children',
					component:()=>import('../pages/index/components/study_08/children')
				},
				{
					path:'parent',
					component:()=>import('../pages/index/components/study_08/parent')
				}
			]
		},
		{
			path:'study09',
			component:study_09
		}
		]
	},
	{
		path:'/js',
		component:js_study,
		children:[
			{
				path:'study01',
				component:js_study01
			},
			{
				path:'study02',
				component:js_study02
			},
			
		]
	},
	{
		path:'/login',
		name:'login',
		component:login
	}
	]
})