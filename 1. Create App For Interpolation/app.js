
// const button = document.querySelector("button");


// function changeName(){
//     document.querySelector('h2').innerText = "Kushal";
// }

// button.addEventListener("click",changeName);
// id #, class => .


//  Object => {} , Array => []
 const app = Vue.createApp({
     data() {
         return {
             courseGoalA: "Learn VueJS!",
             courseGoalB: "<h2>Master VueJS!</h2>",
             linkVueJS: "https://v3.vuejs.org"
         }
     },
     methods: {
         outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
         }
     },
 }).mount("#user-goal")