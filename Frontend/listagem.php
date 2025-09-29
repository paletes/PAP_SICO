<?php
session_start();
require ('valida_login.php');
$idutilizador = $_SESSION['id'];
require ('ligabd.php');
if(isset($_REQUEST['cat']) && ($_REQUEST['cat'] != '')){
    $idcategoria= $_REQUEST['cat'];
    $sql="select * from Faturas inner join Categoria on Faturas.idcategoria = Categoria.idcategoria where Categoria.idcategoria = $idcategoria AND idutilizador = $idutilizador";
}else{
    $sql="select * from Faturas where idutilizador = $idutilizador";

}
$resultado = mysqli_query($ligaBD, $sql);

?>



<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" href="assets/imgs/SICO-separador.ico" type="image/ico">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome/css/all.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Consulta por Categoria - SICO</title>
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




        <?php
        if($idcategoria=='1')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Despesas Gerais Familiares</h3>
        
        <?php
        }

        else if($idcategoria=='2')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Saúde</h3>
        <?php
        }

        else if($idcategoria=='3')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Educação</h3>
        <?php
        }

        else if($idcategoria=='4')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Habitação</h3>
        <?php
        }

        else if($idcategoria=='5')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Lares</h3>
        <?php
        }

        else if($idcategoria=='6')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Reparação de Automóveis</h3>
        <?php
        }

        else if($idcategoria=='7')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Reparação de Motociclos</h3>
        <?php
        }

        else if($idcategoria=='8')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Restauração e Alojamento</h3>
        <?php
        }

        else if($idcategoria=='9')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Cabeleireiros</h3>
        <?php
        }

        else if($idcategoria=='10')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Atividades Veterinárias</h3>
        <?php
        }

        else if($idcategoria=='11')
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Passes Mensais</h3>
        <?php
        }

        else 
        {?>
            <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Todas as Faturas</h3>
            
        <?php
        }
        ?>            
        <div class="col-md-12 ">

        <div class="container">
        <?php
                    if(mysqli_num_rows($resultado)>0){           
                               
                ?>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col" style="text-align: center;">Nome</th>
                    <th scope="col" style="text-align: center;">Data</th>
                    <th scope="col" style="text-align: center;">Valor</th>
                    <th scope="col" style="text-align: center;"></th>
                    <!--<th scope="col" style="text-align: center;"></th>-->
                </tr>
            </thead>
            <?php
                    }           
                               
                ?>
            <?php
                    if(mysqli_num_rows($resultado)>0){           
                    foreach($resultado as $val){               
                ?>
       
            
            <tbody>
                <tr>
                    <td style="text-align: center;"> <?php echo $val['nome'];?> </td>
                    <td style="text-align: center;"> <?php echo $val['data'];?> </td>
                    <td style="text-align: center;"> <?php echo $val['valor'];?> <a>€</a></td>
                    <td style="text-align: center;"> <a href="<?php echo 'DetalheFatura.php?fat='.$val['idfaturas'];?>">Consultar</a></td>
                    <!--<td style="text-align: center;"> <a href="listagem.php?cat=5" class="btn btn-danger" >Consultar</a></td> -->
                </tr>
            </tbody>
        <?php
            }
        }else{
        ?>
        <h5 style="text-align: center; margin-top: 10rem; position: relative; font-family: 'Quicksand', sans-serif;">Não tem faturas registadas nesta categoria!</h5>
        <?php } ?>
        </div>
        </div>
        
        </body>
        </html>



       