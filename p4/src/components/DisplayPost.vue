<template>
  <div class='post'>
    <router-link id='post-link' :to='{ name: "post", params: {"slug" : post.slug }}'>
      <div class='post-author'>{{ post.author }}</div>
      <div class='post-date'>{{ post.date }}</div>
      <div class='post-subject'>{{ post.subject }}</div>
      <hr>
      <ul class='post-tags'>
        <li v-for="tag in post.tags" :key="tag">#{{ tag }}</li>
      </ul>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'DisplayPost',
  props: ['post'],
}
</script>

<style>
</style>