var app = new Vue({
  el: '#app',
  data: {
    guesses: [],
    answer: Math.floor(Math.random() * Math.floor(101)), // Random number between 1-100, inclusive
  },
  methods: {
    guess: function() {

    }
  }
});
