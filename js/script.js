const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector("button");
const letterInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const guessesRemainingElement = document.querySelector(".remaining");
const remainingDisplay = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = []

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    progress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    console.log(guess);
    
    const goodGuess = validateInput(guess);
})


const validateInput = function(input){
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter."
  } 
  else if (input.length > 1) {
    message.innerText = "Please enter only one letter."
  }
  else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z."
  }
  else {
    return input
  }
};

const makeGuess = function(guess) {
  guess = guess.toUppercase();
  if(guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed this letter.";
  } else {
    guessedLetters.push(guess);
  }
}