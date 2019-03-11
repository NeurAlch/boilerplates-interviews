import Vue from "vue";
import App from "./App.vue";

const app = new Vue({
    render: (r) => r(App)
});

app.$mount("#app");