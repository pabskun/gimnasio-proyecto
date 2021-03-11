'use strict';
let usuarioSeleccionado;
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const selectSexo = document.querySelector('#slt-sexo');
const btnGuardar = document.querySelector('#btn-guardar');

inputCorreo.disabled = true;

const llenarFormulario = () => {

    // Inicio: formateo de la fecha
    let fecha = new Date(usuarioSeleccionado.nacimiento);

    let anno = fecha.getFullYear();
    let mes = fecha.getUTCMonth() + 1;
    let dia = fecha.getUTCDate();

    if (mes < 10) {
        mes = '0' + mes;
    }

    if (dia < 10) {
        dia = '0' + dia;
    }
    // Fin: formateo de la fecha

    inputCorreo.value = usuarioSeleccionado.correo;
    inputNombre.value = usuarioSeleccionado.nombre;
    inputNacimiento.value = `${anno}-${mes}-${dia}`;
    selectSexo.value = usuarioSeleccionado.sexo;
};

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('.formulario :required');


    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    //validaciones de formato

    if (error == false) {
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario modificado',
            'text': 'La información fue actualizada correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'usuarios.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar el usuario',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};


if (sessionStorage.getItem('usuarioSeleccionado')) {
    usuarioSeleccionado = JSON.parse(sessionStorage.getItem('usuarioSeleccionado'));
    llenarFormulario();
} else {
    Swal.fire({
        'icon': 'warning',
        'title': 'Atención',
        'text': 'Debe seleccionar primero un usuario'
    }).then(() => {
        window.location.href = 'usuarios.html';
    });
}

btnGuardar.addEventListener('click', validar);