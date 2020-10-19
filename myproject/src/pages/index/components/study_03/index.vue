<template>
<div>
    <h2>计算属性与监听属性</h2>
    <select name="" id="" v-model="selected_pro" >
        <option disabled value="">请选择</option>
        <option v-for="(item,index) in pro_list" :value="item.name" :key="index">{{item.name}}</option>
    </select>
    <select name="" id="" v-model="selected_city">
        <option disabled value="">请选择</option>
        <option v-for="(item,index1) in citylist" :value="item.name" :key="index1">{{item.name}}</option>
    </select>
</div>
</template>
<script>
export default {
    data(){
        return{
            selected_pro:'',
            selected_city:'',
            pro_list:[
                {
                    name:'a',id:'1'  
                },
                {
                    name:'b',id:'2'
                },
                {
                    name:'c',id:'3'
                }
            ],
            city_list:[
                {
                    name_a:[
                        {
                            name:'a_a',id:'1'
                        },
                        {
                            name:'a_b',id:'2'
                        },
                        {
                            name:'a_c',id:'3'
                        }
                    ],
                    name_b:[
                        {
                            name:'b_a',id:'1'
                        },
                        {
                            name:'b_b',id:'2'
                        },
                        {
                            name:'b_c',id:'3'
                        }
                    ],
                    name_c:[
                        {
                            name:'c_a',id:'1'
                        },
                        {
                            name:'c_b',id:'2'
                        },
                        {
                            name:'c_c',id:'3'
                        }
                    ]
                    
                },
            ],
            area_list:[]
        }
    },
    computed:{
        citylist(){
            return this.city_list[0]['name_'+this.selected_pro];
        }
        
    },
    watch:{
        selected_pro(){
            console.log(this.selected_pro);
            let vala='name_'+this.selected_pro;
            console.log(vala);
            console.log(this.city_list[0][vala]);
            console.log(this.citylist);
        }
    }
}
</script>