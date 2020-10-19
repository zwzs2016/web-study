<template>
    <div>
        <h2>JavaScript 数组迭代方法</h2>
        <div>
            <pre v-highlight>
                <code class="lang-javascript">
                    //forEach()
                    var txt = "";
                    var numbers = [1, 2, 3, 4, 5];
                    numbers.forEach(myFunction);

                    function myFunction(value, index, array) {
                    txt = txt + value; 
                    }

                    //Array.map()
                    var numbers1 = [1, 2, 3, 4, 5];
                    var numbers2 = numbers1.map(myFunction);

                    function myFunction(value, index, array) {
                    return value * 2;
                    }

                    //Array.filter()
                    var numbers = [4, 9, 25, 45, 16];
                    var over18 = numbers.filter(myFunction);

                    function myFunction(value, index, array) {
                    return value > 18;
                    }

                    //Array.reduce()
                    var numbers1 = [4, 9, 25, 45, 16];
                    var sum = numbers1.reduce(myFunction);

                    function myFunction(total, value, index, array) {
                    return total + value;
                    }
                </code>
            </pre>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
code{
		text-align: left;
		font-weight: bold;
		font-size: 1.1rem;
	}
</style>