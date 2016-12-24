var line = "";
var size = 8;
for (var col = 0; col < size; col++) {
   for (var lin = 0; lin < size; lin++) {
      if (col % 2 === 0) {
         if (lin % 2 === 0)
           line += "#";
         else
           line += " ";
      }
      else {
        if (lin % 2 === 0)
          line += " ";
        else
          line += "#";
      }
   }
   console.log(line);
   line = "";
}
