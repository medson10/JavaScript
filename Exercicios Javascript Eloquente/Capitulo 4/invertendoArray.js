function reverseArray(array) {
   var arrayInvertido = [];
   for(var i = 0; i < array.length; i++) {
     arrayInvertido.unshift(array[i]);
   }
   return arrayInvertido;
}

function reverseArrayInPlace(array) {
  var aux = 0;
  var length = array.length;
   for(var i = 0; i <= Math.floor(length / 2); i++) {
     aux = array[i];
     array[i] = array[length - 1 - i];
     array[length - 1 - i] = aux;
   }
}

/* Trapaça
function reverseArrayInPlace(array) {
  var arrayInvertido = reverseArray(array);
  for(var i = 0; i < arrayInvertido.length; i++) {
     array[i] = arrayInvertido[i];
  }
}

*/
console.log(reverseArray(["A","B","C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
