import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use( VueRouter );

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/atendimento',
    name: 'atendimento',
    component: () => import('../views/ChatView.vue'),
  },
  // {
  //   path: '/contatos',
  //   name: 'Contatos',
  //   component: () => import('../views/Contatos.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
