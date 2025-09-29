<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="assets/imgs/SICO-separador.ico" type="image/ico">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome/css/all.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Entrar no SICO</title>
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
                <a href="https://sico.joaocorreia.dev">
                    <img src="assets/imgs/sico-logo.png" title="SICO" alt="SICO" width="150" />
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
                                <li class="nav-item">
                                    <a class="p-3 changecolor" href="faq.html"><b>F A Q</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="p-3 changecolor" href="downloads.html"><b>Downloads</b></a>
                                </li>
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="sobre.html"><b>Sobre</b></a>
                                </li>-->
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="manual.html"><b>Manual Online</b></a>
                                </li>-->
                                <li class="nav-item">
                                    <a class="p-3 changecolor" href="ajuda.php"><b>Ajuda</b></a>
                                </li>
                                <!--<li class="nav-item">
                                    <a class="p-3 changecolor" href="Loja.html"><b>Loja</b></a>
                                </li>-->
                                <li class="nav-item">
                                    <div class="btnentrar">
                                        <a class="far fa-user-circle fa-2x" href="login.php"></a>
                                        <!--colocar a foto do utilizador-->
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </nav>
            </div>
        </div>
        <!-- end menu -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="m-auto">
                        <div class="login">

                            <div class="entrar">
                                <div class="col-md-6" style="border-right: 1px solid #ababab">
                                    <br>
                                    <div class="col-md-11">
                                    <form class="form-signin" action="autentica.php" method="post">
                                        <h1 class="h3 mb-3 font-weight-normal">Entrar</h1> <br>
                                        <label for="email" class="sr-only">Email</label>
                                        <input type="email" autocomplete="yes" id="email" class="form-control form-control-user" placeholder="Email" name="email" required >
                                         
                                        <p></p>
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" id="password" name="password" class="form-control form-control-user" placeholder="Palavra-passe" required>
                                        <p></p><!--
                                        <div class="checkbox mb-3">
                                            <label>
                                        <input type="checkbox" value="remember-me"> Lembrar-se de mim
                                        </label>
                                        </div>-->
                                        
                                        <div class="row d-flex justify-content-center">
                                            <!--Class para centralizar um botão bootstrap-->
                                            <div class="col-md-5">
                                                <br>
                                                <button class="btn btn-lg btn-dark btn-block" type="submit">Iniciar Sessão</button>
                                            </div>
                                        </div>
                                    </form>
                                    <br>
                                </div>
                            </div>
                             
                                <div class="col-md-6">
                                    <div class="col-md-11">
        
                                    <form class="user" action="regista.php" method="post">
                                        <h1 class="h3 mb-3 font-weight-normal">Criar Conta</h1> <br>
                                        <div class="row">
                                          <div class="col" >
                                            <input type="text" class="form-control form-control-user" placeholder="Nome" name="nome" id="nome" required>
                                          </div>
                                          <div class="col">
                                            <input type="text" class="form-control form-control-user" placeholder="Apelido" name="apelido" id="apelido" required>
                                          </div>
                                        </div>
                                      
                                      <p></p>
                                        <!--<div class="input-group">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                          </div>
                                          <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
                                        </div>-->
                                      <p></p>
                                      <label for="email" class="sr-only">Email</label>
                                        <input type="email" name="email" id="email" class="form-control form-control-user" placeholder="Email" required >
                                       <p></p>
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" name="password" id="password" class="form-control form-control-user" placeholder="Palavra-passe" required >
                                        <p></p>
                                        <div class="row d-flex justify-content-center">
                                            <!--Class para centralizar um botão bootstrap-->
                                            <div class="col-md-4">
                                                <br>
                                                <input type="submit" name="submit" class="btn btn-lg btn-dark btn-block" value="Registar">
                                                <!--btn-block-->
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                </div>
                            </div>
                                
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
           <!-- Script para mensagens de alerta -->
    <?php
    if(isset($_REQUEST['msg']))
    {
        if($_REQUEST['msg']=='dados')
        {?>
            <script>  alert("Preencha todos os dados.");  </script>
        <?php
        }
        if($_REQUEST['msg']=='r')
        {?>
            <script>  alert("Este endereço de email já se encontra registado!");  </script>
        <?php
        }
        if($_REQUEST['msg']=='s')
        {?>
            <script>  alert("Registo efetuado com sucesso! Faça login.");  </script>
        <?php
        }
        if($_REQUEST['msg']=='n')
        {?>
            <script>  alert("Não foi possível registar.");  </script>
        <?php
        }
        if($_REQUEST['msg']=='bd')
        {?>
            <script> alert("Erro de ligação à base de dados."); </script>
        <?php
        }
        if($_REQUEST['msg']=='erro')
        {?>
            <script> alert("Endereço de email ou password incorretos."); </script>
        <?php
        }
    }
?>   

</body>

</html>