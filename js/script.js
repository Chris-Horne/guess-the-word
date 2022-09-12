const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector("button");
const letterInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const guessesRemainingElement = document.querySelector(".remaining");
const remainingDisplay = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
    const guess = letterInput.value;
    console.log(guess);
})