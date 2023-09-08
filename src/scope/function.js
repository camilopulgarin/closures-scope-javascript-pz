
// Function scope, es el alcance limite que tiene el entorino de una funcion
function greeting() {
    let useName = 'Ana';
    console.log(useName)
    if (useName === 'Ana') {
        console.log(`Hello ${useName}`)
    }
}

greeting()

// No es posible alcanzar a la variable porque esta definida dentro de la funcion
console.log(useName)
