import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Accueil/Home.vue'
import Documentation from '../views/Accueil/Doc.vue'
import ContributeurView from '../views/Page/contributeur/contributeur.vue'
import EntrepriseView from '../views/Page/entreprise/entreprise.vue'
import TeamView from '../views/Page/team/team.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contributeur',
      name: 'contributeur',
      component: ContributeurView
    },
    {
      path: '/entreprise',
      name: 'entreprise',
      component: EntrepriseView
    },
    {
      path: '/collectif',
      name: 'collectif',
      component: TeamView
    },
    {
      path: '/Documentation',
      name: 'Documentation',
      component: Documentation
    },
  ]
})

export default router
