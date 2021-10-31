<?php
  $user = $_POST['username'];
  $pass = $_POST['password'];
  if($user === "" || $pass === ""){
    echo json_encode("error");
  } else {
    echo json_encode("Tus datos: <br>Usuario: ".$user."<br>Contraseña: ".$pass);
  }
?>