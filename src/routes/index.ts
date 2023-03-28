import { createRouter, createWebHistory } from 'vue-router';
import admins from './admin';
const routes = [
      ...admins
]

const router = createRouter({
      history: createWebHistory(),
      routes
});

export default router;