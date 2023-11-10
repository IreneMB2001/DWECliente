'use strict'
//Versión 1 de javascript con base de datos switch-case y addeventlistener con arrowfunction

//ZONA DE VARIABLES - carga del DOM
const libro = document.getElementById("libro");
const boton = document.getElementById("boton");
const precio = document.getElementById("precio");
const contenedorPortada = document.getElementById("portada");

//ZONA DE EVENTOS
boton.addEventListener("click", () => {
    asignarValor();
});

//ZONA DE FUNCIONES
function reset(){ //función para vaciar los elementos
    precio.textContent = "---";
    contenedorPortada.innerHTML = "";
}

function todoCorrecto(){ //función para saber si el texto está vacío o no
    reset();
    let valor = libro.value;
    if (String(valor).trim()){
        return true;
    }
    return false;
}

function escribirDOM(componente1, valor, componente2, imagen){ //función para escribir en el DOM los valores
    componente1.textContent = valor;
    componente2.innerHTML = imagen;
}

function asignarValor(){ //función para asignar el precio y la portada
    let precioAsignado = "";
    let portadaAsignada = "";
    if(todoCorrecto()){
        let entradaDatos = String(libro.value);
        entradaDatos = entradaDatos.trim().toLowerCase();
        switch(entradaDatos){
            case "los juegos del hambre":
                precioAsignado = "18,05€";
                portadaAsignada = "<img src='imgs/losjuegosdelhambre.jpg' width='150px'>";
                escribirDOM(precio, precioAsignado, contenedorPortada, portadaAsignada);
                break;
            case "orgullo y prejuicio":
                precioAsignado = "12,30€";
                portadaAsignada = "<img src='imgs/orgulloyprejuicio.jpg' width='150px'>";
                escribirDOM(precio, precioAsignado, contenedorPortada, portadaAsignada);
                break;
            case "jane eyre":
                precioAsignado = "13,25€";
                portadaAsignada = "<img src='imgs/janeeyre.jpg' width='150px'>";
                escribirDOM(precio, precioAsignado, contenedorPortada, portadaAsignada);
                break;
            case "angel mecanico":
                precioAsignado = "17,05€";
                portadaAsignada = "<img src='imgs/angelmecanico.jpg' width='150px'>";
                escribirDOM(precio, precioAsignado, contenedorPortada, portadaAsignada);
                break;
            case "el prisionero de azkaban":
                precioAsignado = "37,95€";
                portadaAsignada = "<img src='imgs/harrypotter3.jpg' width='150px'>";
                escribirDOM(precio, precioAsignado, contenedorPortada, portadaAsignada);
                break;
            default:
                alert("Este libro no se encuentra registrado en nuestra base de datos");
                reset();
                break;
        }
    } else {
        reset();
        alert("No se ha introducido ningún libro");
    }

}
