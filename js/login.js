console.log('Vinculado');

let users = [];

let validateLogin = () => {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user === '' || pass === '') {
        alert('Por favor, ingrese nombre de usuario y contraseña.');
        return false;
    }

    let foundUser = users.find(u => u.username === user && u.password === pass);
    if (foundUser) {
        alert('Inicio de sesión exitoso');
        redirectUser();
    } else {
        alert('Credenciales incorrectas');
    }
};

fetch('../json/users.json')
    .then(response => {
        if (!response.ok){
            throw new Error('Error al obtener datos de usuarios.');
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        users = json;
    })
    .catch(err => console.error('Solicitud fallida: ', err));

document.getElementById('acceder').addEventListener('click', validateLogin);

let redirectUser = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=M4LaQ3KUGOM';
}

