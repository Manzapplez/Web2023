document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".nav-toggle").addEventListener("click", botonHamburguesa);
    function botonHamburguesa() {
        document.querySelector(".navopciones").classList.toggle("navopciones-visible");

    }
    document.querySelector(".container").addEventListener("click", function () {
        document.querySelector(".navopciones").classList.remove("navopciones-visible");
    })
})