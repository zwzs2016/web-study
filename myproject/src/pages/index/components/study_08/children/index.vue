<template>
  <div>
      <div class="child"> 
          <p>子组件向父组件通信 子组件set值,父组件get值</p>
          <p>通过事件间接获取子组件的data</p>
          <span>1.$emit</span>
          <span>2.$chilren</span>
      </div>
      <p>{{"name:"+name+"age:"+age+"sex:"+sex}}</p>
      <el-button @click="emit">$emit事件传值</el-button>
  </div>
</template>

<script>
export default {
  name:'children',
  data () {
    return {
        parentdata:0,
        msg:"hello"
    }
  },
  methods:{
      pushparentdata(){
        console.log("子组件")
      },
      emit(){
        this.$emit("emit",this.msg)
      }
  },
  props:[
      'name',
      'age',
      'sex'
  ]
}
</script>

<style lang='scss' scoped>
.child{
  height: auto;
}
</style>
