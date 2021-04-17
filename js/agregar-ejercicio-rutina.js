'use strict';
const tabla = document.querySelector('#tbl-ejercicios tbody');
const btnAgregar = document.querySelector('#btn-agregar');

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

const obtenerDatos = () => {
    let _idRutina = localStorage.getItem('rutinaSeleccionada');
    let listaInputs = document.querySelectorAll('input[type=checkbox]:checked');
    let listaIdEjercicios = [];

    listaInputs.forEach(input => {
        listaIdEjercicios.push(input.value);
    });
    agregarEjercicioRutina(_idRutina, listaIdEjercicios)

};


llenarListaEjercicios();
btnAgregar.addEventListener('click', obtenerDatos);