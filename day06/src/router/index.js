import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Catgory from '../components/catgory/Catgory'
import Find from '../components/find/Find'
import Cart from '../components/cart/Cart'
import Mine from '../components/mine/Mine'
import Detail from '../components/detail/Detail'
import Search from '../components/search/Search'
import Login from '../components/mine/Login'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/catgory',
      component: Catgory
    },
    {
      path: '/catgory/:id',
      component: Catgory
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
