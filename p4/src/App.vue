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

export default {
  name: 'app',
  components: {
  },
  data: function() {
    return {
      links: ['feed', 'users', 'favorites', 'new']
    };
  },
  mounted() {
    this.$store.dispatch('setPosts');
  }
}
</script>

<style lang='css'>
@import './assets/css/main.css';
</style>
