var menu = document.querySelector(".nav .menu");
var subMenu = document.querySelector(".nav .menu .submenu");
var susubbMenu = document.querySelector(".subsubmenu");

var hiddenbutton = document.querySelector(".hidden-button")
function hidemenu(){ hiddenbutton.style.opacity = "0"; menu.style.insetInlineEnd = "-100vw";hiddenbutton.style.display = "none"; };
function showmenu(){hiddenbutton.style.opacity = "1";  menu.style.insetInlineEnd = "0vw";  hiddenbutton.style.display = "flex";}
function showSubmenu(){subMenu.style.insetInlineEnd = "0vw";} 
function hideSubmenu(){subMenu.style.insetInlineEnd = "-100vw";}

function showsusubbMenu(){susubbMenu.style.display = 'flex';} 
function hidesusubbMenu(){susubbMenu.style.display  = "none";}

var projectMenu = document.querySelector(".discuss");
var menublackscreen = document.querySelector(".discuss .blackscreen")
function hideprojectmenu(){projectMenu.style.opacity = "0"; menublackscreen.style.opacity = "0";projectMenu.style.insetInlineEnd = "-100vw"; };
function showprojectmenu(){projectMenu.style.opacity = "1";menublackscreen.style.opacity = "0.7";  projectMenu.style.insetInlineEnd = "0vw";}
            


var cart = document.querySelector(".cartt");
function hideCart(){cart.style.opacity = "0";cart.style.insetInlineEnd = "-100vw";};
function showCart(){cart.style.opacity = "1"; cart.style.insetInlineEnd = "0vw";}
            