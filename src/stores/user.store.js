import { request } from '@/helpers';

export const useAuthStore = () => ({
      id: 'auth',
      state: () => ({
            // initialize state from local storage to enable user to stay logged in
            user: JSON.parse(localStorage.getItem('user')),
            returnUrl: null
      }),
      actions: {
            async login(username, password, remember = false) {
                  const user = await request.post(`auth/login`, { username, password });

                  // // update pinia state
                  // this.user = user;

                  // // store user details and jwt in local storage to keep user logged in between page refreshes
                  // localStorage.setItem('user', JSON.stringify(user));

                  // // redirect to previous url or default to home page
                  // router.push(this.returnUrl || '/');
            },
            logout() {
                  this.user = null;
                  localStorage.removeItem('user');
                  router.push('/login');
            }
      }
});