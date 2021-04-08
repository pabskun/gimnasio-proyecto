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

const obtenerUsuarios = async() => {
    let listaUsuarios;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-usuarios',
            responseType: 'json'
        })
        .then((response) => {
            listaUsuarios = response.data.usuarios;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaUsuarios;
};

const modificarUsuario = async(pcorreo, pnombre, pnacimiento, psexo, ptipo, pestado) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-usuario',
            responseType: 'json',
            data: {
                correo: pcorreo,
                nombre: pnombre,
                nacimiento: pnacimiento,
                sexo: psexo,
                tipo: ptipo,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Usuario modificado',
                'text': 'La información fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'usuarios.html';
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

const eliminarUsuario = async(pcorreo) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-usuario',
            responseType: 'json',
            data: {
                correo: pcorreo
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'El usuario ha sido eliminado',
                'success'
            ).then(() => {
                window.location.href = 'usuarios.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};

const iniciarSesion = async(pcorreo, pcontrasenna) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/validar-credenciales',
            responseType: 'json',
            data: {
                correo: pcorreo,
                contrasenna: pcontrasenna
            }
        })
        .then((response) => {
            if (response.data.estado == 'No encontrado') {
                Swal.fire({
                    'icon': 'warning',
                    'title': 'No ha podido iniciar sesión',
                    'text': 'Usuario o contraseña incorrectos',
                    'confirmButtonText': 'Entendido'
                });
            } else {

                Swal.fire({
                    'icon': 'success',
                    'title': 'Bienvenido',
                    'text': 'Ha iniciado sesión correctamente',
                    'confirmButtonText': 'Entendido'
                }).then(() => {
                    if (response.data.usuario.estado == 'Cambio contraseña') {
                        window.location.href = 'modificar-contrasenna.html';
                    } else {
                        sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data.usuario));
                        window.location.href = 'dashboard.html';
                    }
                });
            }
        })
        .catch((error) => {
            console.log(error)
        });
};