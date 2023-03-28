const admins = [
      { 
            path: '/admins',
            name: 'admin', 
            children: [
                  { path: '', name: 'user', component: () => import('../pages/Admins.vue') }
            ]
      },
]

export default admins;