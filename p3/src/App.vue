<template>
  <div id="app">
    <header>
      <nav>
        <router-link v-for='link in links' :key='link' :to='{ name: link }' exact>{{ link }}</router-link>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>
 
<script>
import { posts } from './posts.js';

export default {
  name: 'app',
  components: {
  },
  data: function() {
    return {
      posts: posts,
      links: ['feed', 'users', 'favorites']
    };
  },
  mounted() {
  }
}
</script>

<style lang='css'>
@import './assets/css/main.css';
</style>
