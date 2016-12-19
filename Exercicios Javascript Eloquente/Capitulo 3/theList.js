function arrayToList(array) {
  // Aponta para o primeiro elemento da lista
   var inicio = {};
   // Aponta para o valor que esta sendo tratado
   var aux = {};
   // Aponta para o valor anteriormente tratado
   var ant = {};
   for(var i = 0; i < array.length; i++) {
      if (i === 0) {
        inicio.value = array[i];
        inicio.rest = null;
        ant = inicio;
      }
      else {
        aux = {value: array[i], rest: null };
        ant.rest = aux;
        ant = aux;
      }
   }
   return inicio;
}

function listToArray(inicio) {
   var array = [];
   for(var node = inicio; node; node = node.rest) {
      array.push(node.value);
   }
   return array;
}

function prepend(elemento, lista) {
   return inicio = {value: elemento, rest: lista};
}

function nth(lista, posicao) {
   for(var node = lista, cont = 0; node; node = node.rest, cont++) {
      if(cont == posicao) {
         return node.value;
      }
   }
}

//Testes
console.log(arrayToList([10,20]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
