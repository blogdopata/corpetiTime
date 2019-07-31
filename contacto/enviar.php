<?php

   // Llamando a los campos

	 $nombre = $_POST['nombre'];
	 $email = $_POST['email'];
	 
	 $telefono = $_POST['telefono'];
	 $ruc = $_POST['ruc'];
	 $producto = $_POST['producto'];
	 $cantidad = $_POST['cantidad'];
	 $consulta = $_POST['consulta'];

	// DATOS PARA EL CORREO 

	$destinatario = "ventas@corpeti.com";
	$asunto = "Contacto Corpeti";

	$mensaje = "De: $nombre \n";
	$mensaje .= "Correo: $email \n";
	$mensaje .= "RUC: $ruc \n";
	$mensaje .= "Producto: $producto \n";
	$mensaje .= "Cantidad: $cantidad \n";
	$mensaje .= "Consulta: $consulta \n";


// Enviando el Mensaje 

mail($destinatario,$asunto,$mensaje);
header('Location:../index.html')


	// echo $nombre . " - " . $email . "- " . $telefono .  "- " .  $ruc .  "- " .  $producto .  "- " . $cantidad .  "- " . $consulta



?>;