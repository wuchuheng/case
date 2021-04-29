import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSvgIcon from "vue-svgicon";
import './index.scss'

createApp(App)
    .use(store)
    .use(router)
    .use(VueSvgIcon, {
        tagName: 'svgicon',
        defaultWidth: '1em',
        defaultHeight: '1em'
    })
    .mount('#app')
