import { createWebHashHistory, createRouter } from "vue-router";
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
    path: "/communication",
    name: "Communication",
    component: () => import("../views/CommunicationView.vue"),
  },
  {
    path: "/excel",
    name: "Excel",
    component: () => import("../views/ExcelView.vue"),
  },
  {
    path: "/regex",
    name: "Regular_Epressions",
    component: () => import("../views/RegexView.vue"),
  },
  {
    path: "/:notFound(.*)*",
    name: "NotFound",
    component: () => import("../views/NotfoundView.vue"),
    meta: { showLink: false } /* stop from showing at top of the page */
  },
  {
    path: "/custom",
    name: "Custom",
    component: () => import("../views/CustomView.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
