<?php
session_start();
require ('valida_login.php');
$idutilizador = $_SESSION['id'];
require ('ligabd.php');

?>

<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="assets/imgs/SICO-separador.ico" type="image/ico">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome/css/all.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Gestão de conta - SICO</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <!-- Bootstrap core CSS -->
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet">

    <!-- Custom styles for this template -->

</head>

<body>
   <!-- menu -->
  <div class="container-fluid">
        <div class="row p-3 main-menu">
            <div class="col-md-3">
                <a href="UserPage.php">
                    <img src="assets/imgs/sico-logo.png" title="Página do Utilizador" alt="Página do Utilizador" width="150" />
                </a>
            </div>
            <div class="col-md-9">
                <nav class="d-inline float-right">
                    <!--<a class="p-3 changecolor" href="#"><b>Sobre</b></a>
                    <a class="p-3 changecolor" href="#"><b>Como funciona</b></a>
                    <a class="p-3 changecolor" href="#"><b>Sugestões</b></a>
                    <a class="p-3 changecolor" href="#"><b>Transferir</b></a>
                    <a class="p-3 changecolor" href="Agradecimentos.html"><b>Agradecimentos</b></a>
                    <a class="p-3 changecolor" href="Loja.html"><b>Loja</b></a>
                    <a class="btn btn-dark" href="#"></a>
                    <a class="btn far fa-user-circle fa-2x" href="Login.html"></a>
                    colocar a foto do utilizador-->

                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                        <!--menu hamburguer-->

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor scrollbutton" data-rel="sobre" href="#"><b>Sobre</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="p-3 changecolor scrollbutton" data-rel="comofunciona" href="#"><b>Como funciona</b></a>
                                </li>-->
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="noticias.html"><b>Notícias</b></a>
                                </li>-->
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="forum.html"><b>Fórum</b></a>
                                </li>-->
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="faq.html"><b>F A Q</b></a>
                                </li>-->
                                 <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="downloads.html"><b>Downloads</b></a>
                                </li>-->
                                 <li class="nav-item">
                                    <a class="p-3 changecolor" href="UserPage.php"><b>Faturas</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="p-3 changecolor" href="Account.php"><b>Conta</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="p-3 changecolor" href="logout.php"><b>Sair</b> <i class="fas fa-sign-out-alt"></i></a>
                                </li>
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="Loja.html"><b>Loja</b></a>
                                </li>-->
                                <!--<li class="nav-item">
                                    <div class="btnentrar">
                                        <a class="far fa-user-circle fa-2x" ></a>-->
                                        <!--colocar a foto do utilizador-->
                                    <!--</div>
                                </li>-->
                            </ul>
                        </div>
                    </nav>
                </nav>
            </div>
        </div>
        </div>

        <!-- end menu -->
        
            <div class="container">
                <div class="col-md-10 offset-md-1">
                        <form class="user" action="ChangeEmail.php" method="post">
                            <h1 class="h3 mb-3 font-weight-normal" style="color: #8b0000; font-family: 'Quicksand', sans-serif; margin-top: 1cm;">Alterar E-mail</h1> <br>
                                <div class="col-md-9 offset-md-1">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col">
                                            <input type="email" class="form-control form-control-user" placeholder="E-mail atual" name="atualemail" id="atualemail" required>
                                        </div>
                                        <div class="col">
                                            <input type="email" class="form-control form-control-user" placeholder="Novo E-mail" name="novoemail" id="novoemail" required>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="col">
                                    <input type="submit" name="submit" class="btn float-right btn-danger" value="Alterar E-mail"></input> <br><br>
                                 </div>
                        </form>
                        <br>
                            <hr class="my-4">
                        <br>
                        <form class="user" action="ChangePassword.php" method="post">
                            <h1 class="h3 mb-3 font-weight-normal" style="color: #8b0000; font-family: 'Quicksand', sans-serif;">Alterar Palavra-passe</h1> <br>
                                <div class="col-md-9 offset-md-1">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col">
                                            <input type="password" class="form-control form-control-user" placeholder="Palavra-passe atual" name="atualpass" id="atualpass" required>
                                        </div>
                                        <div class="col">
                                            <input type="password" class="form-control form-control-user" placeholder="Nova Palavra-passe" name="novapass" id="novapass" required>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="col">
                                    <input type="submit" name="submit" class="btn float-right btn-danger" value="Alterar Palavra-passe"></button> <br><br>
                                 </div>
                        </form>

                        <br>
                            <hr class="my-4">
                        <br>
                        <form class="user" action="DeleteAccount.php" method="post">
                            <h1 class="h3 mb-3 font-weight-normal" style="color: #8b0000; font-family: 'Quicksand', sans-serif;">Eliminar Conta</h1> <br>
                                <div class="col-md-9 offset-md-1">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col-md-6">
                                            <input type="password" class="form-control form-control-user" placeholder="Palavra-passe" name="password" id="password" required>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="col">
                                    <input type="submit" name="submit" class="btn float-right btn-danger" value="Eliminar Conta"></button> <br><br>
                                 </div>
                                 <br><p style="text-align: center"><i>Ao "Eliminar Conta", todos os dados da sua conta SICO serão apagados permanentemente.</i></p>
                         </form>

                 </div>
             </div>
             <br><br>

                 <!-- Footer -->
        <footer class="page-footer font-small unique-color-dark">

            <div class="footer1">
                <div class="container">

    <!-- Grid row-->
   <!-- <div class="row py-4 d-flex align-items-center"> -->

      <!-- Grid column -->
      <!--<div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
        <h6 class="mb-0">Acompanhe-nos nas redes sociais!</h6>
      </div> -->
      <!-- Grid column -->

      <!-- Grid column -->
      <!--<div class="col-md-6 col-lg-7 text-center text-md-right">-->

        <!-- Facebook -->
        <!--<a class="fb-ic">
          <i class="fab fa-facebook-f white-text mr-4"> </i>
        </a>-->
        <!-- Twitter -->
        <!--<a class="tw-ic">
          <i class="fab fa-twitter white-text mr-4"> </i>
        </a>-->
        <!--Linkedin -->
       <!-- <a class="li-ic">
          <i class="fab fa-linkedin-in white-text mr-4"> </i>
        </a>-->
        <!--Instagram-->
        <!--<a class="ins-ic">
          <i class="fab fa-instagram white-text"> </i>
        </a>

      </div>-->
      <!-- Grid column -->

    </div>
    <!-- Grid row-->
