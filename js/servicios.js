'use strict';
let listaUsuarios = [{
        'correo': 'admin@admin.com',
        'nombre': 'Raúl Pérez',
        'nacimiento': '20-09-1973',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Administrador'
    }, {
        'correo': 'amanda@gmail.com',
        'nombre': 'Amanda Víquez',
        'nacimiento': '11-03-1991',
        'sexo': 'Femenino',
        'contrasenna': '123Abc!',
        'tipo': 'Instructor'
    },
    {
        'correo': 'pablo@gmail.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '12-10-1987',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    }
];


const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                sessionStorage.setItem('usuarioConectado', JSON.stringify(usuario));
            }
        }
    });

    if (credencialesCorrectas == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Bienvenido',
            'text': 'Ha iniciado sesión correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'dashboard.html';
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No ha podido iniciar sesión',
            'text': 'Usuario o contraseña incorrectos',
            'confirmButtonText': 'Entendido'
        });
    }
};