const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    setName(event,lastName){
      this.name = event.target.value + " "+ lastName;
    },
    addCounter(num){
      this.counter = this.counter + num;
    },
    reduceCounter(num){
      this.counter = this.counter - num;
    },
    submitForm(){
      alert("form is submitted");
    }
  },
});

app.mount('#events');

// yourdomain.com/register