//  Declaracion
var firstName; //Undefined
// Asignacion
firstName = 'Oscar';
console.log(firstName)

// Declaracion y asignacion
var lastName = 'David';

lastName = 'Ana';// reasignacion
console.log(lastName)


var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // redeclarar
console.log(secondName)


// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar

// para el caso de let no podemos redeclarar una variable
//let fruit = 'Apple'; // declarar y asignar


// const
const animal = 'dog';
// Error ya que no se puede reasignar una constante
animal = 'cat';

//const animal = 'Snake'; // como en el ejemplo anterior tampoco se puede redeclarar una cosntante

// Array 
const vehicles = [];
vehicles.push("car"); // se pueden agregar elementos ya que la referencia existe y podemos utilizar el metodo push, no modificamos la referecia
console.log(vehicles);

vehicles.pop(); // se pueden eliminar elementos ya que la referencia existe y podemos utilizar el metodo push, no modificamos la referecia
console.log(vehicles)


