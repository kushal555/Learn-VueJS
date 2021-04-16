import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0,  //results: []
        }
    },
    mutations: {
        // getSurvey(state){
        //    const results = [];
        //         const data = response.data;
        //         for(const id in data){
        //         results.push({ id: id, name: data[id].name, rating: data[id].rating });
        //         }
        //         state.results = results;
        //  }
        increament(state){
            state.counter = state.counter + 1;
        },
        increase(state,payload){
            state.counter = state.counter + payload.value;
        }
    },
    getters: {
        finalCounter(state){
            return state.counter * 2;
        }
        // finalResults(state){
        //     return state.results
        // }
    },
    actions: {
        // submitSurvey(){
        //     axios.post('https://vue-http-demo-ee900-default-rtdb.firebaseio.com/survey.json',{
        //         name: this.enteredName,
        //         rating: this.chosenRating
        //       }).then(response=> {
        //              context.dispatch('getSurvey')
        //          });
        // }
        // getSurvey(){
        //     axios.get('https://vue-http-demo-ee900-default-rtdb.firebaseio.com/survey')
        //     .then(response=> {
        //         context.commit('getSurvey')
        //         this.isLoading = false;
        //     }).catch(errors => {
        //         this.isLoading = false;
        //         console.log(errors)
        //     })
        // }
        increament(context){
            setTimeout(()=>{
                context.commit('increament')
            },2000);
        }
    }
});
app.use(store);
app.mount('#app');
