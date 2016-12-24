function countBs (frase) {
   return countChar(frase, "B");
}

function countChar (frase, letra) {
  var total = 0;
  for(var cont = 0; cont < frase.length; cont++) {
     if(frase.charAt(cont) === letra) {
       total += 1;
     }
  }
  return total;
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
