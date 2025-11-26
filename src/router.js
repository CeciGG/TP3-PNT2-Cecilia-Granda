import { createRouter, createWebHistory } from "vue-router"

import Formulario from "./components/Formulario/index.vue"
import Api from "./components/Api.vue"


const routes = [
    /* ---- definición de la ruta raíz ---- */
    { path: '/', redirect: '/formulario' },

    /* ---- definición de las rutas activas ---- */
    { path: '/formulario', component: Formulario },
    { path: '/api', component: Api },

    /* ---- definición de las rutas no existentes ---- */
    { path: '/:pathmatch(.*)*', redirect: '/formulario' },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router