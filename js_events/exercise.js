var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function () {
   if (body.style.background === 'white') {
      body.style.background = "purple";
   } else {
         body.style.background = "white";
   }

});