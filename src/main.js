import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { router } from '@/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

library.add(faPhone);
const app = createApp(App);
app.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app');