
let allSubMenu = document.querySelectorAll(".sub-menu-box");
allSubMenu.forEach((subMenu)=> subMenu.addEventListener("click",(event)=>{
    let menuitem = subMenu.querySelector("ul");
   menuitem.style.display = "block";
}))