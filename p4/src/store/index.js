import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      favoritesCount: 0,
      posts: null
    },
    mutations: {
      setFavoritesCount(state, payload) {
        state.favoritesCount = payload;
      },
      updateFavoritesCount(state, payload) {
        state.favoritesCount += payload;
      },
      setPosts(state, payload) {

        console.log('success');
        state.posts = payload;
      },
      createPost(state, payload) {
        _.merge(state.posts, payload)
      }
    },
    actions: {
      setPosts(context) {
        app.axios.get(app.config.api + 'posts.json').then(response => {
          context.commit('setPosts', response.data)
        })
      }
    },
    getters: {
      getPostBySlug(state) {
        return function (slug) {
          return _.find(state.posts, { 'slug': slug });
        }
      }
    }
})