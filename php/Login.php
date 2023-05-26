<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtener los valores del formulario
  $email = $_POST["validation01"];
  $password = $_POST["validation02"];
  $remember = isset($_POST["remember"]);

 
  // ...

  echo "Correo: " . $email. "<br>";
  echo "password: " .  $password. "<br>";


  // Redirigir al usuario a una página 
 // header("Location: success.php");
  // exit();
}
?>
