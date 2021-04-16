<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import AlertMixin from '../mixin/alert.js';
import UserAlert from '../components/UserAlert.vue';
export default {
  mixins: [AlertMixin],
  data() {
    return {
      title: 'Delete the User?',
      alertIsVisible: true
    }
  },
  components: {
    UserAlert,
  },
  created(){
    console.log(" I am in Delete Component");
  }
}


</script>