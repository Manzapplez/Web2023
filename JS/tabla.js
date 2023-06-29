document.addEventListener("DOMContentLoaded", function () {

    /*-------------arranca el JS-----------------*/
    "use strict";

    document.querySelector("#btnAgregar");
    let tablaCONTENIDO = document.querySelector(".tbody-tabla");

    let contenidos = [
        {
            "nombre": "",
            "genero": "",
            "obejtoFav": "",
            "cumpleaños": "",
            "direccion": ""
        }
    ];





    

/*---------------MENU RESPONISVE-----------------*/
    document.querySelector(".nav-toggle").addEventListener("click", botonHamburguesa); 
     function botonHamburguesa() {
        document.querySelector(".navopciones").classList.toggle("navopciones-visible");
        
     }
    document.querySelector(".container").addEventListener("click", function(){
        document.querySelector(".navopciones").classList.remove("navopciones-visible");
     })
   
});

