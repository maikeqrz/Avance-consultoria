<?php
  // Variáveis
  $nome = $_POST['name'];
  $email = $_POST['email'];
  $mensagem = $_POST['message'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  // Corpo do E-mail
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  // E-mails para quem será enviado o formulário
  $destino = "tacianohora2020@hotmail.com";
  $assunto = "Contato pelo Site";

  // Cabeçalhos para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $headers .= "From: $nome <$email>\r\n";

  // Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";
?>
