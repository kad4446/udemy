

function kebabToSnake(kebab) {
   var snake = kebab.replace(/-/g, "_");

   return snake;
}

var word = prompt("Enter a kebab");
var newWord = kebabToSnake(word);
console.log("The original word was: " + word);
console.log("The new word is " + newWord);