for(var cont = 1; cont <= 100; cont++) {
   if(cont % 3 === 0 || cont % 5 === 0) {
      if(cont % 3 === 0 && cont % 5 === 0)
        console.log("FizzBuzz");
      else
        if(cont % 3 === 0)
          console.log("Fizz");
        else
          console.log("Buzz");
   }
   else
     console.log(cont);
}
