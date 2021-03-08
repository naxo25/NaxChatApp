
const routes = [
  {
    path: '/',
    component: () => import('layouts/movil.vue'), //movil
    children: [
      { path: '/users', component: () => import('pages/Users.vue') },
      { path: '/chat', component: () => import('pages/PageChat.vue') },
      { path: '/Login', component: () => import('pages/Login.vue') },
      { path: '/Registro', component: () => import('pages/Registrarse.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes


      /*{ path: '/video', component: () => import('pages/video.vue') },
      { path: '/camara', component: () => import('pages/camara.vue') }, */
      //{ path: '/index', component: () => import('pages/Tareas.vue') },
      //{ path: '/quiz', component: () => import('pages/quiz.vue') },
      //{ path: '/index', component: () => import('pages/index.vue') },