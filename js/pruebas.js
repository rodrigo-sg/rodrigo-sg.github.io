
/* intento 6 */
function validarFormulario(event) {
  var celular = document.getElementById('validation03').value;


  if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)) { // corroborra la cantidad de dígitos del celular sea correcta
    alert('Cantidad de dígitos de celular inválidos');
    event.preventDefault(); // Detiene el envío del formulario
    return false; // Evita enviar el formulario
  }

  var checkbox = document.getElementById('invalidCheck2'); // corroborra que el check box esté marcado
  if (!checkbox.checked) {
    alert('Debe aceptar los términos y condiciones');
    event.preventDefault(); // Detiene el envío del formulario
    return false; // Evita enviar el formulario
  }

  var form = document.getElementById('Form'); // obtiene todos los elemenos de etrada del form
  var inputs = form.getElementsByTagName('input');
  var incompleteFields = [];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'checkbox' && inputs[i].value.trim() === '') {
      var label = form.querySelector('label[for="' + inputs[i].id + '"]').textContent;
      incompleteFields.push(label);
    }
  }

  if (incompleteFields.length > 0) {
    var message = 'Por favor, complete los siguientes campos:' + '\n';
    for (var j = 0; j < incompleteFields.length; j++) {
      message += '- ' + incompleteFields[j] + '\n';
    }
    alert(message);
    event.preventDefault(); // Detiene el envío del formulario
    return false; // Evita enviar el formulario
  }
  var comentario = document.getElementById('Textarea1').value;

  if (comentaio.length = 0 ) { // corroborra que e haya escrito un comentario
    alert('Por favor, agrega un comentario');
    event.preventDefault(); // Detiene el envío del formulario
    return false; // Evita enviar el formulario
  }

  
  return true; // Permite enviar el formulario
}





/* intento 5 
function validarFormulario() {
  var celular = document.getElementById('validationDefault03').value;

  if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)) {
    alert('Cantidad de dígitos incorrecta');
    return false; // Evita enviar el formulario
  }

  var checkbox = document.getElementById('invalidCheck2');
  if (!checkbox.checked) {
    alert('Debe aceptar los términos y condiciones');
    return false; // Evita enviar el formulario
  }

  var form = document.getElementById('Form');
  var inputs = form.getElementsByTagName('input');
  var incompleteFields = [];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'checkbox' && inputs[i].value.trim() === '') {
      var label = form.querySelector('label[for="' + inputs[i].id + '"]').textContent;
      incompleteFields.push(label);
    }
  }

  if (incompleteFields.length > 0) {
    var message = 'Por favor, complete los siguientes campos:' + '\n';
    for (var j = 0; j < incompleteFields.length; j++) {
      message += '- ' + incompleteFields[j] + '\n';
    }
    alert(message);
    return false; // Evita enviar el formulario
  }

  return true; // Permite enviar el formulario
}
*/





/* limpia el formulario despues de enviarse 
function limpiarFormulario() {
  document.getElementById("Form").reset();
}

/* digitos de celular insuficiente
function verificarCantidadDigitos() {
    var celular = document.getElementById('validationDefault03').value;
    
    if (celular.length < 9 || celular.length > 9) {
      alert('Cantidad de dígitos incorrecta');
    }
}



*/

/*
  function verificarCantidadDigitos() {
    var celular = document.getElementById('validationDefault03').value;
    
    if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)){
      alert('Cantidad de dígitos del celular incorrecto');
      return false; // Evita enviar el formulario
    }
    
    return true; // Permite enviar el formulario
  }
  function limpiarFormulario() {
      document.getElementById('Form').reset();
    }
/*



// Permite enviar el formulario si se cumple que los campos estan llenados y los digitos del numero del celular sean correctos
    function verificarCantidadDigitos() {
        var celular = document.getElementById('validationDefault03').value;
        
        if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)) {
          alert('Cantidad de dígitos incorrecta');
          return false; // Evita enviar el formulario
        }
        
        var form = document.getElementById('Form');
        var inputs = form.getElementsByTagName('input');
        
        for (var i = 0; i < inputs.length; i++) {
          if (inputs[i].value === '') {
            alert('Por favor, complete todos los campos del formulario');
            return false; // Evita enviar el formulario
          }
        }
        
        return true; // Permite enviar el formulario
      }
      
      function limpiarFormulario() {
        document.getElementById('Form').reset();
      }
      */



/*
// Verificación múltiple de que todos los campos estén llenos para enviarse, en caso el campo de celular no cumple la condición no enviar
//en caso se cumple todas las condiciones se enviara el foormulario y se limpiarán los datos.


      // Obtener referencia al formulario

  // Obtener referencia al formulario
  var form = document.getElementById('Form');

  // Agregar evento 'submit' al formulario
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    if (verificarCantidadDigitos()) {
      setTimeout(function() {
        limpiarFormulario();
      }, 2); // Esperar 100ms antes de limpiar el formulario
    } else {
      alert('Por favor, complete todos los campos del formulario correctamente');
    }
  });

  function verificarCantidadDigitos() {
    var celular = document.getElementById('validationDefault03').value;

    if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)) {
      alert('Cantidad de dígitos incorrecta');
      return false; // Evita enviar el formulario
    }

    var inputs = form.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        return false; // Evita enviar el formulario
      }
    }

    return true; // Permite enviar el formulario
  }

  function limpiarFormulario() {
    form.reset();
  }

*/



/*
  //intento 3
  function validarFormulario() {
    var celular = document.getElementById('validationDefault03').value;

    if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)) {
      alert('Cantidad de dígitos incorrecta');
      return false; // Evita enviar el formulario
    }

    var form = document.getElementById('Form');
    var inputs = form.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        alert('Por favor, complete todos los campos del formulario correctamente');
        return false; // Evita enviar el formulario
      }
    }

    limpiarFormulario();
    return false; // Evita enviar el formulario de manera convencional
  }

  function limpiarFormulario() {
    var form = document.getElementById('Form');
    form.reset();
  }


  */



//intento 4  
 /*function validarFormulario() {
    var celular = document.getElementById('validationDefault03').value;

    if (celular.length !== 0 && (celular.length < 9 || celular.length > 9)) {
      alert('Cantidad de dígitos incorrecta');
      return false; // Evita enviar el formulario
    }

    var form = document.getElementById('Form');
    var inputs = form.getElementsByTagName('input');
    var incompleteFields = [];

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        var label = form.querySelector('label[for="' + inputs[i].id + '"]').textContent;
        incompleteFields.push(label);
      }
    }

    if (incompleteFields.length > 0) {
      var message = 'Por favor, complete los siguientes campos:' + '\n'; // Cambio
      for (var j = 0; j < incompleteFields.length; j++) {
        message += '- ' + incompleteFields[j] + '\n'; // Cambio
      }
      alert(message);
      return false; // Evita enviar el formulario
    }
}*/








