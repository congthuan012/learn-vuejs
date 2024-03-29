import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores';

export const router = createRouter({
      history: createWebHistory(),
      linkActiveClass: "active",
      routes: [
            {
                  path: "/",
                  name: "index",
                  component: () => import("@/views/User/List.vue")
            },
            {
                  path: "/login",
                  name: "login",
                  component: () => import("@/views/Login.vue")
            },
      ],
});

router.beforeEach(async (to) => {
      // redirect to login page if not logged in and trying to access a restricted page
      const publicPages = ["/login"];
      const authRequired = !publicPages.includes(to.path);
      const auth = useAuthStore();

      if (authRequired && !auth.user) {
            auth.returnUrl = to.fullPath;

            return "/login";
      }
});
