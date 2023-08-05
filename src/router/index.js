import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/artisticos',
    name: 'artisticos',
    component: () => import('../views/Acontecimientos/ArtisticosView.vue')
  },
  {
    path: '/deportivos',
    name: 'deportivos',
    component: () => import ('../views/Acontecimientos/DeportivosView.vue')
  },
  {
    path: '/mas',
    name: 'mas',
    component: () => import ('../views//Acontecimientos/MasView.vue')
  },
  {
    path: '/arquitectura',
    name: 'arquitectura',
    component: () => import ('../views/Folklore/ArquitecturaView.vue')
  },
  {
    path: '/artesanias',
    name: 'artesanias',
    component: () => import ('../views/Folklore/ArtesaniasView.vue')
  },
  {
    path: '/comida',
    name: 'comida',
    component: () => import ('../views/Folklore/ComidaView.vue')
  },
  {
    path: '/ferias',
    name: 'ferias',
    component: () => import ('../views/Folklore/FeriasView.vue')
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: () => import ('../views/Folklore/GruposView.vue')
  },
  {
    path: '/manifestaciones',
    name: 'manifestaciones',
    component: () => import ('../views/Folklore/ManifestacionesView.vue')
  },
  {
    path: '/musica',
    name: 'musica',
    component: () => import ('../views/Folklore/MusicaView.vue')
  },
  {
    path: '/centros',
    name: 'centros',
    component: () => import ('../views/Realizaciones/CentrosView.vue')
  },
  {
    path: '/agropecuario',
    name: 'agropecuario',
    component: () => import ('../views/Realizaciones/AgropecuariasView.vue')
  },
  {
    path: '/mineria',
    name: 'mineria',
    component: () => import ('../views/Realizaciones/MineriaView.vue')
  },
  {
    path: '/industria',
    name: 'industria',
    component: () => import ('../views/Realizaciones/IndustriaView.vue')
  },
  {
    path: '/artetec',
    name: 'artetec',
    component: () => import ('../views/Realizaciones/ArtetecView.vue')
  },
  {
    path: '/ruinas',
    name: 'ruinas',
    component: () => import ('../views/Museos/RuinasView.vue')
  },
  {
    path: '/lhistoricos',
    name: 'lhistoricos',
    component: () => import ('../views/Museos/LhistoricosView.vue')
  },
  {
    path: '/arte',
    name: 'arte',
    component: () => import ('../views/Museos/ArteView.vue')
  },
  {
    path: '/parques',
    name: 'parques',
    component: () => import ('../views/Sitios/ParquesView.vue')
  },
  {
    path: '/termas',
    name: 'termas',
    component: () => import ('../views/Sitios/TermasView.vue')
  },
  {
    path: '/caminos',
    name: 'caminos',
    component: () => import ('../views/Sitios/CaminosView.vue')
  },
  {
    path: '/cazapesca',
    name: 'cazapesca',
    component: () => import ('../views/Sitios/CazaPescaView.vue')
  },
  {
    path: '/florafauna',
    name: 'florafauna',
    component: () => import ('../views/Sitios/FloraFaunaView.vue')
  },
  {
    path: '/grutascavernas',
    name: 'grutascavernas',
    component: () => import ('../views/Sitios/GrutasCavernasView.vue')
  },
  {
    path: '/cascadas',
    name: 'cascadas',
    component: () => import ('../views/Sitios/CascadasView.vue')
  },
  {
    path: '/rios',
    name: 'rios',
    component: () => import ('../views/Sitios/RiosView.vue')
  },
  {
    path: '/lagos',
    name: 'lagos',
    component: () => import ('../views/Sitios/LagosView.vue')
  },
  {
    path: '/costas',
    name: 'costas',
    component: () => import ('../views/Sitios/CostasView.vue')
  },
  {
    path: '/planicies',
    name: 'planicies',
    component: () => import ('../views/Sitios/PlaniciesView.vue')
  },
  {
    path: '/mountain',
    name: 'mountain',
    component: () => import ('../views/Sitios/MountainView.vue')
  },
  {
    path: '/image',
    name: 'image',
    component: () => import ('../views/ImageView.vue')
  },
  {
    path: '/museoobj',
    name: 'museoobj',
    component: () => import ('../views/MuseoOBJView.vue')
  },
  {
    path: '/museos',
    name: 'museos',
    component: () => import ('../views/Museos/MuseosView.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
