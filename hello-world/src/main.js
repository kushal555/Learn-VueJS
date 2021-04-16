import { createApp } from 'vue'
import { createStore }  from 'vuex'
import App from './App.vue'


const app = createApp(App)

const store = createStore({
    state() {
        return {
            counter: 0
        }
    }, mutations: {
        increment(state){
            state.counter = state.counter + 1
        }
    }
});

app.directive('highlight', {
    beforeMount(el, binding) {

        let delay = 0
        if(binding.modifiers['delayed'])
            delay = 3000

        setTimeout(() => {
            if(binding.arg == 'background')
                el.style.backgroundColor = binding.value;
            else
                el.style.color = binding.value
        }, delay);    
        
    },
})

app.use(store);
app.mount('#app')