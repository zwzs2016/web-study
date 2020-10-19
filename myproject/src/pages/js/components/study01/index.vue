<template>
    <div>
        <h2>apply call 使用</h2>
        <div class="studycontent">
            <p>
                call() 方法分别接受参数。
                apply() 方法接受数组形式的参数。
            </p>
            <p>apply():</p>
            <pre v-highlight>
                <code class="lang-javascript">
                    var person = {
                    fullName: function(city, country) {
                        return this.firstName + " " + this.lastName + "," + city + "," + country;
                    }
                    }
                    var person1 = {
                    firstName:"John",
                    lastName: "Doe"
                    }
                    person.fullName.apply(person1, ["Oslo", "Norway"]);
                </code>
            </pre>
            <p>call():</p>
            <pre v-highlight>
                <code class="lang-javascript">
                    var person = {
                    fullName: function(city, country) {
                        return this.firstName + " " + this.lastName + "," + city + "," + country;
                    }
                    }
                    var person1 = {
                    firstName:"John",
                    lastName: "Doe"
                    }
                    person.fullName.call(person1, "Oslo", "Norway");
                </code>
            </pre>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style lang="scss" scoped>

.studycontent{
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    pre{
        text-align: left;
        font-size: 1.2rem;
        font-weight: bold;
    }
    p{
        text-align: left;
    }
}
</style>