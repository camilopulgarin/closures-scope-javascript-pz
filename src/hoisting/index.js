
//Hoisting en variables declaradas con var
console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"


// Hoisting en scope de bloque -> referencia a que el let solo vive dentro de su entorno

if (true){
    var saludo = "hola"
    let despedida = "chao"
}
  
console.log(saludo)
//console.log(despedida)

var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
//console.log(despedida) 
// ReferenceError: despedida is not defined

// Hoisting en funciones


console.log( saludar() )

function saludar() {
  return "Hola"
}

// Hoisting
function saludar() {
    return "Hola"
  }
  
console.log( saludar() ) // "Hola"

//Hoisting de variables dentro de una función

function scope() {
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    var nombre = "Andres"
    var edad = 20
    for (var i = 0; i< 6; i++) {
    //...
    }
}

//JavaScript lo interpretaría como lo siguiente:

function scope() {
    var nombre = undefined
    var edad = undefined
    var i = undefined
    
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    nombre = "Andres"
    edad = 20
    for ( i = 0; i< 6; i++) {
    
    //
    }
  }

// Hosting en funciones asignadas a variables

//console.log( saludar2(), "pppppp" )

var saludar2 = function saludar() {
  return "hola"
}

//Asi lo interpreta js

var saludar = undefined

//console.log( saludar2() ) // TypeError: saludar is not a function

saludar2 = function saludar() {
  return "hola"
}

//Hoisting con let y const

console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"