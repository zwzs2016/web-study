<template>
    <div>
        <div class="vs">
        <h3>es6 字符串新增方法</h3>
        </div>
        <p>String.row():{{row}}</p>
        <p>字符串遍历接口:</p>
        <p>字符串为：abcdefg</p>
            <el-button @click="nextstr">下一个</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            strings:'abcdef'
        }
    },
    computed:{
        row(){
            return String.raw `Hi\n`;
        }
    },
    methods:{
        async nextstr(){
            return Promise()
        }
    },
}
</script>
<style lang="scss" scoped>

</style>