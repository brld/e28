var app = new Vue({
  el: '#app',
  data: {
    guessed: false,
    guesses: [],
    hasWon: false,
    answer: Math.floor(Math.random() * Math.floor(101)), // Random number between 1-100, inclusive
    response: 'Lets get going!'
  },
  methods: {
    guess: function() {
      this.guessed = true;
      this.hasWon = this.guesses[0] == this.answer;
      if (this.hasWon == false) {
        if (this.guesses[0] < this.answer) {
          this.response = 'Too low!';
        } else {
          this.response = 'Too high!';
        }
      } else {
        this.response = 'Nice job! You got it!';
      }
    },
    reset: function() { // Reset game to starting state
      this.guessed = false;
      this.guesses = [];
      this.hasWon = false;
      this.answer = Math.floor(Math.random() * Math.floor(101)),
      this.response = 'Lets get going!';
      this.guessValue = '';
    }
  }
});
