import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Notes from "@/views/Notes.vue";
import Pricing from "@/views/Pricing.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/notes",
    component: Notes,
    meta: { title: "Notes" },
  },
  {
    path: "/pricing",
    component: Pricing,
    meta: { title: "Pricing" },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "font-bold text-blue-600",
  linkExactActiveClass: "font-bold text-blue-600",
});

router.beforeEach((to, from, next) => {
  document.title = `Vite - ${to.meta.title}`;
  next();
});
export default router;
