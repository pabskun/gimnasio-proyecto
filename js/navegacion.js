'use strict';

let usuario;
const opciones = document.querySelectorAll('.header-principal a');
const bntCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const mostrarOpcionesMenu = () => {
    switch (usuario.tipo) {
        case 'Administrador':

            break;
        case 'Instructor':
            opciones[0].classList.add('ocultar');
            opciones[3].classList.add('ocultar');
            break;
        case 'Cliente':
            opciones[0].classList.add('ocultar');
            opciones[1].classList.add('ocultar');
            opciones[2].classList.add('ocultar');
            opciones[3].classList.add('ocultar');
            break;
    }
};

const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'index.html';
};

if (sessionStorage.getItem('usuarioConectado')) {
    usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    mostrarOpcionesMenu();
} else {
    window.location.href = 'index.html';
}


bntCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});