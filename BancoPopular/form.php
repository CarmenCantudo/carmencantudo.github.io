<?php
if(isset($_POST['email'])) {

$email_to = "mail@reclamatusaccionesbancopopular.es";
$email_subject = "Mensaje web Banco Popular";

$email_message = "Formulario de contacto - Banco Popular:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Email: " . $_POST['email'] . "\n";
$email_message .= "Tel�fono: " . $_POST['telefono'] . "\n";
$email_message .= "Mensaje: " . $_POST['mensaje'] . "\n\n";


// Ahora se env�a el e-mail usando la funci�n mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "Mensaje enviado con �xito." . " -" . "<a href='index.html' style='text-decoration:none;color:#95212A;'> Volver al inicio</a>";
}
?>