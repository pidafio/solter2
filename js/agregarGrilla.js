const selcId=document.querySelectorAll(".Desplegado");
const crearGrilla= document.querySelector(".contenedor__grillas");

// --TRAER PROMESA (JSON), CREAR FUNCION PARA FILTRAR POR CATEGORIA Y LLAMAR LA FUNCION DE CREAR GRILLA-----


 fetch("../JSON/grillaProductos.json")
.then(response=>response.json())
.then(datos => {   
  grilla(datos)
  selcId.forEach(select=>{
       select.addEventListener("click",(e)=>{
               console.log("aca")
          if(e.currentTarget.id !="Todos"){
           const filtrarBtn= datos.filter(dato => dato.pcategoria ===e.currentTarget.id);
           grilla(filtrarBtn)          
          }else{ grilla(datos)}
        
      })     
    })   
  
  })


//------------CREAR LA FUNCION DE GRILLA DINAMICA-------
   
    export function grilla (x){   
        crearGrilla.innerHTML=""
          x.forEach(item =>{    
               const plantilla=  
                      `<div id="${item.pcategoria}" class="grilla__Procuto">
                           <div class="img__paraGrilla" ><img class="imgGrilla" src="${item.pimg[0][0]}"></div>
                           <div class="grilla__descripcion"> ${item.pmarca} <p class="texto__grilla-descripcion"> 
                            ${item.pdescripcion}</p></div>
                           <h2 class="grilla__precio">Precio ${item.pprecio}</h2>
                           <button  id="${item.pid}" class="grilla__btnComprar">COMPRAR</button>
                       </div> `;                     
               crearGrilla.insertAdjacentHTML('afterbegin',plantilla);         
          })
          btnComprarFuncional(x)
        }
          
// CREAR LA FUNCION PARA SACAR DATOS DE GRILLA Y REDIRIGIRLOS A NUEVA PAGINA---



const datos=[]

function btnComprarFuncional (x){
  const btnComprar= document.querySelectorAll(".grilla__btnComprar");
  btnComprar.forEach(btnComprarId =>{
    btnComprarId.addEventListener("click", (e)=>{
        const id = e.currentTarget.id 
        console.log(id)
        const arrayProducto = x.find(partes=> partes.pid === id)        
        console.log(arrayProducto)
            localStorage.setItem("datos-producto",JSON.stringify(arrayProducto))
            e=window.location.href ="../html/compra-producto.html";       
    })
  })
}





  