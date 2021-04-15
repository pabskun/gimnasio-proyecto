'use strict';
const div_ejercicios = document.querySelector('#div_ejercicios');
const btn_crear = document.querySelector('#btn-crear');


const mostrar_ejercicios = async() => {
    let lista_ejercicios = await listar_ejercicios();

    div_ejercicios.innerHTML = '';

    lista_ejercicios.forEach(ejercicio => {

        if (ejercicio.estado == 'Activo') {
            let div = document.createElement('div');

            let label = document.createElement('label');
            label.innerText = ejercicio.nombre;


            let check = document.createElement('input');
            check.type = 'checkbox';
            check.value = ejercicio._id;

            // Contenedor de la imagen
            let div_imagen = document.createElement('div');
            div_imagen.classList.add('img-container');

            // Imagen
            let imagen = document.createElement('img');
            imagen.src = ejercicio.imagen;

            div_ejercicios.appendChild(div);

            div.appendChild(label);
            div.appendChild(check);
            div.appendChild(div_imagen);
            div_imagen.appendChild(imagen);
        }

    });
};

const obtener_datos = () => {
    let nombre = document.querySelector('#txt-nombre').value;

    let ejercicios_seleccionados = [];

    document.querySelectorAll('input[type=checkbox]:checked').forEach(input => {
        ejercicios_seleccionados.push(input.value);
    });


    registrar_rutina(nombre, ejercicios_seleccionados);
};
mostrar_ejercicios();
btn_crear.addEventListener('click', obtener_datos);