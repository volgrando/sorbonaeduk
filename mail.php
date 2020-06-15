<?php

    $destinatario = "ezavala.lopezm@gmail.com";

    // Datos para el correo
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
	$email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $asunto = "Contacto desde nuestra web";
    
    //Estoy recibiendo el formulario, compongo el cuerpo
    $cuerpo = "Nombre: $fname \n";
    $cuerpo .= "Apellido: $lname \n";
    $cuerpo .= "Correo: $email \n";
    $cuerpo .= "Asunto: $subject \n";
    $cuerpo .= "Mensaje = $message";

    //Enviando mensaje
    mail($destinatario, $asunto, $cuerpo)	
?>