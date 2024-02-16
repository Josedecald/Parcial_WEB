const fs = require('fs');

let readJSONFile = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error:', err);
            return;
        }
        let users = JSON.parse(data);
        console.log(users);
    });
}


let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

let validateLogin = (user, pass) => {
    let users = readJSONFile('../json/users.json');
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user && users[i].password === pass) {
            return true;
        }
    }
    return false;
};
