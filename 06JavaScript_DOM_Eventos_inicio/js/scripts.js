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

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("enviar");
// })

//Eventos de los Inputs y Textareas

const datos = {
    nombre: "",
    email: "",
    menasje: ""
}

const nombreInput = document.querySelector("#nombre");
const correoInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leertexto);
email.addEventListener("input", leertexto);
mensaje.addEventListener("input", leertexto);

function leertexto(e){
    //console.log(e.target.value)

    datos[e.target.id] = e.target.value;

    console.log(datos);
}

//Evento de submit

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    //Validar formulario

    const { nombre, email, mensaje} = datos;

    if (nombre === "" || email === "" || mensaje === ""){
        mostarAlerta("Todos los campos son obligatorios", true);
        return;
    }

    mostarAlerta("El formulario fue enviado correctamente")

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    console.log("Enviando Formulario"); 
});

function mostarAlerta(mensaje, error = null){
    const alerta =document.createElement("P");
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add("error");
    }
    else{
        alerta.classList.add("enviado");
    }

    formulario.appendChild(alerta);


    //Desaparezca luego de 5 segundos

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}