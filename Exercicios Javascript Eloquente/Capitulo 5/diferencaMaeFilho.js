var ANCESTRY_FILE = require("./ancestry.js");


var ancestry = ANCESTRY_FILE;
console.log(ancestry.length);


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function hasKnownMother(person) {
  return byName[person.mother] != null;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
})

var array = ancestry.filter(hasKnownMother(byName)).map(function(person) {
  return person.born - byName[person.mother].born;
});


console.log(average(array));
