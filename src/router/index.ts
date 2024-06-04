import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/rust",
    name: "Rust",
    component: () => import("../views/RustView.vue"),
  },
  {
    path: "/csharp",
    name: "Csharp",
    component: () => import("../views/CsharpView.vue"),
  },
  {
    path: "/database",
    name: "Database",
    component: () => import("../views/DatabaseView.vue"),
  },
  {
    path: "/web",
    name: "Web",
    component: () => import("../views/WebdevelopmentView.vue"),
  },
  {
    path: "/construction",
    name: "Construction",
    component: () => import("../views/ConstructionView.vue"),
  },
  {
    path: "/custom",
    name: "Custom",
    component: () => import("../views/CustomView.vue"),
  },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
