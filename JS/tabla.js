document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let tablaCONTENIDO = document.querySelector("#tbody-tabla");
    let contenidos = [];

    document.querySelector("#btnAgregar").addEventListener("click", agregar);
    document.querySelector("#btn-borrar-todo").addEventListener("click", function(e) {
        tablaCONTENIDO.innerHTML = "";
    });

    function agregar() {
        let nombre = document.querySelector("#NOMBRE").value;
        let objeto = document.querySelector("#OBJETO").value;
        let cumple = document.querySelector("#CUMPLEAÑOS").value;
        let direccion = document.querySelector("#DIRECCION").value;

        let items = {
            nombres: nombre,
            objetoFav: objeto,
            cumpleaños: cumple,
            direcciones: direccion
        };

        contenidos.push(items);

        let j = "";
        for (const item of contenidos) {
            j += `<tr class="tabla-personajes">
                <td class="tabla-personajes-items">${item.nombres}</td>
                <td class="tabla-personajes-items">${item.objetoFav}</td>
                <td class="tabla-personajes-items">${item.cumpleaños}</td>
                <td class="tabla-personajes-items">${item.direcciones}</td> 
                <td><button class="btn-eliminar"><i class="fa-regular fa-circle-xmark"></i></button></td>
            </tr>`;
            console.log(contenidos);
        }
        tablaCONTENIDO.innerHTML = j;



        let btns  = document.querySelectorAll(".btn-eliminar")

        for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function(e) {
                   this.parentElement.parentElement.remove();
                   contenidos[i].pull();

                });

            }
        

    }
});
