<?php

//para corroborar que se envian los datos del form

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores enviados desde el formulario
    $nombre = $_POST["validation01"];
    $apellido = $_POST["validation02"];
    $correo = $_POST["exampleFormControlInput1"];
    $celular = $_POST["validation03"];
    $necesidad = $_POST["validation04"];
    $comentario = $_POST["Textarea1"];
    
    //  validación o procesamiento adicional 
    
    // Ejemplo: Mostrar los datos recibidos
    echo "Nombre: " . $nombre . "<br>";
    echo "Apellido: " . $apellido . "<br>";
    echo "Correo: " . $correo . "<br>";
    echo "Celular: " . $celular . "<br>";
    echo "Necesito: " . $necesidad . "<br>";
    echo "Comentario: " . $comentario . "<br>";
}
?>