import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HobbiesView from "../views/HobbiesView.vue";
import SkillsView from "../views/SkillsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Who Am I - José Ferreira",
    },
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
    meta: {
      title: "My skills - José Ferreira",
    },
  },
  {
    path: "/hoobies",
    name: "hoobies",
    component: HobbiesView,
    meta: {
      title: "Hobbies - José Ferreira",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
