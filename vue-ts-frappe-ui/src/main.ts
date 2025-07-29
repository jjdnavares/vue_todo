import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// import { createApp } from 'vue'
// import { FrappeUI } from 'frappe-ui'
// import App from './App.vue'

// let app = createApp(App)
// app.use(FrappeUI)
// app.mount('#app')