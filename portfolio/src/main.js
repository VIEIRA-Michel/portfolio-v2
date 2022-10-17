import { createApp } from "vue";
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from "./App.vue";

import "@/assets/styles/reset.css";
import "@/assets/styles/index.scss";

library.add(fas, fab, far);
const app = createApp(App).component('fa', FontAwesomeIcon);


app.use(createPinia());
app.mount("#app");
