// script para verificar que las contraseñas coincidan
function validarcontraseñas() {
    var password1 = document.getElementById("validation04").value;
    var password2 = document.getElementById("validation05").value;
  
    if (password1 !== password2) {
      alert("Las contraseñas no coinciden. Por favor, verifíquelas.");
      return false; // Evita enviar el formulario
    }
  
    return true; // Envía el formulario
  }

  // script para lograr ver las contraseñas
  
  function togglePasswordVisibility(fieldId) {
    var field = document.getElementById(fieldId);
    var button = document.getElementById('togglePassword' + fieldId.substr(-1));

    if (field.type === 'password') {
        field.type = 'text';
        button.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        field.type = 'password';
        button.innerHTML = '<i class="bi bi-eye"></i>';
    }
}

  