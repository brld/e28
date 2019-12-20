import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      posts: null
    },
    mutations: {
      setPosts(state, payload) {
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