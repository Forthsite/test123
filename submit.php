<?php
  $name = $_POST["uzivatel"];
  $email = $_POST["email"];
  $message = $_POST["zprava"];
  $option = $_POST['Option'];

  $to = "produkceforthsite@email.cz";
  $subject = "Nova zprava z Webjakbrno";
  $message = "Name: $name\nEmail: $email\n\n$message\n\n$option";
  $headers = "from: produkceforthsite@email.cz \n";
  $headers .= "X-mailer: phpWebmail \n";
if( mail($to, $subject, $message, $headers) )
  {echo "OK - mail odeslán";}
else
  {echo "CHYBA - odeslání se nepovedlo";}
?>