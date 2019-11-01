import Vue from 'vue';
import TurnInfo from './components/TurnInfo.vue';

let app = new Vue({
  el: '#app',
  components: {
    'turn-info' : TurnInfo
  },
  data: {
    hasWon: false,
    guessValue: '',
    guessed: false,
    guesses: [],
    answer: Math.floor(Math.random() * Math.floor(101)), // Random number between 1-100, inclusive
    turns: []
  },
  methods: {
    guess: function() {
      let response = '';

      this.guessed = true;
      this.hasWon = this.guesses[0] == this.answer;
      if (this.hasWon == false) {
        if (this.guesses[0] < this.answer) {
          response = 'Too low!';
        } else {
          response = 'Too high!';
        }
      } else {
        response = 'Nice job! You got it!';
      }

      this.turns.push({
        response: response,
      })
    },
    reset: function() {
      this.hasWon = false;
      this.guessed = false;
      this.guesses = [];
      this.answer = Math.floor(Math.random() * Math.floor(101));
      this.turns = [];
    }
  },
});
