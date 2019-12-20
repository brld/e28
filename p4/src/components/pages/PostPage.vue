<template>
  <div id='post-page' v-if='post'>
    <h1>{{ post.subject }}</h1>
    <h2>by {{ post.author }}</h2>
    <p>{{ post.date }}</p>
    <hr>
    <p>{{ post.content }}</p>

    <button @click='favorite(post.slug)'>{{ this.buttonText }}</button>
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
        isFavorite: false, addAlert: null, alertMessage: '', buttonText: 'Favorite'
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
      favorite: function(postSlug) {
        let favorites = new app.Favorites;

        this.addAlert = true;

        if (this.isFavorite == false) {
          this.alertMessage = 'Added to favorites!';
          this.buttonText = 'Un-favorite'
          this.isFavorite = true;
          favorites.add(postSlug)
        } else {
          this.alertMessage = 'Removed from favorites!';
          this.buttonText = 'Favorite'
          this.isFavorite = false; 
          favorites.remove(postSlug)
        }

        setTimeout(() => (this.addAlert = false), 1500);
      }
    },
  }
</script>

<style lang="css" scoped>

</style>