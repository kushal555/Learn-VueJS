import { createApp } from 'vue';

import App from './App.vue';
import LogginMixin from "./mixin/logger.js";
const app = createApp(App)

app.mixin(LogginMixin);

app.mount('#app');
