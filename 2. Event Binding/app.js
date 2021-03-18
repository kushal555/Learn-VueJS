const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: ''
    };
  },
  methods: {
    outputFullName(){
      console.log(" Getting outputFullName... ");
      return this.name + ' '+ 'Suthar';
    },
    setName(event){
      this.name = event.target.value;
    },
    addCounter(num){
      this.counter = this.counter + num;
    },
    reduceCounter(num){
      this.counter = this.counter - num;
    },
    submitForm(){
      alert("form is submitted");
    },
    resetInput(){
      this.name = '';
    }
  },
  computed: {
    fullName(){
      if(this.name)
      return this.name+ ' ' + this.lastName;
      else
      return '';
    }
  },
  watch: {
    counter(value){
      setTimeout(()=>{
        this.counter = 0;
      },5000)
    }
  }
});

app.mount('#events');

// yourdomain.com/register