<!-- Copyright -->
    <div class="text-center py-3">2021
        <a> SICO <br>(desenvolvido por João Correia)</a>
    </div>
<!-- Copyright -->
  </div>
</div>

        </footer>
<!-- Footer -->
</div>

<?php
    if(isset($_REQUEST['msg']))
    {
        if($_REQUEST['msg']=='s')
        {?>
            <script>  alert("Alteração efetuada com sucesso!"); window.location.href = "Account.php"; </script>
        <?php
        }
        if($_REQUEST['msg']=='bd')
        {?>
            <script> alert("Erro de ligação à base de dados."); </script>
        <?php
        }
        if($_REQUEST['msg']=='erromail')
        {?>
            <script> alert("O endereço de email introduzido não corresponde ao atual."); window.location.href = "Account.php"; </script>
        <?php
        }
        if($_REQUEST['msg']=='erropass')
        {?>
            <script> alert("A password introduzida não corresponde à atual."); window.location.href = "Account.php";</script>
        <?php
        }
        if($_REQUEST['msg']=='errodel')
        {?>
            <script> alert("A password introduzida está incorreta."); window.location.href = "Account.php";</script>
        <?php
        }
        if($_REQUEST['msg']=='deleted')
        {?>
            <script> alert("Conta apagada com sucesso!"); 
            <?php  session_start();
                unset($_SESSION['email']);
                unset($_SESSION['id']);
                session_destroy();
            ?>
            window.location.href = "index.html";</script>
        <?php
        }
    }
?>   
</body>


