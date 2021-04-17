'use strict';
const btnCrearCuenta = document.querySelector('#btn-crear');
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const selectSexo = document.querySelector('#slt-sexo');
const selectTipo = document.querySelector('#slt-tipo');
const inputsRequeridos = document.querySelectorAll(':required');

const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }

    if (inputNacimiento.value == '') {
        error = true;
        inputNacimiento.classList.add('error');
    } else {
        inputNacimiento.classList.remove('error');
    }

    if (selectSexo.value == '') {
        error = true;
        selectSexo.classList.add('error');
    } else {
        selectSexo.classList.remove('error');
    }

    if (selectTipo.value == '') {
        error = true;
        selectTipo.classList.add('error');
    } else {
        selectTipo.classList.remove('error');
    }

    if (error == false) {

        imprimir();

    } else {

        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar la cuenta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};

const imprimir = () => {
    let correo = inputCorreo.value;
    let nombre = inputNombre.value;
    let nacimiento = new Date(inputNacimiento.value);
    let sexo = selectSexo.value;
    let tipo = selectTipo.value;

    let edad = calcularEdad(nacimiento);


    registrarUsuario(correo, nombre, nacimiento, sexo, tipo);


};

btnCrearCuenta.addEventListener('click', () => {
    validar('registrar');
});

inputsRequeridos.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});