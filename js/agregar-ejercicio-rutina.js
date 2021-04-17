'use strict';
const tabla = document.querySelector('#tbl-ejercicios tbody');

let listaEjercicios = [];

const llenarListaEjercicios = async() => {
    listaEjercicios = await listarEjercicios();
    mostrarTabla();
};

const mostrarTabla = () => {
    listaEjercicios.forEach(ejercicio => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = ejercicio.nombre;
        fila.insertCell().innerHTML = ejercicio.zona;

        let check = document.createElement('input');
        check.type = 'checkbox';
        check.value = ejercicio._id;

        fila.insertCell().appendChild(check);

    });
};

llenarListaEjercicios();