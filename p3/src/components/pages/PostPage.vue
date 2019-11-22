<template>
  <div id='post-page' v-if='post'>
    <h1>{{ post.subject }}</h1>
    <h2>by {{ post.author }}</h2>
    <p>{{ post.date }}</p>
    <hr>
    <p>{{ post.content }}</p>

    <button @click='favorite(post.id)'>Favorite</button>
    <transition name='fade'>
      <div class='alert' v-if='addAlert'>{{ alertMessage }}</div>
    </transition>

  </div>
</template>

<script>
const axios = require('axios');

import Favorites from './../../favorites.js'

  export default {
    name: 'PostPage',
    props: ['id'],
    data: function() {
      return {
        post: null, isFavorite: false, addAlert: null, alertMessage: ''
      };
    },
    mounted() {
      axios.get('https://my-json-server.typicode.com/brld/e28-api/posts/' + this.id).then(response => {
        this.post = response.data;
      });
    },
    methods: {
      favorite: function(postId) {
        let favorites = new Favorites;
        favorites.toggle(postId)

        this.addAlert = true;

        if (this.isFavorite == false) {
          this.alertMessage = 'Added to favorites!';
          this.isFavorite = true;
        } else {
          this.alertMessage = 'Removed from favorites!';
          this.isFavorite = false;
        }

        setTimeout(() => (this.addAlert = false), 1500);
      }
    },
  }
</script>

<style lang="css" scoped>

</style>