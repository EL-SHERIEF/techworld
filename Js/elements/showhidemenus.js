var menu = document.querySelector(".nav .menu");
var subMenu = document.querySelector(".nav .menu .submenu");
var hiddenbutton = document.querySelector(".hidden-button")
function hidemenu(){ hiddenbutton.style.opacity = "0"; menu.style.insetInlineEnd = "-100vw";hiddenbutton.style.display = "none"; };
function showmenu(){hiddenbutton.style.opacity = "1";  menu.style.insetInlineEnd = "0vw";  hiddenbutton.style.display = "flex";}
function showSubmenu(){subMenu.style.insetInlineEnd = "0vw";} function hideSubmenu(){subMenu.style.insetInlineEnd = "-100vw";}
            
var alert2 = document.querySelector(".alert.two");
var alert1 = document.querySelector(".alert.one");
function closeAlert() {
    alert2.style.display = "none";
}

var threed = document.querySelector(".spline");
var vd = document.querySelector(".vd2");
function show3d() {
    threed.style.display = "block";
    vd.style.display = "none";
}
function hide3d() {
    threed.style.display = "none";
    vd.style.display = "block";
    alert1.style.display = "none";
}


var projectMenu = document.querySelector(".discuss");
var menublackscreen = document.querySelector(".discuss .blackscreen")
function hideprojectmenu(){projectMenu.style.opacity = "0"; menublackscreen.style.opacity = "0";projectMenu.style.insetInlineEnd = "-100vw"; };
function showprojectmenu(){projectMenu.style.opacity = "1";menublackscreen.style.opacity = "0.7";  projectMenu.style.insetInlineEnd = "0vw";}
            

