import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component();
app.use(router).mount("#app");

router.push("/");
