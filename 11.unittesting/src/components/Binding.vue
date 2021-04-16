<template>
    <button id="red" @click="className='red'" >Red</button>
    <button id="green" @click="className='green'">Green</button>
    <button id="blue" @click="className='blue'">Blue</button>

    <p :class="className">We finally learn VueJS</p>
</template>
<script>
export default {
    data() {
        return {
            className: 'red'
        }
    },
}
</script>
<style>
.red {
    color: red;
}
.green {
    color: green;
}
.blue {
    color: blue;
}
</style>