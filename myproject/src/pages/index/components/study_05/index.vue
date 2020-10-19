<template>
    <div>
        <h2>es6 字符串新增方法</h2>
        <p>String.row():{{row}}</p>
        <p>字符串遍历接口:
            <span>字符串为：abcdefg</span>
            <button @click="nextstr">下一个</button>
            {{strings}}
            
        </p>
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