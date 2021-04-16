<template>
  <base-container title="Vuex">
  <!-- <button @click="addCounter">Add +1</button>
  <change-counter></change-counter>
  <the-counter></the-counter> -->
  <div v-for="(user,index) in usernames" :key="index">
    <input type="text" v-model="usernames[index].value"  />
    <button v-if="usernames.length > 1" @click="removeInput(index)" >Remove</button>
  </div>
  <button @click="AddMore" >Add More</button> 
  </base-container>
  
  <form action="" method="post">
    <div class="form-group">
      <label for="">Name</label>
      <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
      <small id="helpId" class="text-muted">Help text</small>
    </div>
  </form>
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
// import ChangeCounter from './components/ChangeCounter.vue';
// import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    // TheCounter,
    // ChangeCounter
  },
  data(){
    return {
      usernames: [{
        value: ''
      }],
      user: {value: ''}
    }
  },
  methods: {
    addCounter(){
      this.$store.dispatch('increament');
    },
    AddMore(){
      this.usernames.push(this.user);
    },
    removeInput(index){
      delete this.usernames[index];
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>