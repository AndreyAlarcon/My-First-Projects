const botonOscuro = document.querySelector('#btn-modo-oscuro');
const cuerpoPagina = document.querySelector('body');

if (localStorage.getItem('modo-oscuro') === 'true') {
    cuerpoPagina.classList.add('modo-oscuro');
    botonOscuro.textContent = 'Modo Claro';
} else {
    botonOscuro.textContent = 'Modo Oscuro';
}

botonOscuro.addEventListener('click', () => {
    cuerpoPagina.classList.toggle('modo-oscuro');
    const activo = cuerpoPagina.classList.contains('modo-oscuro');
    localStorage.setItem('modo-oscuro', activo ? 'true' : 'false');
    botonOscuro.textContent = activo ? 'Modo Claro' : 'Modo Oscuro';
});

const formulario = document.querySelector('#formulario-contacto');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputCelular = document.querySelector('#celular');
const mensajeAlerta = document.querySelector('#mensaje-alerta');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let errores = [];

    if (inputNombre.value.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    if (inputEmail.value.length < 5 || !inputEmail.value.includes('@')) {
        errores.push('Por favor, ingrese un correo electrónico válido.');
    }

    if (inputCelular.value.length < 10) {
        errores.push('El número de celular debe tener al menos 10 dígitos.');
    }

    if (errores.length > 0) {
        mensajeAlerta.textContent = errores.join('\n');
        mensajeAlerta.style.color = 'red';
    } else {
        mensajeAlerta.textContent = 'Formulario enviado correctamente.';
        mensajeAlerta.style.color = 'green';

        formulario.reset();
    }
});
