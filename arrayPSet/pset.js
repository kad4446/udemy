function printReverse(array) {
   for (var i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
   }
}

function isUniform(array) {
   var uniform = true;
   for (var i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) {
         uniform = false;
      }
   }
   return uniform;
}

function sumArray(array) {
   var sum = 0;
   array.forEach(function(item) {
      sum += item;
   });
   return sum;
}

function max(array) {
   var max = array[0];
   array.forEach(function(item) {
      if (item > max) {
         max = item;
      }
   });
   return max;
}