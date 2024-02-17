//console.log('vinculado')
const getdata = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://storage.googleapis.com/datos_tablas/users.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            // Verificar si data.users es un array
            if (Array.isArray(data.users)) {
                let res = document.querySelector('#res');
                res.innerHTML = '';

                // Iterar sobre el array de usuarios
                data.users.forEach(item => {
                    res.innerHTML += `
                        <tr>
                            <td>${item.username}</td>
                            <td>${item.password}</td>
                            <td>${item.type}</td>
                        </tr>`;
                });
            } else {
                console.error('Los datos no son un array de usuarios:', data.users);
            }
        }
    };
};

document.querySelector('#user-list').addEventListener('click', getdata);

