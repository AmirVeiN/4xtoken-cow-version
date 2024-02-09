import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
    faTwitter,
    faTelegram,
    faDiscord,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {faBars , faCheck} from "@fortawesome/free-solid-svg-icons"
import {faCopy} from "@fortawesome/free-regular-svg-icons"

library.add(
    faTwitter,
    faTelegram,
    faDiscord,
    faInstagram,
    faBars,
    faCopy,
    faCheck,
);
const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')