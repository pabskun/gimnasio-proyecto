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
                    Swal.fire(
                        '',
                        'El usuario ha sido eliminado',
                        'success'
                    )
                }
            })
        });
        // Agregarle los botones a la celda

        celdaAcciones.appendChild(botonModificar);
        celdaAcciones.appendChild(botonEliminar);

    });
};


mostrarTabla();