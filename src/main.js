import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "tailwindcss/tailwind.css";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";

createApp(App).use(router).mount("#app");
