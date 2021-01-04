import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Firebase
import {firebaseConfig} from "./config/configFirebase";
import firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
