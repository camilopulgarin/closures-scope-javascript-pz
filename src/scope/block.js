// significa que el alcance de las variables definidas en un bloque solo pueden usarse en ese bloque en especifico

function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'kiwi';
        const fruit3 = 'Banana'
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
    /* las siguientes lineas arrojan error ya que estan fuera del bloque y no son variables globales 
    console.log(fruit2)
    console.log(fruit3)
    */

}

fruits()