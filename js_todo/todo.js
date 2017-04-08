var menuInput;
var todos = [];

menuInput = prompt("What would you like to do?");

while (menuInput !== "quit") {

   if (menuInput === "new") {
      var newIdea = prompt("What would you like to add?");
      todos.push(newIdea);
   } 
   else if (menuInput === "list") {
      todos.forEach(function(todo, i) {
         console.log("******************");
         console.log(i + ": " + todo);
         console.log("******************");
      });
   } 
   else if (menuInput === "delete") {
      var remove = prompt("What is the position of the item you would like to delete?");
      todos.splice(remove, 1);
   }
   else {
      console.log("Not a valid Input!");
   }
   menuInput = prompt("What would you like to do?");
}

console.log("Exiting todo list!");