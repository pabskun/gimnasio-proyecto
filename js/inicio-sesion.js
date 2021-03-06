'use strict';

const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIniciar = document.querySelector('#btn-iniciar');

const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error');
    } else {
        inputContrasenna.classList.remove('error');
    }

    if (error == false) {
        iniciarSesion(inputCorreo.value, inputContrasenna.value);
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo iniciar sesión',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};


btnIniciar.addEventListener('click', validar);