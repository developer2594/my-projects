import { createApp } from "vue";
import App from "./App.vue";
import vuelidate from "@vuelidate/core";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

createApp(App).use(vuelidate).use(store).use(router).mount("#app");
