<template>
  <div>
    <h1>Feed</h1>
    <display-all-posts></display-all-posts>
  </div>
</template>

<script>
import DisplayAllPosts from './../DisplayAllPosts.vue';

// import * as app from './../../app.js'

  export default {
    name: 'FeedPage',
    components: { DisplayAllPosts },
    data: function() {
      return {};
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

<style lang="scss" scoped>

</style>