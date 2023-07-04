import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./page/Home.vue";
import Projects from "./page/Projects.vue";
import Contact from "./page/Contact.vue";
import "./style.scss";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
