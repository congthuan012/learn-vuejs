import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './assets/plugin/fontawesome-free-6.3.0-web/css/all.css';
// import './assets/css/style.css';
import router from './routes/index';
const app = createApp(App);

app.use(router);

app.mount('#app')
