'use strict';

const registrarUsuario = async(pcorreo, pnombre, pnacimiento, psexo, ptipo) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-usuario',
            responseType: 'json',
            data: {
                correo: pcorreo,
                nombre: pnombre,
                nacimiento: pnacimiento,
                sexo: psexo,
                tipo: ptipo
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su cuenta se registro con éxito',
                'text': 'Por favor revise su correo electrónico',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'inicio-sesion.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el usuario',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });

};