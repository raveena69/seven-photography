import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap"
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(fas)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')
