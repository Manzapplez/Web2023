"use strict";

let recargar = document.querySelector("#btn-recargar")
let validar = document.querySelector("#btn-validar");
validar.addEventListener("click", validarCaptcha)
let valorcaptcha = document.querySelector("#valorCaptcha");

let numCaptcha = ["1","2","3","4","5","6","7","8","9","a","e","i","o","u"];
let a = numCaptcha[Math.floor(Math.random()*numCaptcha.length)];
let b = numCaptcha[Math.floor(Math.random()*numCaptcha.length)];
let c = numCaptcha[Math.floor(Math.random()*numCaptcha.length)];
let d = numCaptcha[Math.floor(Math.random()*numCaptcha.length)];
let captcha = document.querySelector("#captcha").innerHTML =a + b + c + d;
console.log(a + b + c + d);
    
function validarCaptcha(e) {
  e.preventDefault();
    console.log("entro a la validacion");
    if(valorcaptcha.value==captcha){
      console.log("es correcto");
      document.querySelector("#muestraResultado").innerHTML = "Felicitaciones, no eres un robot!"
      }
      else{
        console.log("es incorrecto!");
        document.querySelector("#muestraResultado").innerHTML = "algo salio mal, intentalo otra vez" 
      }  
  }


  


   
   
    

