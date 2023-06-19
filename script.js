/*Indice mas alto = 2 osea que total de elementos es 3 */ 

/*Arreis van siempre en Mayuscula  se hacen en const y se pueden modificar igual*/

console.log("¡El archivo JavaScript está conectado correctamente!");


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
/*
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

    document.querySelector("Subtotal").innerHTML= Subtotal1
    Subtotal.textContent = Subtotal1;
}

actualizarSubtotal()

*/

// Haasta aca hay u intento de generar el subtotal



// Desde Aca le voy a dar funcion a los botones 
//para que varien las canrtidades en la pagina


//Declaración de variables para el aumento
/*document.getElementById("cantidadcombo").innerHTML= 800;

const BotonSuma = document.getElementById("BotonSuma");
let Cantidadcombo = document.getElementById("cantidadcombo");

let contador = 0 

function BotonesSuma(){

    contador++;
document.querySelector("cantidadcombo").innerHTML= contador;
    cantidadcombo.textContent = contador;
}

BotonSuma.addEventListener("click", BotonesSuma)


*/

// HastaAca le voy a dar funcion a los botones 
//para que varien las canrtidades en la pagina


// Segundo intento carrito 

let Productos=[
    {id:1, nombre: "Combo", cantidad: 1,descripcion: "La fragancia impregnada en el aire transporta tus sentidos a un estado de plenitud, mientras los aromas sutiles y embriagadores dan vida a cada rincón cada espacio, cada ambiente de tu casa refrescado por ruda. ", precio:400, img:`/Imagenes/Self-Care Massage - Ashley Neese.jpeg`},
    {id:2, nombre: "Spray", cantidad: 1,descripcion: "La higiene de manos con alcohol se convierte en un ritual indispensable para proteger tu salud. Elimina eficazmente los gérmenes y brinda una sensación de limpieza y frescura.", precio:300, img:`/Imagenes/Saracatunga.jpeg`},
    {id:3, nombre: "Gotero", cantidad: 1,descripcion: "Libertad y pureza energética se fusionan en un equilibrio perfecto. Experimenta la sensación de armonía y bienestar al liberar las cargas negativas y permitir que la energía positiva fluya libremente en tus ambientes.", precio:200, img:`/Imagenes/How To Make Herbal Hydrosols.jpeg`},
]


const ContenedorCarrito = document.getElementById("ContenedorCarrito")

Productos.forEach((producto)=>{

    const div =document.createElement("div")
    div.classList.add("producto")
    div.innerHTML=`
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p class="">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="" >Agregar <i class=""></i></button>

    `
    ContenedorCarrito.appendChild(div)
})
