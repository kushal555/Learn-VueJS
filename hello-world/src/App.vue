<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2 v-highlight:background.delayed="'yellow'">Hello Vue!!</h2>
  <h2>{{ counter }}</h2>
  <button @click="addOne">Add 1</button>
</template>

<script>


export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed: {
    counter(){
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne(){
      this.$store.commit('increment');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
