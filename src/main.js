import { createApp } from 'vue';
import './assets/tailwind.css';
import router from './router';
import App from './App.vue';

import Spacer from './utilities/Spacer.vue';

createApp(App).use(router).component('spacer', Spacer).mount('#app');
