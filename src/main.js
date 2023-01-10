import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import GStore from './store';
import './service/AxiosInterceptorSetup.js';

createApp(App).provide('GStore', GStore).use(router).mount('#app');
