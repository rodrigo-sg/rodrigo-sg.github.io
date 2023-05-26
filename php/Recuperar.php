<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtener los valores del formulario

  $email = $_POST["validation01"];


  echo "Correo a recuperar: " . $email. "<br>";


  // Redirigir al usuario a una página 
  //  header("Location: success.php");
  // exit();
}
?>