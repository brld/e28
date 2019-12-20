import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import FeedPage from './components/pages/FeedPage.vue';
import UsersPage from './components/pages/UsersPage.vue';
import PostPage from './components/pages/PostPage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';
import NewPostPage from './components/pages/NewPostPage.vue';

/* eslint-disable no-unused-vars */
const _ = require('lodash')
/* eslint-enable no-unused-vars */

import store from './store/index.js';
import Vuelidate from 'vuelidate';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: FeedPage, name: 'feed' },
  { path: '/post/new', component: NewPostPage, name: 'new' },
  { path: '/post/:slug', component: PostPage, name: 'post', props: true},
  { path: '/users', component: UsersPage, name: 'users' },
  { path: '/favorites', component: FavoritesPage, name: 'favorites' },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
