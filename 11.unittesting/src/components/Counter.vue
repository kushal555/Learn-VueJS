<template>
    <button @click="increment"> Increase </button>
    <h2>{{ counter }}</h2>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment(){
            this.counter++;
        }
    },
}
</script>