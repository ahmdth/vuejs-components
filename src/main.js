import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import AppLink from "@/components/AppLink.vue"
import './style.css'

createApp(App)
  .use(store)
  .use(router)
  .component("AppLink", AppLink)
  .mount('#app')
