'use strict';
const registrar_rutina = async(nombre, ejercicios) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-rutina',
        responseType: 'json',
        data: {
            cliente: nombre,
            ejercicios: JSON.stringify(ejercicios)

        }
    }).then((response) => {
        Swal.fire({
            'title': 'La rutina se registró con éxito',
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

const listar_rutinas = async() => {
    let lista_rutinas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-rutinas',
        responseType: 'json'
    }).then((response) => {
        lista_rutinas = response.data.lista_rutinas;
    }).catch((response) => {

    });

    return lista_rutinas;
};

const buscar_rutina = async() => {
    let rutina;

    await axios({
        method: 'get',
        params: { _id: localStorage.getItem('rutina_seleccionada') },
        url: 'http://localhost:3000/api/buscar-rutina-id',
        responseType: 'json'
    }).then((response) => {
        rutina = response.data.rutina;
    }).catch((response) => {

    });

    return rutina;
};

const eliminar_rutina = async(_id) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-rutina',
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La rutina ha sido eliminada',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_rutinas();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};