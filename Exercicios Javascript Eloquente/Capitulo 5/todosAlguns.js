function every(array, predicate) {
  for (var cont = 0; cont < array.length; cont++) {
    if (!predicate(array[cont])) {
      return false;
    }
  }
  return true;
}

function some(array, predicate) {
  for (var cont = 0; cont < array.length; cont++) {
    if (predicate(array[cont])) {
      return true;
    }
  }
  return false;
}

//TESTES
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
