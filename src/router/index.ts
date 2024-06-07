import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContributeurView from "@/views/ContributeurView.vue";
import EntrepriseView from "@/views/EntrepriseView.vue";
import TeamView from "@/views/TeamView.vue";
import TeamMembers from "@/views/team/TeamMembers.vue";
import TeamPartnerOrganizations from "@/views/team/TeamPartnerOrganizations.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contributeur",
      name: "contributeur",
      component: ContributeurView,
    },
    {
      path: "/entreprise",
      name: "entreprise",
      component: EntrepriseView,
    },
    {
      path: "/collectif",
      name: "collectif",
      component: TeamView,
      children: [
        { path: "", redirect: "/collectif/membres" },
        { path: "membres", name: "collectif-membres", component: TeamMembers },
        {
          path: "organisations",
          name: "collectif-organisations",
          component: TeamPartnerOrganizations,
        },
      ],
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("@/views/RulesViews.vue"),
    },
  ],
});

router.afterEach((to) => {
  if (to.hash) {
    setTimeout(() => {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
export default router;
