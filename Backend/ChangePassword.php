<?php
        require ('valida_login.php');
        $idutilizador = $_SESSION['id'];
        $atualpass = md5($_POST['atualpass']);
        $novapass = md5($_POST['novapass']);
require ("ligabd.php");


$verifica = "select * from Utilizador WHERE password='".$atualpass."' and idutilizador='".$idutilizador."'";

     
     $faz_verifica = mysqli_query($ligaBD, $verifica);
     
	 if (!isset($faz_verifica))
        {header("Location:Account.php?msg=bd"); exit;}
        
	 $verificado = mysqli_num_rows($faz_verifica);
       
if ($verificado==1)
{
    $alterarpass = "update Utilizador SET password = '".$novapass."' WHERE idutilizador = '".$idutilizador."'";
    
    $alterado=mysqli_query($ligaBD, $alterarpass);
    header("Location:Account.php?msg=s");    
}else{
   header("Location:Account.php?msg=erropass");
}
?>
