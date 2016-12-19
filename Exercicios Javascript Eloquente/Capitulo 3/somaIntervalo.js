function range(inicio, fim, step) {
  var array = [];
  if (step == undefined) {
    step = 1;
  }
  if(inicio >= fim) {
    for(var i = inicio; i >= fim; i+=step) {
      array.push(i);
    }
  }
  else {
    for(var i = inicio; i <= fim; i+=step) {
      array.push(i);
    }
  }

  return array;
}

function sum(array) {
  var soma = 0;
  for(var i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
