let view = () => {
    let respuestasGuardadas = JSON.parse(localStorage.getItem('respuestas')) || [];

    // Verificar si respuestasGuardadas es un array
    if (Array.isArray(respuestasGuardadas)) {
        // Mostrar cada respuesta en la tabla
        let respuestasTable = document.getElementById('respuestasTable');
        respuestasTable.innerHTML = ''; // Limpiar contenido anterior de la tabla

        // Iterar sobre el array de respuestas guardadas
        respuestasGuardadas.forEach(respuesta => {
            // Agregar cada respuesta como una nueva fila en la tabla
            respuestasTable.innerHTML += `
                <tr>
                    <td>${respuesta.nombre}</td>
                    <td>${respuesta.email}</td>
                    <td>${respuesta.opcion}</td>
                    <td>${respuesta.mensaje}</td>
                </tr>
            `;
        });
    } else {
        console.error('Los datos no son un array de respuestas guardadas:', respuestasGuardadas);
    }
}
document.addEventListener('DOMContentLoaded', () => view());
