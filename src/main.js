import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css"
import router from './router'
import { i18n } from './i18n'
import axios from 'vue-axios'

import Button from "primevue/button"

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);
app.use(i18n);
app.use(axios);

app.component('pv-button', Button);

app.mount('#app');