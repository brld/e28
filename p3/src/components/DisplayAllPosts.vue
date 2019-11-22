<template>
  <div id="all-posts">
    <display-post v-for='post in posts' :key='post.id' :post='post'></display-post>
  </div>
</template>

<script>
const axios = require('axios');
import DisplayPost from './DisplayPost.vue';

export default {
  name: 'DisplayAllPosts',
  components: { DisplayPost },
  data: function() {
    return {
      posts: null
    };
  },
  mounted() {
    axios.get('https://my-json-server.typicode.com/brld/e28-api/posts').then(response => {
      this.posts = response.data;
    });
  }
}
</script>

<style>
</style>