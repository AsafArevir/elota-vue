import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require ('aframe');
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/estilos.css'
import Vue3Geolocation from 'vue3-geolocation'


createApp(App).use(store).use(router).mount('#app')
