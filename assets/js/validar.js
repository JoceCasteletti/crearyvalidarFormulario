function validar(event) {
  event.preventDefault();
  var nombre;
  var apellidos;
  var email;
  var usuario;
  var pass;
  var telefono;
  var error = false;

  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  email = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  pass = document.getElementById("pass").value;
  telefono = document.getElementById("telefono").value;
  error = document.getElementById("error").value;

  // Validaciones

  if (nombre.length === 0) {
    alert("El campo nombre no puede estar vacío.");
    error = true;
  } else if (nombre.length > 30) {
    alert("El nombre ingresado supera el largo permitido.");
    error = true;
  }

  if (apellidos.length === 0) {
    alert("El campo apellidos no puede estar vacío.");
    error = true;
  } else if (apellidos.length > 80) {
    alert("Los apellidos ingresados superan el largo permitido.");
    error = true;
  }

  if (email.length === 0) {
    alert("El campo email no puede estar vacío.");
    error = true;
  } else if (email.length > 100) {
    alert("El email ingreaado supera el largo permitido.");
    error = true;
  }

  if (!(/^[a-zA-Z0-9\.]*@[a-zA-Z0-9]*\.[a-zA-Z0-9]+/.test(email))) {
    alert("Se debe ingresar en campo email un ‘@’ y un punto ‘.’ en algún momento después de dicho caracter")
    error = true;
  }

  if (usuario.length === 0) {
    alert("El campo usuario no puede estar vacío.");
    error = true;
  } else if (usuario.length > 20) {
    alert("El nombre de usuario ingresado supera el largo permitido.");
    error = true;
  }

  if (pass.length === 0) {
    alert("El campo pass no puede estar vacío.");
    error = true;
  } else if (pass.length < 8) {
    alert("La contraseña ingresada no puede ser inferior a 8 dígitos.");
    error = true;
  }

  if (telefono.length === 0) {
    alert("El campo teléfono no puede estar vacío.");
    error = true;
  } else if (telefono.length > 15) {
    alert("El número de teléfono ingresado supera el largo permitido.");
    error = true;
  }

  if (!(/^[0-9]*$/.test(telefono))) {
    alert("Favor ingresar un número en campo teléfono.");
    error = true;
  }

  if (!error) {
    // Todo en el formulario está ok
    alert(`Bienvenido!, ${nombre} ${apellidos} tu usuario y contraseña son: "${usuario} - ${pass}", 
    gracias por registrarte con nosotros.`);
  }
}
