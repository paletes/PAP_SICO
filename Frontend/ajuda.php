<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="assets/imgs/SICO-separador.ico" type="image/ico">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome/css/all.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet">
    <title>Ajuda - SICO</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>

<?php 
		if ($_POST) 
		{
			//Carrega as classes do PHPMailer
			include("./phpmailer/class.phpmailer.php"); 
			include("./phpmailer/class.smtp.php"); 
			
			//envia o e-mail para o visitante do site
			$mailDestino = $_POST['txtemail']; 
			$nome = "$_POST[txtnome] $_POST[txtapelido]";	
            $assunto = "Contacto - $_POST[txtassunto]";
			$mensagem = "Olá $_POST[txtnome] $_POST[txtapelido],<br/>
                        Obrigado pelo seu contacto, iremos analisar a sua mensagem com a maior brevidade posssível.<br/><br/><br/>
                        **Esta mensagem foi enviada automaticamente pelo que lhe peço que não responda diretamente a este e-mail.**<br/><br/>
                        Atentamente,<br/>
                        SICO";
			include("./SendEmail.php");
			
			//envia o e-mail para o administrador do site
			$mailDestino = 'apoiotecnicosico@gmail.com';
			$nome = 'SICO';	
			$assunto = "Pedido de contacto - $_POST[txtassunto]";
			$mensagem = "Foi rececionada uma mensagem do formulário de contacto presente no Website: <br/>
						<strong>Nome:</strong> $_POST[txtnome] $_POST[txtapelido]<br/>
						<strong>E-mail:</strong> $_POST[txtemail]<br/>
                        <strong>Assunto:</strong> $_POST[txtassunto]<br/>
						<strong>Mensagem:</strong> $_POST[txtmensagem]";
			include("./SendEmail.php");
        }
?>   
			
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
    </div>


    <div class="font">
        <div class="container-fluid no-gutters">
            <div class="banner-head">
                <div class="banner-image">
                    <img src="assets/imgs/banners/help-header 1.png">
                </div>

                <h1><i class="fas fa-info-circle"></i> Suporte</h1>
                <p class="lead">Preencha o formulário com os seus dados e a sua dúvida para o poder ajudar!</p>
            </div>
        </div>

        <br><br>

        <div class="col-md-12 no-gutters">
            <div class="a">
                <p>Os campos marcados com (*) são de preenchimento obrigatório!</p>
            </div>
            <div class="m-auto">
                <div class="help">
                    <!--<img src="assets/imgs/fundo_ajuda1.jpg" width="100%" />-->
                    <!-- <div class="agrv">-->
                    <div class="container">
                        <!--<h1>Precisa de Ajuda? <i class="fas fa-info-circle"></i></h1>
                            <br>-->
                        <form class="col-md-8 offset-2" method="POST" name="formContato">
                            <div class="row">
                                <div class="col"> <br>
                                <!--<label for="exampleFormControlTextarea1">Nome:</label>-->
                                    <input type="text" class="form-control" placeholder="Nome *" name="txtnome" required>
                                </div>
                                <div class="col"> <br>
                                <!--<label for="exampleFormControlTextarea1">Sobrenome:</label>-->
                                    <input type="text" class="form-control" placeholder="Apelido *" name="txtapelido" required>
                                </div>
                            </div>
                            <p></p>
                            <div class="form-group">
                                <!-- <label for="exampleFormControlTextarea1">E-mail:</label>-->
                                <input type="email" class="form-control" placeholder="Email *" name="txtemail" required>
                            </div>
                        
                            <p></p>
                            <div class="form-group">
                                <!--<label for="exampleFormControlTextarea1">Assunto:</label>-->
                                <textarea class="form-control" rows="1" placeholder="Assunto *" name="txtassunto" required></textarea>
                            </div>
                            <div class="form-group">
                                <!--<label for="exampleFormControlTextarea1">Mensagem:</label>-->
                                <textarea class="form-control" rows="6" placeholder="Mensagem *" name="txtmensagem" required></textarea>
                            </div>
                        
                            <button type="submit" class="btn btn-dark" >Enviar</button> 
                        </form>
<br>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
        <br>
        <!--<div class="footerh">
            <p> Antes de enviar este formulário convidamo-lo a visitar primeiramente o nosso fórum! Lá poderá encontrar respostas ás suas perguntas!</p>
        </div>-->
        <!-- scripts -->
        <script src="assets/js/jquery-3.1.4.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/main.js"></script>


        <?php
        if(isset($_REQUEST['msg']))
        {
            if($_REQUEST['msg']=='s')
            {?>
                <script>  alert("A sua mensagem foi enviada com sucesso para o SICO!"); window.location.href = "index.html";</script>
            <?php
            }
            if($_REQUEST['msg']=='n')
            {?>
                <script>  alert("Ocorreu um erro ao enviar a sua mensagem para o SICO. Por favor, tente novamente mais tarde!"); window.location.href = "ajuda.php";</script>
            <?php
            }
        }
        ?>

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

</footer>
<!-- Footer -->

<a href="#" id="toTopBtn" class="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out" data-abc="true"></a>
    <script src="assets/js/jquery-3.1.4.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>

</html>