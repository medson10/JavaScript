var ancestry = require("./ancestry.js");

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupName) {
  var groups = [];
  array.forEach(function(person) {
    var century = groupName(person);
    if(century in groups) {
      groups[century].push(person);
    }
    else {
      groups[century] = [];
      groups[century].push(person);
    }
  });
  return groups;
}

var arrayCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});


for(var century in arrayCentury) {
  var ages = arrayCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + " : " + average(ages));
}
