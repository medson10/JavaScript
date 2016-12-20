var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(union, single) {
   for(var x = 0; x < single.length; x++) {
     union.push(single[x]);
   }
   return union;
}))
