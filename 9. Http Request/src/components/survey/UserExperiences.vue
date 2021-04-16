<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...... </p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="!isLoading && (results || results.length == 0)"> Currently we have no review, Please submit first </p>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false
    }
  },
  methods: {
    loadExperiences(){
      this.isLoading = true;
      axios.get('https://vue-http-demo-ee900-default-rtdb.firebaseio.com/survey')
      .then(response=> {
        const results = [];
        const data = response.data;
        for(const id in data){
          results.push({ id: id, name: data[id].name, rating: data[id].rating });
        }
        this.results = results;
        this.isLoading = false;
      }).catch(errors => {
        this.isLoading = false;
        console.log(errors)
      })
    }
  },
  mounted(){
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>