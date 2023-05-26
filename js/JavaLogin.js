// Obtener el botón y el campo de contraseña
const togglePasswordButton = document.getElementById('togglePassword');
const passwordField = document.getElementById('exampleInputPassword');

// Agregar el evento click al botón
togglePasswordButton.addEventListener('click', function() {
  // Cambiar el tipo de entrada del campo de contraseña
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    togglePasswordButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else {
    passwordField.type = 'password';
    togglePasswordButton.innerHTML = '<i class="bi bi-eye"></i>';
  }
});

// Obtenr la casilla de verificación y el botón de enviar
var rememberCheckbox = document.getElementById("rememberCheckbox");
var submitButton = document.querySelector("button[type='submit']");

// Verificar el estado de la caslla de verificación al cargar la página
window.addEventListener("DOMContentLoaded", function () {
  var rememberCredentials = localStorage.getItem("rememberCredentials");

  if (rememberCredentials === "true") {
    rememberCheckbox.checked = true;
  }
});

// Escuchar el evento de cambio de la casilla de verifcación
rememberCheckbox.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("rememberCredentials", "true");
  } else {
    localStorage.removeItem("rememberCredentials");
  }
});

// Escuchar el evento de envío del formulario
submitButton.addEventListener("click", function () {
  // Si el usuario no ha marcado la casilla de verificación, eliminar las credenciales recordadas
  if (!rememberCheckbox.checked) {
    localStorage.removeItem("rememberedUsername");
    localStorage.removeItem("rememberedPassword");
  }
});

