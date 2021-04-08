'use strict';
let usuarioSeleccionado;
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const selectSexo = document.querySelector('#slt-sexo');
const selectTipo = document.querySelector('#slt-tipo');
const selectEstado = document.querySelector('#slt-estado');
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
    selectTipo.value = usuarioSeleccionado.tipo;
    selectEstado.value = usuarioSeleccionado.estado;
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


        obtenerDatos();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo modificar el usuario',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};
// Función para obtener los datos del formulario
const obtenerDatos = () => {
    let correo = inputCorreo.value;
    let nombre = inputNombre.value;
    let nacimiento = new Date(inputNacimiento.value);
    let sexo = selectSexo.value;
    let tipo = selectTipo.value;
    let estado = selectEstado.value;

    modificarUsuario(correo, nombre, nacimiento, sexo, tipo, estado);
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