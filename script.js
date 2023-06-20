/*Indice mas alto = 2 osea que total de elementos es 3 */ 

/*Arreis van siempre en Mayuscula  se hacen en const y se pueden modificar igual*/
/*
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

const CarritoSolapa = document.getElementById("CarritoSolapa")

let carrito=[]

Productos.forEach((producto)=>{

    const div =document.createElement("div")
    div.classList.add("divcontenedores")
    div.innerHTML=`
    <img class="fotoscartas"src=${producto.img} alt= "">
    <h3 class="card-title" >${producto.nombre}</h3>
    <p class="card-text">${producto.descripcion}</p>
    <p class="card-text">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="btn btn-primary" >Agregar al Carrito <i ></i></button>

    `
    
    ContenedorCarrito.appendChild(div)

    const Botoncitoagregado = document.getElementById(`agregar${producto.id}`);

    Botoncitoagregado.addEventListener(`click`, () => {
        AgregadoalCarrito(producto.id)
})
    
})



const AgregadoalCarrito = (prodId) => {

        const existe = carrito.some (prod => prod.id === prodId)
        if (existe){
            const prod = carrito.map (prod => {
                if (prod.id === prodId){
                    prod.cantidad++
                }
            })
        } else {
            const item = Productos.find((prod)  => prod.id === prodId)
            carrito.push(item)
        }

        ActualizarCarrito() 
}
    
    


const ActualizarCarrito = () => {

    CarritoSolapa.innerHTML=""

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("ProductoenCarrito")
        div.innerHTML=`
        <p>${prod.nombre}</p>
        <p>$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button class="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg></button>
        `
        const botonEliminar = div.querySelector(".boton-eliminar");
        botonEliminar.addEventListener("click", () => eliminarDelCarrito(prod.id));

        CarritoSolapa.appendChild(div);

    })
    PrecioTotal.innerText = carrito.reduce((acc,prod)=> acc+(prod.precio*(prod.cantidad)),0)
    alert(CarritoTexto)
}
const eliminarDelCarrito = (prodId) => {
    const item =carrito.find((producto) => producto.id === parseInt(prodId))
    const indice=carrito.indexOf(item)
    carrito.splice(indice,1)
    ActualizarCarrito()
}

const BotonVaciar = document.getElementById("Vacio")
BotonVaciar.addEventListener(`click`, () => {

    carrito.length=0
    PrecioTotal.innerHTML=0
    ActualizarCarrito()

})


    
const PrecioTotal= document.getElementById("Precio Total:")


const BotonPedido = document.createElement("button");
BotonPedido.textContent = "Hacer Pedido";
BotonPedido.addEventListener("click", () => {
  const enlaceWhatsApp = `https://wa.me/1551588858?text=Hola Ruda,¡quiero hacer un pedido!`;
  window.open(enlaceWhatsApp);
});

const contenedor = document.getElementById("Pedido");
contenedor.appendChild(BotonPedido);

