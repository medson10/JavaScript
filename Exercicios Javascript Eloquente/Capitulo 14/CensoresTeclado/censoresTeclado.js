//Recebe o primeiro campo com a tag <input> que encontrar
var field = document.querySelector("input");

//Os codigos das teclas Q,W,X são respectivamente 81, 87, 88
//Por estar usando o argumento keydown não é necessario tratar casos de letras maiusculas e minusculas

field.addEventListener("keydown", function(event) {
  if (event.keyCode == 81 || event.keyCode == 87 || event.keyCode == 88 ) {
    event.preventDefault();
  }
});
