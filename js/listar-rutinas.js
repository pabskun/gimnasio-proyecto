'use strict';
const tabla = document.querySelector('#tbl-rutinas tbody');

let listaRutinas = [];

const llenarListaRutinas = async() => {
    listaRutinas = await listarRutinas();
    mostrarTabla();
};

const mostrarTabla = () => {
    listaRutinas.forEach(rutina => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = `Creación: ${rutina.creacion}`;
        fila.insertCell().innerHTML = rutina.vencimiento;

        let listaEjercicios = document.createElement('ul');
        rutina.ejercicios.forEach(ejercicio => {
            let li = document.createElement('li');
            li.innerText = ejercicio.nombre;
            listaEjercicios.appendChild(li);
        });

        fila.insertCell().appendChild(listaEjercicios);

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Agregar ejercicios';

        boton.addEventListener('click', () => {
            localStorage.setItem('rutinaSeleccionada', rutina._id);
            window.location = 'agregar-ejercicios-rutina.html';
        });

        fila.insertCell().appendChild(boton);
    });
};

llenarListaRutinas();