// variables

var a; //declarando

var b = 'b'; // declaramos // asignamos

b = 'bb' // reasignacion

var a = 'aa' // redeclaracion

// Global Scope
var fruit = 'Apple' // global
console.log(fruit)

function besFruit() {
    console.log(fruit);
}

besFruit()


// Declaracion de variable global - no importa el lugar de su definicion, siempre se puede llamar

function countries() {
    country = 'Colombia';
    console.log(country)
}

countries();
console.log(country);