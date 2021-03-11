'use strict';
let usuarioSeleccionado;
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const selectSexo = document.querySelector('#slt-sexo');

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