<?php
        require ('valida_login.php');
        $idutilizador = $_SESSION['id'];
        $atualemail = $_POST['atualemail'];
        $novoemail = $_POST['novoemail'];
require ("ligabd.php");


$verifica = "SELECT * from Utilizador where email='".$atualemail."' and idutilizador='".$idutilizador."'";

     
     $faz_verifica = mysqli_query($ligaBD, $verifica);
     
	 if (!isset($faz_verifica))
        {header("Location:Account.php?msg=bd"); exit;}
        
	 $verificado = mysqli_num_rows($faz_verifica);
       
if ($verificado==1)
{
    $alteraremail = "UPDATE Utilizador SET email = '".$novoemail."' WHERE idutilizador = '".$idutilizador."'";
    
    $alterado=mysqli_query($ligaBD, $alteraremail);
    header("Location:Account.php?msg=s");    
}else{
   header("Location:Account.php?msg=erromail");
}
?>
