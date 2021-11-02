import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入公共样式css + js
import './assets/css/reset.css'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import installElementPlus from './plugins/element'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')