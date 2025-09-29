<?php
        require ('valida_login.php');
        $idutilizador = $_SESSION['id'];
        $password = md5($_POST['password']);
require ("ligabd.php");


$verifica = "select * from Utilizador WHERE password='".$password."' and idutilizador='".$idutilizador."'";

     
     $faz_verifica = mysqli_query($ligaBD, $verifica);
     
	 if (!isset($faz_verifica))
        {header("Location:Account.php?msg=bd"); exit;}
        
	 $verificado = mysqli_num_rows($faz_verifica);
       
if ($verificado==1)
{
    $deleteuser = "DELETE FROM Utilizador WHERE idutilizador='".$idutilizador."'";
    
    $deleted=mysqli_query($ligaBD, $deleteuser);
    header("Location:Account.php?msg=deleted");    
}else{
   header("Location:Account.php?msg=errodel");
}
?>




