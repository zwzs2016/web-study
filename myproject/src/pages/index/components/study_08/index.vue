<template>
    <div>
        <div class="vs">
        <h3>组件通信</h3>
        </div>
        <pre v-highlight>
            <code class="lang-javascript">
                //父组件向子组件通信
                var con
            </code>
        </pre>
        <div class="comm">
            <el-link href="/study08/parent">parent</el-link>
            <el-link href="/study08/children">chilren</el-link>
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.comm{
    a{
        font-size: 1.2rem;
        margin: 0 1rem;
    }
}
</style>