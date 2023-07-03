document.addEventListener("DOMContentLoaded", function () {

  "use strict";

  document.querySelector("#btn-recargar").addEventListener("click", recargar);
  let resultado = document.querySelector("#muestraResultado");

  let valorcaptcha = document.querySelector("#valorCaptcha");

  function recargar(e) {
    e.preventDefault();

    resultado.innerHTML = "";
    
    let numCaptcha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "e", "i", "o", "u"];
    let a = numCaptcha[Math.floor(Math.random() * numCaptcha.length)];
    let b = numCaptcha[Math.floor(Math.random() * numCaptcha.length)];
    let c = numCaptcha[Math.floor(Math.random() * numCaptcha.length)];
    let d = numCaptcha[Math.floor(Math.random() * numCaptcha.length)];
    let captcha = document.querySelector("#captcha").innerHTML = a + b + c + d;
    
    document.querySelector("#btn-validar").addEventListener("click", function (e) {
    
      e.preventDefault();
    
      console.log("entro a la validacion");
      
      if (valorcaptcha.value == captcha) {
        resultado.innerHTML = "Felicitaciones, no eres un robot!"
      }
      else {
        resultado.innerHTML = "algo salio mal, intentalo otra vez"
      }
    });
  }

})



