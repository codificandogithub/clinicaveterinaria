const chkMenu = document.getElementById("chkMenu");
const menu = document.getElementById("nav");
const btnMenu = document.getElementById("btnMenu");

function mostrarMenu(){
    menu.classList.toggle("mostrarmenu");
}

btnMenu.addEventListener("click",mostrarMenu,false);