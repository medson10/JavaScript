function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function hasKnownMother(person) {
  return person.bornMom != null;
}

function age(year) {
  return 2016 - year;
}

/*
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
}) */
var array = [];
array.push({name: "Jud", born: 1990, bornMom: 1965});
array.push({name: "Juli", born: 1992, bornMom: 1967});
array.push({name: "Mike", born: 1993, bornMom: 1968});
array.push({name: "Liz", born: 1994, bornMom: 1969});
array.push({name: "Glen", born: 1995, bornMom: 1971});

console.log(average(array.filter(hasKnownMother));
