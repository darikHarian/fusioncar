<?php

// Variables
$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];
$email_from = $_POST['email'];

// Destinatario
$email_to = "ventas@fusioncar.cl";	
$email_subject = "Mensaje de cliente desde vallesarquitectura.cl";
	
// Contenido del mensaje	
$email_message .= "Contenido del Mensaje:\n\n";  
$email_message .= "Nombre: " . $_POST['name'] ."\n";
$email_message .= "Asunto: " . $_POST['subject'] ."\n";
$email_message .= "Email: " . $_POST['email'] ."\n";
$email_message .= "Mensaje: " . $_POST['message'] ."\n";
 

// Función mail para envío del mensaje
$headers = 'From: ' .$email_from . "\r\n" . 
'Reply-To: '. $email_from . "\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

// Redirección al enviar el mensaje con éxito
header('Location:form-success.html');

?>