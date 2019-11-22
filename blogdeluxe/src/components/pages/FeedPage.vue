<template>
  <div>
    <h1>Feed</h1>
    <display-all-posts></display-all-posts>
    <div class='a' v-bind:class="['b', 'c', { d : true }]"></div>
  </div>
</template>

<script>
import DisplayAllPosts from './../DisplayAllPosts.vue';

  export default {
    name: 'HomePage',
    components: { DisplayAllPosts },
    data: function() {
      return {};
    }
  }
</script>

<style lang="scss" scoped>

</style>