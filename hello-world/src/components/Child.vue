<template>
    <button @click="changeAge"></button>
</template>
<script>
export default {
    methods: {
        changeAge(){
            this.$emit('ageWasChanged',23);
        }
    },
}
</script>