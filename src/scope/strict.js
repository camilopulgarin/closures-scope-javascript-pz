'use strict'; // se define para inicializar las reglas del modo stricto de js y manejar mejores practicas
pi = 3.1416; // error por use strict ya que obliga a utilizar var const y let
console.log(pi)

function myFunction(){ // error por use strict ya que obliga a utilizar var const y let
    'use strict';
    return pi = 3.14
}

console.log(myFunction())