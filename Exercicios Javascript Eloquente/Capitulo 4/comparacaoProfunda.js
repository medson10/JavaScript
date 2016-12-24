function deepEqual(obj1, obj2) {
  var cont = 0;
  if (obj1 === obj2) {
    return true;
  }
  else {
   if (typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null) {
      if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (x in obj1) {
          return deepEqual(obj1[x], obj2[x]);
        }
      }
      else {
          return false;
      }
   }
   else {
      return false;
   }
 }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
