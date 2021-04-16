<template>
  <div>
    Built in Directive
    <p v-text="'Hello VueJS'"></p>
    <p v-html="'<strong>Hello VueJS</strong>'"></p>

    Custom Diretive
    <p v-highlight:background.delayed="'yellow'" > Hello World </p>
    <p v-local-highlight > Hello World </p>
  </div>
</template>

<script>
// import TheHeader from './components/TheHeader.vue';
// import ActiveGoals from './components/ActiveGoals.vue';
// import ManageGoals from './components/ManageGoals.vue';
// import UserInfo from './components/UserInfo.vue';
export default {
  components: {
    // TheHeader,
    // ActiveGoals,
    // ManageGoals
  },
  directives: {
    'local-highlight' : {
      beforeMount(el) {
        el.style.backgroundColor = 'red';
      },
    }
  },
  data() {
    return {
      activeUser: {
        name: 'Kushal Suthar',
        description: 'Site owner and admin',
        role: 'admin',
      },
      setActiveTab: 'active-goals'
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>