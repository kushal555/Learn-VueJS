import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';


const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.directive('highlight',{
    beforeMount(el,binding){
        let delay = 0;

        if(binding.modifiers['delayed']){
            delay = 3000;
        }

        setTimeout( ()=> {
            // console.log(el,binding)
            if(binding.arg == 'background')
            el.style.backgroundColor = binding.value;
            else    
            el.style.color = binding.value
        },delay);
        
    }
})  // v-hightlight

app.mount('#app');
