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
import * as app from './app.js'

export default {
  name: 'app',
  components: {
  },
  data: function() {
    return {
      links: ['feed', 'users', 'favorites', 'new']
    };
  },
  computed: {
    favoritesCount: function() {
      return this.$store.state.favoritesCount;
    }
  },
  mounted() {
    this.favorites = new app.Favorites();

    this.$store.commit('setFavoritesCount', this.favorites.count());

    this.$store.dispatch('setPosts');
  }
}
</script>

<style lang='css'>
@import './assets/css/main.css';
</style>
