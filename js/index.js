//global variables

const header = document.getElementById("header");
const logo = document.getElementById("logo");




function scrollFunction() {
    //
    if (window.innerWidth < 1199 && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) ) {
        logo.src = "../images/HSF_Logo_Light.png";
        header.style.height = "85px";
        logo.style.height = "75px";
    
    } else if (window.innerWidth >= 1199 && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) ) {
        header.style.height = "110px";
        logo.style.height = "75px";

    }  else {
        header.style.height = "150px";
        logo.style.height = "120px";
    
    }
    
}  

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};


