<template>
  <div>
    <h1>Users</h1>
    <table>
      <tr id="users" v-for='(post, id) in posts' :key='id'>
        <td>{{ post.author }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import * as app from './../../app.js'

  export default {
    name: 'UsersPage',
    data: function() {
      return {
        
      };
    },
    computed: {
      posts: function() {
        return this.$store.state.posts;
      },
      users: function() {
        let users = _.map(this.posts, 'author');
        let mergedUsers = [].concat.apply([], users);
        
        return [...new Set(mergedUsers)].sort();
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

</style>