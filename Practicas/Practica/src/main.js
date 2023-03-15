import { createApp } from 'vue'
import './style.css'
import App from './components/Home.vue'
import PruebaUno from './components/PruebaUno.vue'
import router from './Router/Router.js'
createApp(App).component('PruebaUno',PruebaUno)
.use(router)
.mount('#app')
