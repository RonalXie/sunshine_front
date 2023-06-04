import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from "@/views/admin/DashBoard.vue";

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    layout:'front'
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
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DashBoard,
    layout: 'admin'
  }
]
function addLayoutToRoute( route, parentLayout = "empty" )
{
  route.meta = route.meta || {} ;
  route.meta.layout = route.layout || parentLayout ;

  if( route.children )
  {
    route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
  }
  return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;
const router = new VueRouter({
  routes
})

export default router
