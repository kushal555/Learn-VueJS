<template>
    <button @click="changeAge" >Change Age</button>
</template>
<script>
export default {
    methods: {
        changeAge(){
            this.$emit('ageWasChanged',{ age: 23});
        }
    },
}
</script>