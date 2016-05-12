<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: ' . $name; 
    $to = 'geral@fit4all.pt'; 
    $subject = 'Mensagem de Contacto';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>A sua mensagem foi enviada!</p>';
        echo "<a href='index.html'>Voltar para pagina inicial</a>";
    } else { 
        echo '<p>Por favor volte a tentar!</p>'; 
        echo "<a href='index.html'>Voltar para pagina inicial</a>";
    }
}
?>

