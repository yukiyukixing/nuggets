import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './home'
import boilingRoute from './boiling'
import searchRoute from './search'
import bookRoute from './book'
import mineRoute from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRoute,
    boilingRoute,
    searchRoute,
    bookRoute,
    mineRoute,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
