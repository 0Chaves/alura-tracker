import { createRouter, createWebHistory } from 'vue-router';
import TarefasView from '@/views/TarefasView.vue';
import ProjetosView from '@/views/ProjetosView.vue';

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: TarefasView
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: ProjetosView
  }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;