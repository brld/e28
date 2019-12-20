<template>
  <div id="all-posts">
    <display-post v-for='post in posts' :key='post.id' :post='post'></display-post>
  </div>
</template>

<script>
import DisplayPost from './DisplayPost.vue';

// import * as app from './../app.js'

export default {
  name: 'DisplayAllPosts',
  components: { DisplayPost },
  data: function() {
    return {
    };
  },
  mounted() {
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    }
  }
}
</script>

<style>
</style>