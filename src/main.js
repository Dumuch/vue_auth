import Vue from "vue";
import firebase from "firebase";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
const firebaseConfig = require("../fire-base-config.js");

firebase.initializeApp(firebaseConfig.config);
firebase.auth().onAuthStateChanged(function () {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});
