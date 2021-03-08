
const routes = [
  {
    path: '/',
    component: () => import('layouts/web.vue'), //web
    children: [
      { path: '/Login', component: () => import('pages/Login.vue') },
      { path: '/Registro', component: () => import('pages/web/Registrarse.vue') },
      { path: '/video', component: () => import('pages/videoweb.vue') },
      { path: '/', component: () => import('pages/web/PageChat.vue') } ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes