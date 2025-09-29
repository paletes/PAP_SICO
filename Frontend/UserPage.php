<?php
require ('valida_login.php');
?>


<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="assets/imgs/SICO-separador.ico" type="image/ico">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome/css/all.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Página do Utilizador - SICO</title>
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
        <!-- end menu -->


        <div class="col-md-12">
            <div class="container">

                <div class="row justify-content-center align-items-center">
                    <div class="card" style="width: 15rem; margin-top: 3rem;">
                        <img src="assets/imgs/Dots.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Todas as Faturas</h5><br>
                                <a href="listagem.php" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"> <i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>
                

                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/users.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Despesas Gerais Familiares</h5>
                                <a href="listagem.php?cat=1" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>


                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/heart.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Saúde</h5><br>
                                <a href="listagem.php?cat=2" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                     </div>
                 </div>



                <div class="row justify-content-center align-items-center">
                    <div class="card" style="width: 15rem; margin-top: 3rem;">
                        <img src="assets/imgs/graduate.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Educação</h5>
                                <a href="listagem.php?cat=3" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>
                

                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/house.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Habitação</h5>
                                <a href="listagem.php?cat=4" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                     </div>


                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/human-cane.png" class="card-img-top" >
                            <div class="card-body text-center">
                                 <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Lares</h5>
                                <a href="listagem.php?cat=5" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>
                </div>


                <div class="row justify-content-center align-items-center">
                     <div class="card" style="width: 15rem; margin-top: 3rem;">
                        <img src="assets/imgs/car.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Reparação de Automóveis</h5>
                                <a href="listagem.php?cat=6" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>
                

                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/moto.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Reparação de Motociclos</h5>
                                <a href="listagem.php?cat=7" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>


                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/utensils.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Restauração e Alojamento</h5>
                                <a href="listagem.php?cat=8" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div></div>


                    <div class="row justify-content-center align-items-center">
                    <div class="card" style="width: 15rem; margin-top: 3rem;">
                        <img src="assets/imgs/hair.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Cabeleireiros</h5><br>
                                <a href="listagem.php?cat=9" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>
                

                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/pet.png" class="card-img-top" >
                            <div class="card-body text-center">
                                 <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Atividades Veterinárias</h5>
                                <a href="listagem.php?cat=10" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>


                    <div class="card" style="width: 15rem; margin-left: 5rem; margin-top: 3rem;">
                        <img src="assets/imgs/bus.png" class="card-img-top" >
                            <div class="card-body text-center">
                                <h5 class="card-title" style="text-align: center; font-family: 'Quicksand', sans-serif;">Passes Mensais</h5><br>
                                <a href="listagem.php?cat=11" class="btn btn-danger" style="align-items: center; font-family: 'Quicksand', sans-serif;"><i class="far fa-eye"></i>Ver faturas</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

        <br><br><br>
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
<a href="#" id="toTopBtn" class="cd-top text-replace js-cd-top cd-top--is-visible cd-top--fade-out" data-abc="true"></a>

<!-- scripts -->
<script src="assets/js/jquery-3.1.4.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/main.js"></script>
        </html>