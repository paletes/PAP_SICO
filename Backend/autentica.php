<?php
        $nome = $_POST['nome'];
        $apelido = $_POST['apelido'];
        $email = $_POST['email'];
        $password = md5($_POST['password']);
require ("ligabd.php");
     
     //Início de ação sobre a BD    
     $existe = "select * from Utilizador where email='".$email."' and password='".$password."'";

     
     $faz_existe = mysqli_query($ligaBD, $existe);
     
	 if (!isset($faz_existe))
        {header("Location:login.php?msg=bd"); exit;}
        
	 $jaexiste = mysqli_num_rows($faz_existe);
       
if ($jaexiste==1)
{
        $user=mysqli_fetch_assoc($faz_existe);
        session_start();
        $_SESSION['email']=$email;
        $_SESSION['id']=$user["idutilizador"];
        header("Location:UserPage.php"); 
}else{
   header("Location:login.php?msg=erro");
}
?>

