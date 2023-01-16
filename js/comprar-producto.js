    // CONTADOR IMPUT CARRITO DE COMPRA


let restarCarrito= document.querySelector(".Imput__BtnMenos");
let sumarCarrito= document.querySelector(".Imput__BtnMas");
let contadorCarrito= document.querySelector(".Imput__Visor");
let contadorCarritoNumero=1;

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


var pLiata ="250"
var plista= parseFloat(pLiata)
var desc="30"
var descu= parseFloat(desc)
var resultado = ((plista) - (plista * descu / 100)) * (contadorCarrito.value);

let total= document.querySelector(".Precio__Carrito");
let descuento= document.querySelector(".descuento__precio");
let precioLista= document.querySelector(".Precio__lista");
let botonCarrito = document.querySelector(".Carrito__Boton")
let iconoCarrito= document.querySelector(".notificacion")
 precioLista.innerHTML= "$" + plista;
 descuento.innerHTML= descu + "%"


function modificarPrecio(){ 
    var resultado=((plista) - (plista * descu / 100)) * (contadorCarritoNumero) 
    total.innerHTML= "$" + resultado
}


modificarPrecio()


// CARGAR NOTIFICADOR A CARRITO COMPRA

botonCarrito.addEventListener("click",()=>{
    iconoCarrito.innerText =contadorCarritoNumero
    iconoCarrito.style.display="block"
})


