<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'joaocorreia');
   define('DB_PASSWORD', '');
   define('DB_DATABASE', 'pap_joaocorreia');

$ligaBD = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
 if (!$ligaBD)
    {echo '<p> Erro: Falha na ligação.'; exit;}
 $escolheBD=mysqli_select_db($ligaBD, 'pap_joaocorreia');
 if (!$escolheBD)
    {echo '<p> Erro: Não existe a BD escolhida.'; exit;}
?>
