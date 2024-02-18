console.log("Vinculado");

const validateLogin = () => {
  const user= document.getElementById("txt_user").value.trim(); // Renombrar la variable para evitar la redeclaración
  const pass = document.getElementById("txt_pass").value.trim(); // Renombrar la variable para evitar la redeclaración

  if (user== "" || pass == "") { // Simplificar la lógica de validación de campos vacíos
    alert("Por favor, rellene ambos espacios para iniciar sesión");
    return; // Detener la ejecución de la función si hay campos vacíos
  }

  fetch("../json/users.json")
    .then((res) => res.json())
    .then((data) => {
      const users = data.users; // Acceder al array de usuarios dentro del objeto
      const foundUser = users.find(us => us.username == user && us.password == pass);
      if (foundUser) {
        if (foundUser.type == "0") { // Corregir la comparación de tipo de usuario
          window.location.href = "../html/adminhub.html"; // Corregir la ruta de redirección
        } else if (foundUser.type == "1") { // Corregir la comparación de tipo de usuario
          window.location.href = "../html/indexLoginusers.html"; // Corregir la ruta de redirección
        }
      } else {
        alert("Nombre de usuario o/y contraseña incorrectos");
      }
    })
    .catch((error) => {
      console.error("Error en el JSON", error);
      alert("Ocurrió un error al cargar los datos de usuario. Por favor, inténtelo de nuevo más tarde."); // Proporcionar una alerta en caso de error
    });
};
