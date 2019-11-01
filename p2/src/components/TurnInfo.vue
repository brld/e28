<template>
  <div>
    <p>{{ response }}</p>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
      }
    },
    props: {
      'response': {
        type: String,
        default: ''
      }
    },
  }
</script>

<style>
</style>
