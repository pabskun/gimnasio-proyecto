'use strict';
let listaUsuarios = [{
        'correo': 'admin@admin.com',
        'nombre': 'Raúl Pérez',
        'nacimiento': '09-20-1973',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Administrador'
    }, {
        'correo': 'amanda@gmail.com',
        'nombre': 'Amanda Víquez',
        'nacimiento': '03-11-1991',
        'sexo': 'Femenino',
        'contrasenna': '123Abc!',
        'tipo': 'Instructor'
    },
    {
        'correo': 'pablo@gmail.com',
        'nombre': 'Pablo Monestel',
        'nacimiento': '10-12-1987',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    },
    {
        'correo': 'jose@gmail.com',
        'nombre': 'José Ramírez',
        'nacimiento': '03-11-1990',
        'sexo': 'Masculino',
        'contrasenna': '123Abc!',
        'tipo': 'Cliente'
    }
];



let ejercicios = [{
        'nombre': 'Abdominales',
        'zona': 'Abdomen'
    },
    {
        'nombre': 'Sentadillas',
        'zona': 'Glúteos'
    },
    {
        'nombre': 'Press de pecho',
        'zona': 'Pecho'
    },
    {
        'nombre': 'TRX abierto',
        'zona': 'Pecho'
    },
    {
        'nombre': 'Curl de bíceps',
        'zona': 'Brazo'
    }
]

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