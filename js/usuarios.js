'use strict';

const tabla = document.querySelector('#tbl-usuarios tbody');

const mostrarTabla = () => {
    listaUsuarios.forEach(usuario => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.correo;
        fila.insertCell().innerHTML = usuario.nacimiento;
        fila.insertCell().innerHTML = usuario.sexo;
        fila.insertCell().innerHTML = usuario.tipo;
    });
};

mostrarTabla();