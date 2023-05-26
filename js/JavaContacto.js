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
  
  
  
  
  
