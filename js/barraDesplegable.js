const BtnMenu = document.querySelector(".Btn__Menu");
const Menu =document.querySelector(".Items__Menu");

BtnMenu.addEventListener("click", function(){
    Menu.classList.toggle("Mostrar")
});


const BtnSubmenu = document.querySelectorAll(".Btn-Submenu");
        
for( let i=0; i< BtnSubmenu.length ; i++){
     BtnSubmenu[i].addEventListener("click", function (){
        const SubMenu = this.nextElementSibling;
        console.log(SubMenu)
        const heightSubMenu = SubMenu.scrollHeight;
         
         if(SubMenu.classList.contains("desplegar")){
            SubMenu.classList.remove("desplegar");
            SubMenu.removeAttribute("style");

         }else{
            SubMenu.classList.add("desplegar");
            SubMenu.style.height= heightSubMenu +"px";

         }

    })       
}


