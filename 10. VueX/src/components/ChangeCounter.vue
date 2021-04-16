<template>
     <button @click="addCounter">Add +10</button>
</template>
<script>
export default {
    methods: {
        addCounter(){
            this.$store.commit('increase',{ value: 10 });
        }
    },  
}
</script>