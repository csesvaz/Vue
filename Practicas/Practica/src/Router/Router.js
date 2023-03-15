import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: () => import("../App.vue") },
  {
    path: "/lista",
    component: () => import("../components/TarjetaComponente.vue"),
    children:[{path: "detalles/:id", component: () => import("../App.vue")}]
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
