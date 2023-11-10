'use strict'
//Versión 2 de javascript con base de datos y addeventlistener con llamada a función

//ZONA DE VARIABLES - carga del DOM
const libro = document.getElementById("libro");
const boton = document.getElementById("boton");
const precio = document.getElementById("precio");
const contenedorPortada = document.getElementById("portada");

//BASE DE DATOS CON ARRAY DE OBJETOS
const listado_libros=[
    {nombre: "los juegos del hambre", precio: "18,05€", portada: "<img src='imgs/losjuegosdelhambre.jpg' width='150px'>"},
    {nombre:"orgullo y prejuicio", precio:"12,30€", portada: "<img src='imgs/orgulloyprejuicio.jpg' width='150px'>"},
    {nombre:"jane eyre", precio:"13,25€", portada: "<img src='imgs/janeeyre.jpg' width='150px'>"},
    {nombre:"angel mecanico", precio:"17,05€", portada: "<img src='imgs/angelmecanico.jpg' width='150px'>"},
    {nombre:"el prisionero de azkaban", precio:"37,95€", portada: "<img src='imgs/harrypotter3.jpg' width='150px'>"}
];

//ZONA DE EVENTOS
boton.addEventListener("click", procesarPrecio);

//ZONA DE FUNCIONES
function isEmpty(texto){ //función para saber si el texto está vacío
    if (String(texto).length == 0){
        return true;
    }
    return false;
}

function reset(){ //función para vaciar los elementos
    precio.textContent = "---";
    contenedorPortada.innerHTML="";
}

function asignarValor(elemento){ //función para asignar el elemento
    let mensaje="";
    elemento = elemento.trim().toLowerCase(); //trim quita los espacios de los extremos
    let array_libros = listado_libros.filter(libro => libro.nombre === elemento);

    if (array_libros.length>0){
        mensaje=array_libros[0];
    }
    else{
        alert("Este libro no se encuentra registrado en nuestra base de datos");
    }
    return mensaje;
}

function procesarPrecio(){ //función que escribe en el párrafo el precio del valor del libro
    reset();
    let contenido = libro.value;
    if (isEmpty(contenido)){ //control en el caso de que el contenido esté vacío
        alert("No se ha introducido ningún libro");
    }
    else{
        let libroAsignado = asignarValor(contenido);
        precio.textContent = libroAsignado.precio;
        if(typeof libroAsignado.portada !== 'undefined'){ //para que no salga undefined en el div
            contenedorPortada.innerHTML = libroAsignado.portada;
        } else {
            reset();
        }

    }
}