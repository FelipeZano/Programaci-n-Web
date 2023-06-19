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
    {id:1, nombre: "Combo", cantidad: 1,descripcion: "Envase de 500ml, con todo lo que tiene ruda, en el formato que mas comodo te resulte", precio:400, img:`/Imagenes/whatafak.jpeg`},
    {id:2, nombre: "Spray", cantidad: 1,descripcion: "Envase de 350ml, con todo lo que tiene ruda, en el formato que mas comodo te resulte", precio:300, img:`/Imagenes/Saracatunga.jpeg`},
    {id:3, nombre: "Gotero", cantidad: 1,descripcion: "Envase de 200ml, con todo lo que tiene ruda, en el formato que mas comodo te resulte", precio:200, img:`/Imagenes/perepepepepep.jpeg`},
]


const ContenedorCarrito = document.getElementById("ContenedorCarrito")

let carrito=[]

Productos.forEach((producto)=>{

    const div =document.createElement("div")
    div.classList.add("divcontenedores")
    div.innerHTML=`
    <img class="fotoscartas"src=${producto.img} alt= "">
    <h3 class="card-title" >${producto.nombre}</h3>
    <p class="card-text">${producto.descripcion}</p>
    <p class="card-text">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="btn btn-primary" >Agregar al Carrito <i class=""></i></button>

    `
    ContenedorCarrito.appendChild(div)
    
    const boton = document.getElementById("agregar${producto.id}");
    
    boton.addEventListener("click", ()=> {
        AgregadoalCarrito(producto.id)
    })
    
})

const AgregadoalCarrito =(productoid) => {
    const item = Productos.find((producto)  => prod.id ===productoid)
    carrito.push(item)
}
