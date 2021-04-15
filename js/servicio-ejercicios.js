'use strict';

const registrar_ejercicio = async(nombre, zona, imagen) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-ejercicio',
        responseType: 'json',
        data: {
            nombre: nombre,
            zona: zona,
            imagen: imagen
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El ejercicio ha sido enviado',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            // limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const listar_ejercicios = async() => {
    let lista_ejercicios = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-ejercicios',
        responseType: 'json'
    }).then((response) => {
        lista_ejercicios = response.data.ejercicios;
    }).catch((response) => {

    });

    return lista_ejercicios;
};

const modificar_ejercicio = async(_id, nombre, zona) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-ejercicio2',
        responseType: 'json',
        data: {
            _id: _id,
            nombre: nombre,
            zona: zona
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El ejercicio se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_ejercicios();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const cambiar_estado = async(_id, estado) => {
    let url;
    if (estado == 'Inactivo') {
        url = 'http://localhost:3000/api/activar-ejercicio';
    } else {
        url = 'http://localhost:3000/api/desactivar-ejercicio';
    };

    await axios({
        method: 'put',
        url: url,
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El estado del ejercicio se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_ejercicios();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};