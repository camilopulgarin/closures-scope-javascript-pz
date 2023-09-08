
// Funcion que no almacena datos en el tiempo
/*function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5)
moneyBox(5)*/

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxAna = moneyBox();

myMoneyBoxAna(10);
myMoneyBoxAna(15);
myMoneyBoxAna(15);

// Ejercicio
export function createPetList() {
    // Tu código aquí 👈
    let savePet = [];
    function savePets(pet) {
      console.log(pet)
      if (pet) {
        //console.log(pet)
        return savePet.push(pet)
        //console.log(savePet)
      } else {
        return savePet
      }
  
    }
    return savePets
  }
  
// Solucion Platzi
export function createPetList() {
    const petList = []
    return function(pet){
        if(pet){
          petList.push(pet)
          return petList
        }
        return petList
    }
  }
  