console.log('Vinculado');

let users = [];

//  se utiliza fetch para obtener los datos de usuarios
fetch('../json/users.json')
    .then(response => {
        if (!response.ok){
            throw new Error('Error al obtener datos de usuarios.');
        }
        return response.json();
    })
    .then(json => {
        console.log('Datos de usuarios obtenidos:', json);
        // Verificamos si los datos son un arreglo
        if (Array.isArray(json)) {
            // Si son un array, los asignamos directamente a users
            users = json;
            console.log('Usuarios cargados:', users);
        } else {
            // Si no son un array, los metemos en uno
            users = [json];
            console.log('Usuarios cargados:', users);
        }
    })
    .catch(err => console.error('Solicitud fallida: ', err));


let validateLogin = () => {
    let user = document.getElementById("txt_user").value;
    let pass = document.getElementById("txt_pass").value;

    if (user === '' || pass === '') {
        alert('Por favor, ingrese nombre de usuario y contraseña.');
        return false;
    }

    // se hace la búsqueda de usuario y contraseña directamente aquí
    let foundUser = users.find(u => u.username === user && u.password === pass);
    if (foundUser) {
        alert('Inicio de sesión exitoso');
        redirectUser();
    } 
    else {
        alert('Credenciales incorrectas');
    }
};



let redirectUser = () =>{
    window.location.href = '../index.html';
}
