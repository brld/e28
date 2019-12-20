<template>
  <div id='favorites-page'>
    <h1>Favorites</h1>

    <div v-if='favorites.length == 0' id="no-favorites">You don't have any favorites yet... go browse our blog!</div>

    <ul v-else-if='favorites.length > 0'>
      <li v-for='favorite in favorites' :key='favorite.slug'>
        <button @click='removeFavorite(favorite.slug)'>Un-favorite</button>
        {{ getPostDetails(favorite.slug)['subject'] }} by {{ getPostDetails(favorite.slug)['author'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js'

export default {
  name: 'FavoritesPage',
  data: function() {
    return {
      favorites: [],
      allFavorites: null,
    };
  },
  methods: {
    getPostDetails(postSlug) {
      return this.$store.getters.getPostBySlug(postSlug);
    },
    removeFavorite: function(postSlug) {
      this.allFavorites.remove(postSlug);
    }
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.allFavorites = new app.Favorites();
    
    this.favorites = this.allFavorites.getPosts();
  }
};
</script>