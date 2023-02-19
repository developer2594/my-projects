import { createApp } from "vue";
import App from "./App.vue";
import vuelidate from "@vuelidate/core";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_07fcCspedsLJZJqeVSVdOT0oNuV1378",
  authDomain: "vladilen-vue-88f26.firebaseapp.com",
  projectId: "vladilen-vue-88f26",
  storageBucket: "vladilen-vue-88f26.appspot.com",
  messagingSenderId: "82177084303",
  appId: "1:82177084303:web:ab1d6597bf944f2b7d19fa",
  measurementId: "G-F61LER97WE",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createApp(App).use(auth).use(vuelidate).use(store).use(router).mount("#app");
