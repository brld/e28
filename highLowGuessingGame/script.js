let guessButton = document.getElementById('guess');

guessButton.addEventListener('click', guess);

function guess() {
	let max = 75
  let min = 1

  let guessed = false

  let randomNum = Math.floor(Math.random() * (max - min + 1) + min); // W3Schools

  console.log(randomNum);

  while (guessed == false) {
    var guess = prompt("Enter a random number from " + min + " to " + max);
    if (randomNum < guess) {
      alert("Too high!");
    } else if (randomNum > guess) {
      alert ("Too low!");
    } else if (randomNum == guess) {
      alert ("You got it!");
      guessed = true;
    }
  }
}
	
