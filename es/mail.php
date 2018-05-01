<?php
header('Content-Type: text/html; charset=iso-8859-1');
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$messaggio = $_POST['messaggio'];

$to = "website@armanagement.net";
$subject = "Email sito ARMANAGEMENT.NET";
$message = "
<h4>Nuovo messaggio</h4><br />
<p>Hai ricevuto un messaggio da: <b>".$name." ".$lastname."</b><br>Email: <b>".$email."</b><br>Telefono:<b>".$phone.".</b><br />
Testo del messaggio: <br />
".$messaggio."";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

ini_set('SMTP', "relay-hosting.secureserver.net");
ini_set('smtp_port', "25");

if($name != "" or $lastname!="" or $email!="" or $phone!="" or $messaggio!=""){
$sent = mail($to, $subject, $message, $headers);

if ($sent) { 
	echo "<script>";
	echo " alert('Email succesfully sent.');      
    window.location.href='http://www.armanagement.net';
	</script>";
	
} else {
	echo "<script type='text/javascript'>alert('error sending the email!')</script>";
}
}
else 
		echo "<script type='text/javascript'>alert('Name,LastName,Phone,Mail or Message EMPTY'); window.location.href='http://www.armanagement.net';</script> ";

?>