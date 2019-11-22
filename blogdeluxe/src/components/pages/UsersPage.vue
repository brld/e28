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
const axios = require('axios');

  export default {
    name: 'UsersPage',
    data: function() {
      return { posts: null, users: null};
    },
    methods: {
      loadUsers: function() {
        let users = this.posts.map(post => post.author);
        let mergedUsers = [].concat.apply([], users);
        
        this.categories = [...new Set(mergedUsers)].sort();
      }
    },
    mounted() {
      axios.get('https://my-json-server.typicode.com/brld/e28-api/posts').then(response => {
        this.posts = response.data;
        this.loadUsers();
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>