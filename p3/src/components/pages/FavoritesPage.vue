<template>
  <div id='favorites-page'>
    <h1>Favorites</h1>

    <div v-if='favorites.length == 0' id="no-favorites">You don't have any favorites yet... go browse our blog!</div>

    <ul v-else-if='favorites.length > 0'>
      <li v-for='favorite in favorites' :key='favorite.id'>
        <button @click='removeFavorite(favorite.id)'>Un-favorite</button>
        {{ getPostDetails(favorite.id)['subject'] }} by {{ getPostDetails(favorite.id)['author'] }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');

import Favorites from './../../favorites.js'

export default {
  name: 'FavoritesPage',
  data: function() {
    return {
      favorites: [],
      allFavorites: null,
      posts: []
    };
  },
  methods: {
    getPostDetails(postId) {
      return this.posts.find(({ id }) => id === postId);
    },
    removeFavorite: function(postId) {
      this.allFavorites.remove(postId);
    }
  },
  mounted() {
    this.allFavorites = new Favorites();
    
    this.favorites = this.allFavorites.getPosts();

    this.posts = axios.get('https://my-json-server.typicode.com/brld/e28-api/posts').then(response => (this.posts = response.data));
  }
};
</script>