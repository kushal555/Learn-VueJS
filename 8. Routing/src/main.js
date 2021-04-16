import { createApp, defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamList from "./components/teams/TeamsList.vue";
import UserList from "./components/users/UsersList.vue";
// import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from "./components/NotFound.vue";

const TeamMembers = defineAsyncComponent(()=> import('./components/teams/TeamMembers.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', },  // domain.com/teams
        { 
            path: '/teams', 
            component: TeamList, 
            name: 'teams',
            alias: '/',
            children: [
                { path: ':teamId', name:'teamMembers', component: TeamMembers, props: true },
            ],
            meta: {requiresAuth: true}
        },  // domain.com/teams
        { path: '/users', component: UserList},
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active'
})

const app = createApp(App);

app.use(router);
app.mount('#app');
