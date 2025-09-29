	<?php
	//captar dados do formulário
	 $nome = $_POST['nome'];
	 $apelido = $_POST['apelido'];
     $email = $_POST['email'];
	 $password = $_POST['password'];
	 
	 //verifica se foram preenchidos todos os campos
	 if (!($nome) || !($apelido) || !($email) || !($password))
     {header("Location:login.php?msg=dados"); exit;}

     require ("ligabd.php");
     
     //Início de ação sobre a BD    
     $existe = "select * from Utilizador where email='".$email."'";
     
     $faz_existe = mysqli_query($ligaBD, $existe);
     
	 if (!isset($faz_existe))
     {header("Location:login.php?msg=bd"); exit;}
        
	 $jaexiste = mysqli_num_rows($faz_existe);
	  //Início de verificação se o utilizador já está registado
	  if ($jaexiste==0)
		{
         $insere_user = "INSERT INTO Utilizador(nome,apelido,email,password) VALUES ('$nome', '$apelido', '$email', MD5('$password'))";
         
         $faz_insere_user = mysqli_query($ligaBD, $insere_user);
         
	 if (!isset($faz_insere_user))
		{header("Location:login.php?msg=n"); exit;}
	 else header("Location:login.php?msg=s");
		}
		else
    
        header("Location:login.php?msg=r");
	?>
