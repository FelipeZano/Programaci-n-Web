/*Indice mas alto = 2 osea que total de elementos es 3 */ 

/*Arreis van siempre en Mayuscula  se hacen en const y se pueden modificar igual*/


console.log("Hola")
let array1 = [1,2,3]
console.log(array1)
console.log(array1[0]);

const ARRAY2 = [1]
//Metodos de arrays
//Pop : Elimina el ultimo elemento

array1.pop()

//Push: añade un elemento al array

array1.push(3,14)
console.log(array1);

//Shift: elimina el primer elemento del array
//Unshift: agrega un elemento al principio del array

console.log(array1[5]);

// Map

//Reduce: Aplica una operacion sobre toda una lista (Poco usable) 

//indexof: Me indica en que posición esta el elemento que estoy buscando 
console.log(array1.indexOf("Esteban"));
1
//Find : Encuentra con conidciones

//While-->

//Hasta aca son apuntes de clase-->

// Desde aca hay u intento de generar elsubtotal

const PrecioCombo=[400]
const PrecioSpray=[300]
const PrecioGotero=[200]

const NUMCombo= document.getElementById("Cant.Combo")
const NUMSpray= document.getElementById("Cant.Spray")
const NUMGotero= document.getElementById("Cant.Gotero")

let Subtotal = document.getElementById("Subtotal");

function actualizarSubtotal() {
    const CantidadCombo = parseInt(NUMCombo);
    const CantidadSpray = parseInt(NUMSpray);
    const CantidadGotero = parseInt(NUMGotero);

    let Subtotal1 = [(PrecioCombo * CantidadCombo) + (PrecioSpray * CantidadSpray) + (PrecioGotero * CantidadGotero)];

    //document.querySelector("Subtotal").innerHTML= Subtotal1
    //  Subtotal.textContent = Subtotal1;
}

actualizarSubtotal()

// Haasta aca hay u intento de generar el subtotal


// Desde Aca le voy a dar funcion a los botones 
//para que varien las canrtidades en la pagina


//Declaración de variables para el aumento
const BotonSuma = document.getElementById("BotonSuma");
const CantCombo = document.getElementById("CantCombo");

let contador = 0 

function BotonesSuma(){

    contador++;
    CantCombo.textContent = contador

}

BotonesSuma()


BotonSuma.addEventListener("click", BotonesSuma)


// HastaAca le voy a dar funcion a los botones 
//para que varien las canrtidades en la pagina
