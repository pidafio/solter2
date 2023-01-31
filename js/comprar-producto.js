// import {selectorProducto} from "../js/agregarGrilla.js"




// -------TRAER DATOS DE LOCALSTORAGE-------


var localStor =localStorage.getItem("datos-producto");
console.log(localStor)
 export var arrayDatos=JSON.parse(localStor)
console.log(arrayDatos.pimg[0])

  
    //--- CONTADOR IMPUT CARRITO DE COMPRA-----


const restarCarrito= document.querySelector(".Imput__BtnMenos");
const sumarCarrito= document.querySelector(".Imput__BtnMas");
const contadorCarrito= document.querySelector(".Imput__Visor");
var contadorCarritoNumero=1;

restarCarrito.addEventListener("click",()=>{
    contadorCarritoNumero --;    
   if(contadorCarritoNumero <= 0){
    contadorCarritoNumero=1  
   }
   contadorCarrito.value = contadorCarritoNumero
   modificarPrecio()
});

sumarCarrito.addEventListener("click",()=>{
    contadorCarritoNumero ++
  contadorCarrito.value = contadorCarritoNumero
    modificarPrecio()
    
})


// CALCULO PRECIO TOTAL

// var plista = + (arrayDatos.pprecio)
// var descu= + (arrayDatos.pdescuento)
var resultado = ((arrayDatos.pprecio) - (arrayDatos.pprecio * arrayDatos.pdescuento / 100)) * (contadorCarrito.value);

// let total= document.querySelector(".Precio__Carrito");
// let descuento= document.querySelector(".descuento__precio");
// let precioLista= document.querySelector(".Precio__lista");
// const botonCarrito = document.querySelector(".Carrito__Boton")
// let iconoCarrito= document.querySelector(".notificacion")
// //  precioLista.innerHTML= "$" + plista;
// //  descuento.innerHTML= descu + "%"


function modificarPrecio(){ 
    var resultado = ((arrayDatos.pprecio) - (arrayDatos.pprecio * arrayDatos.pdescuento / 100)) * (contadorCarrito.value);
    let total= document.querySelector(".Precio__Carrito");
     total.innerHTML= "$" + resultado
}



// ---CARGAR NOTIFICADOR A CARRITO COMPRA----

let iconoCarrito= document.querySelector(".notificacion")

const botonCarrito = document.querySelector(".Carrito__Boton")
botonCarrito.addEventListener("click",()=>{
    iconoCarrito.innerText =contadorCarritoNumero
    iconoCarrito.style.display="block"
})

const contenedorDatos=document.querySelector(".Descripcion")

function datosProductos(){
    var datos=`
    <h2 class="Descripcion__Marca">${arrayDatos.pmarca}</h2>
    <h2 class="Descripcion__Titulo">${arrayDatos.pnombre}</h2>
    <p class="Descripcion__Parrafo"> ${arrayDatos.pdescripcion}</p>
    <div class="precio__descuento">
         <div class="Precio__Carrito"> $ ${resultado}</div>
         <span class="descuento__precio">${arrayDatos.pdescuento} %</span>  
    </div>   
    <div class="Precio__lista"> ${arrayDatos.pprecio} </div>`
    contenedorDatos.insertAdjacentHTML("afterbegin", datos)
    modificarPrecio()
}
datosProductos()