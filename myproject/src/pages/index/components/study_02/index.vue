<template>
	<div>
		<h1>v-for :key</h1>
		<ul id="items">
			<li v-for="item in items" :key="item.id" :style="listyle">
				{{ item.message }}
			</li>
		</ul>
		<p>{{ date }}</p>
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		<br>
		<span>Checked names: {{ checkedNames }}</span>
		<br>
		<input type="radio" value="One" v-model="picked">
		<label for="one">One</label>
		<br>
		<input type="radio" value="Two" v-model="picked">
		<label for="two">Two</label>
		<br>
		<span>Picked: {{ picked }}</span>

		<select v-model="selected">
		<option disabled value="">请选择</option>
		<option>A</option>
		<option>B</option>
		<option>C</option>
		</select>
		<span>Selected: {{ selected }}</span>
		<button @click="keybind">点击</button>
		<select v-model="selected_a" multiple style="width: 50px;">
		<option>A</option>
		<option>B</option>
		<option>C</option>
		</select>
		<br>
		<span>Selected: {{ selected_a }}</span>
	</div>
</template>

<script>
	// import $ from 'jquery'
	export default{
		name:'study_02',
		data(){
			return{
				items:[
				{
					message:'Foo',id:'0'
				},
				{
					message:'Bar',id:'1'
				}
				],
				li_style:{
					color:'red',
					fontSize:'23px'
				},
				checkedNames:[],
				picked:'',
				selected:'',
				selected_a:[],
				num1:0
			}
		},
		computed:{
			listyle(){
				console.log('li_style');
				return this.li_style;
			},
			date(){
				return Date.now();
			}

		},
		watch:{
			li_style(){
				console.log('改变了');
			},
			num1(){
				console.log('改变了');
			}
		},
		mounted(){
			console.log("被重新渲染了!");
			// $("#items li:first-child").css('color','red');
		},
		methods:{
			keybind(){
				let newitems=[];
				newitems.push(this.items[1]);
				newitems.push(this.items[0]);
				this.items=newitems;
				this.li_style.color="#000";
				this.num1=1;
			}
		},
	}
</script>
<style scoped>

</style>