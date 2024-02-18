const alerta = () =>{
    alert('Formulario enviado exitosamente');
};

const obtained_data = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    let nombre = document.getElementById('txtnombre').value;
    let email = document.getElementById('txtemail').value;
    let opcion = document.querySelector('input[name="opciones"]:checked') ? document.querySelector('input[name="opciones"]:checked').value : "";
    let mensaje = document.querySelector('textarea[name="mensaje"]').value;

    // Obtener respuestas anteriores del localStorage o inicializar un array vacío
    let respuestasGuardadas = JSON.parse(localStorage.getItem('respuestas')) || [];

    // Agregar la nueva respuesta al array de respuestas
    let nuevaRespuesta = {
        nombre: nombre,
        email: email,
        opcion: opcion,
        mensaje: mensaje
    };
    respuestasGuardadas.push(nuevaRespuesta);

    // Guardar el array de respuestas en localStorage
    localStorage.setItem('respuestas', JSON.stringify(respuestasGuardadas));

    // Limpia los campos del formulario
    document.getElementById('txtnombre').value = '';
    document.getElementById('txtemail').value = '';
    document.querySelector('input[name="opciones"]:checked').checked = false;
    document.querySelector('textarea[name="mensaje"]').value = '';

};

document.getElementById('contactForm').addEventListener('submit', obtained_data ); 

// Llamar a la función para que el evento se registre cuando se cargue la página
//obtained_data();
