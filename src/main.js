import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)

// Usar el enrutador en la instancia de la aplicación
app.use(router)

app.mount('#app')

