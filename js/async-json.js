export var promesa= new Promise((resolve, reject) => {
    var xhttp= new XMLHttpRequest();
    xhttp.responseType= "json";
    xhttp.open('GET','../JSON/grillaProductos.json', true);
    xhttp.send();
    xhttp.onload=function (){
     if(this.readyState==4 && this.status==200){
       resolve(xhttp.response);
     }else{
       reject("error xhttp");
     }
       
    }
})




// async function promesas (){
//    var  datosProductos= await promesa
//     datosProductos.forEach(item =>{
//       console.log(item.pid)
//     }) 
// }
// console.log(promesas())