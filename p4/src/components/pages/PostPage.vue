<template>
  <div id='post-page' v-if='post'>
    <h1>{{ post.subject }}</h1>
    <h2>by {{ post.author }}</h2>
    <p>{{ post.date }}</p>
    <hr>
    <p>{{ post.content }}</p>

    <button @click='favorite(post.slug)'>Favorite</button>
    <transition name='fade'>
      <div class='alert' v-if='addAlert'>{{ alertMessage }}</div>
    </transition>

  </div>
</template>

<script>
import * as app from './../../app.js'

  export default {
    name: 'PostPage',
    props: ['slug'],
    data: function() {
      return {
        isFavorite: false, addAlert: null, alertMessage: ''
      };
    },
    computed: {
      post: function() {
        return this.$store.getters.getPostBySlug(this.slug);
      }
    },
    mounted() {
      
    },
    methods: {
      favorite: function(postId) {
        let favorites = new app.Favorites;
        favorites.add(postId)

        this.addAlert = true;

        if (this.isFavorite == false) {
          this.alertMessage = 'Added to favorites!';
          this.isFavorite = true;
          this.$store.commit('updateFavoritesCount', 1)
        } else {
          this.alertMessage = 'Removed from favorites!';
          this.isFavorite = false; 
          this.$store.commit('updateFavoritesCount', -1)
        }

        setTimeout(() => (this.addAlert = false), 1500);
      }
    },
  }
</script>

<style lang="css" scoped>

</style>