'use strict';
const inputCreacion = document.querySelector('#txt-creacion');
const inputVencimiento = document.querySelector('#txt-vencimiento');
const btnCrear = document.querySelector('#btn-crear');

const obtenerDatos = () => {
    registrarRutina(inputCreacion.value, inputVencimiento.value);
};

btnCrear.addEventListener('click', obtenerDatos);