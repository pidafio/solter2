var img= ["../img/imagenes/samsung4.jpg","../img/imagenes/samsung.webp",
"../img/imagenes/samnsung3.webp","../img/imagenes/samnsung2.jpg"];


function sliderHtml(){ 
var silderContainer= document.querySelector(".Galeria__Container");
var silderCarrito=
`<article class="Galeria">
<div class="Galeria__Imagen-Container">
      <img id="imgPrincipal" class="galeria__imgPrincipal" src="${img[0]}" altt="">
     <div class="Btn__Siguiente"> > </div>
     <div class="Btn__Previo"> < </div>
</div>
<div class="galeria__Miniaturas">
  <img id="img1" class="Galeria__Miniatura" src="${img[0]}" alt="">
  <img id="img2" class="Galeria__Miniatura" src="${img[1]}" alt="">
  <img id="img3" class="Galeria__Miniatura" src="${img[2]}" alt="">
  <img id="img1" class="Galeria__Miniatura" src="${img[3]}" alt="">
</div>
</article>`;
silderContainer.innerHTML= silderCarrito;
}
sliderHtml();

  // CAMBIAR IMAGEN CON BOTONE < >

var ImagenPrincipal= document.querySelector(".galeria__imgPrincipal");
var btnSiguiente=document.querySelector(".Btn__Siguiente");
var btnPrevio= document.querySelector(".Btn__Previo");
var contador= 0;

btnPrevio.addEventListener('click', ()=>{
  if(contador ==0){
    contador=3;
  }else{ contador--};
    ImagenPrincipal.src=img[contador];
 console.log(contador); 
});

  btnSiguiente.addEventListener('click', ()=>{
     if(contador ==3){
       contador=0;
     } else{ contador++};
     ImagenPrincipal.src=img[contador];
     console.log(contador);
})


// SELECCIONAR MINIATURA

var ImagenPrincipal= document.querySelector(".galeria__imgPrincipal");
var selector =document.querySelectorAll(".Galeria__Miniatura");

 function seleccionarMiniatura(){
   ImagenPrincipal.src=img[0]=this.src
   console.log(ImagenPrincipal)
 };

selector.forEach(boton => {
  boton.addEventListener("click",seleccionarMiniatura)
});
