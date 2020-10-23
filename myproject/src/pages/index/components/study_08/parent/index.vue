<template>
  <div>
      <p>父组件向子组件通信 父set值,子组件get值</p>
      <br />
      <p>通过定义props传值</p>
      <children name="张三" :age="age" :sex="sex" ref="ch" @emit="emit"></children>
      <p>父组件的值(通过$children $refs)：{{childdata}}</p>
      <p>父组件的值(通过$emit)：{{childdata1}}</p>

  </div>
</template>

<script>
import children from '../children'
export default {
  data () {
    return {
        name:"张三",
        age:18,
        sex:"男",
        childdata:'',
        childdata1:''
    }
  },
  mounted(){
      this.childdata=this.$refs.ch.msg
      console.log(this.$refs.ch.msg) 
  },
  computed:{
  },
  methods:{
      emit(data){
          this.childdata1=data
      }
  },
  components:{
      children
  }
}
</script>

<style lang='scss'>
.child{
    display: none;
}
</style>

