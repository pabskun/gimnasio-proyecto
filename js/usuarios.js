'use strict';

const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let listaUsuarios = [];

const llenarListaUsuarios = async() => {
    listaUsuarios = await obtenerUsuarios();
    mostrarTabla();
};

const mostrarTabla = async() => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaUsuarios.forEach(usuario => {
        if (usuario.nombre.toLowerCase().includes(filtro) || usuario.correo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.nacimiento;
            fila.insertCell().innerHTML = usuario.sexo;
            fila.insertCell().innerHTML = usuario.tipo;

            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.innerText = 'Editar';
            botonModificar.addEventListener('click', () => {
                sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
                window.location.href = 'usuario-modificar.html';
            });


            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';

            botonEliminar.addEventListener('click', () => {
                Swal.fire({
                    'icon': 'warning',
                    'text': '¿Está seguro que desea borrar el usuario?',
                    'showCancelButton': true,
                    'confirmButtonText': '¡Sí!, estoy seguro',
                    'cancelButtonColor': '#d33',
                    'cancelButtonText': 'Cancelar',
                    'reverseButtons': true
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarUsuario(usuario.correo);
                    }
                })
            });
            // Agregarle los botones a la celda

            celdaAcciones.appendChild(botonModificar);
            celdaAcciones.appendChild(botonEliminar);
        }


    });
};

llenarListaUsuarios();

inputFiltro.addEventListener('keyup', mostrarTabla);