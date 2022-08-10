//QuerySelector

const heading = document.querySelector(".header__texto h2"); //0 o 1 elementos
heading.textContent = "Nuevo Heading";


//QuerySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

//Generar un nuevo enlace

const nuevoEnlace = document.createElement("A");
console.log(nuevoEnlace);

//Agregar href

nuevoEnlace.href = "nuevo-enlace.html";

//Agregar texto

nuevoEnlace.textContent = "Un nuevo enlace";

//Agregar clase

nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al documento

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

//Eventos

console.log(1);

window.addEventListener("load", function(){//load espera a que el JS y los archivos que dependen del HTML esten listos 
    console.log(2);
})

window.onload = function(){
    console.log(3)
}

window.addEventListener("DOMContentLoaded", function(){//Solo espera a que el HTML este listo, no espera al CSS o imagenes
    console.log(4)
})
console.log(5);

//Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function(){
    console.log("enviar")
})
