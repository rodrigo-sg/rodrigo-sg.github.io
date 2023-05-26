<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtener los valores del formulario
  $nombre = $_POST["validation01"];
  $apellido = $_POST["validation02"];
  $email = $_POST["validation03"];
  $password = $_POST["validation04"];
 
  echo "Nombre: " . $nombre. "<br>";
  echo "Apellido: " . $apellido. "<br>";
  echo "Correo: " . $email. "<br>";
  echo "contraseña: " .  $password. "<br>";

  // Redirigir al usuario a una página 
  //  header("Location: success.php");
  // exit();
}
?>
