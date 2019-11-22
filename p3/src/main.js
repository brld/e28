import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import FeedPage from './components/pages/FeedPage.vue';
import UsersPage from './components/pages/UsersPage.vue';
import PostPage from './components/pages/PostPage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: FeedPage, name: 'feed' },
  { path: '/post/:id', component: PostPage, name: 'post', props: true},
  { path: '/users', component: UsersPage, name: 'users' },
  { path: '/favorites', component: FavoritesPage, name: 'favorites' },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
