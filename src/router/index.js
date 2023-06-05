import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from "@/views/admin/DashBoard.vue";
import ArticleManage from "@/views/admin/ArticleManage.vue";
import CategoryManage from "@/views/admin/CategoryManage.vue";
import TagManage from "@/views/admin/TagManage.vue";
import CreateArtricle from "@/views/admin/CreateArticle.vue";
import ArticleView from "@/views/ArticleView.vue";
// import UserCenter from "@/views/admin/UserCenter.vue";

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    layout:'front'
  },
  {
    path: '/article/:id',
    name:'article',
    component: ArticleView,
    layout: 'front'
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
  },
  {
    path: '/manage/article',
    name:'manageArticle',
    component: ArticleManage,
    layout: 'admin'
  },
  {
    path: '/category/manage',
    name: 'categoryManage',
    component: CategoryManage,
    layout: 'admin'
  },
  {
    path: '/tag/manage',
    name: 'tagManage',
    component: TagManage,
    layout: 'admin'
  },
  {
    path: '/create/article',
    name: 'createArticle',
    component: CreateArtricle,
    layout: 'admin'
  }
  // {
  //   path: '/user/center',
  //   name: 'userCenter',
  //   component: UserCenter,
  //   layout: 'admin'
  // },
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
