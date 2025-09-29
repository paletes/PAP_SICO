<?php
session_start();
require ('valida_login.php');
$idutilizador = $_SESSION['id'];
require ('ligabd.php');
$idfaturas = $_REQUEST['fat'];
$comando = "SELECT * from Faturas where idfaturas = '$idfaturas'";
$faturasresult = mysqli_query($ligaBD, $comando);
if(isset($_POST['delete'])) {
  $delete = "DELETE FROM Faturas WHERE idfaturas= $idfaturas ";
  mysqli_query($ligaBD, $delete);
?>
<script>  alert("Fatura apagada.");  window.location.href = "UserPage.php";</script>
<?php
}
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

         
        <div class="col-md-12 ">
        <h3 style="text-align: center; margin-top: 20px; position: relative; font-family: 'Quicksand', sans-serif; margin-bottom: 25px; color: #8b0000;">Detalhe da Fatura</h3>    

        <div class="container">
                <?php
                    if(mysqli_num_rows($faturasresult)>0){           
                    foreach($faturasresult as $val){               
                ?>
       

       <?php
         if($val['idcategoria']=='1')
         {
             $catnome = "Despesas Gerais Familiares";
         }
         elseif($val['idcategoria']=='2')
         {
             $catnome = "Saúde";
         }
         elseif($val['idcategoria']=='3')
         {
             $catnome = "Educação";
         }
         elseif($val['idcategoria']=='4')
         {
             $catnome = "Habitação";
         }
         elseif($val['idcategoria']=='5')
         {
             $catnome = "Lares";
         }
         elseif($val['idcategoria']=='6')
         {
             $catnome = "Reparação de Automóveis";
         }
         elseif($val['idcategoria']=='7')
         {
             $catnome = "Reparação de Motociclos";
         }
         elseif($val['idcategoria']=='8')
         {
             $catnome = "Restauração e Alojamento";
         }
         elseif($val['idcategoria']=='9')
         {
             $catnome = "Cabeleireiros";
         }
         elseif($val['idcategoria']=='10')
         {
             $catnome = "Atividades Veterinárias";
         }
         elseif($val['idcategoria']=='11')
         {
             $catnome = "Passes Mensais";
         }
         ?>
       <div class="row">
           
                <div class="col-md-12">
                    
                        <div class="login">

                            <div style="position:absolute; text-align: center; font-family: 'Quicksand', sans-serif; z-index: 1; width: 100%;  padding: 0; display: flex; align-items: center; justify-content: center; margin-top: 3rem;">
                                
                                <div class="col-md-4" >
                                    
                                    <div class="col-md-12">
                                    <img src="<?php echo $val['imagem'];?>" alt="Imagem da fatura" width="350" height="450"> 
                                        <br>
                                        
                                    
                                
                                </div>
                            </div>
                             
                                <div class="col-md-8">
                                    <div class="col-md-11">
                                    <fieldset disabled>
                                        <div class="row">
                                          <div class="col-md-4" >
                                            <p style="text-align: right;">Nome da fatura:</p>
                                          </div>
                                          <div class="col-md-8">
                                            <input class="form-control" name="nome" placeholder="<?php echo $val['nome'];?>"></input>
                                          </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                          <div class="col-md-4" >
                                            <p style="text-align: right;">Categoria:</p>
                                          </div>
                                          <div class="col-md-8">
                                            <input type="text" class="form-control " placeholder="<?php echo $catnome;?>" name="apelido" id="apelido" required>
                                          </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                          <div class="col-md-4" >
                                            <p style="text-align: right;">Data:</p>
                                          </div>
                                          <div class="col-md-8">
                                            <input type="text" class="form-control " placeholder="<?php echo $val['data'];?>" name="apelido" id="apelido" required>
                                          </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                          <div class="col-md-4" >
                                            <p style="text-align: right;">Valor:</p>
                                          </div>
                                          <div class="col-md-8">
                                            <input type="text" class="form-control " placeholder="<?php echo $val['valor'];?> €" name="apelido" id="apelido" required>
                                          </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                          <div class="col-md-4" >
                                            <p style="text-align: right;">NIF do comerciante:</p>
                                          </div>
                                          <div class="col-md-8">
                                            <input type="text" class="form-control " placeholder="<?php echo $val['nifcomerciante'];?>" name="apelido" id="apelido" required>
                                          </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                          <div class="col-md-4" >
                                            <p style="text-align: right;">Submetido:</p>
                                          </div>
                                          <?php
                                            if ($val['regularizado'] == 1){
                                              $submetido = "Sim";
                                            }elseif ($val['regularizado'] == 0){
                                              $submetido = "Não";
                                            }
                                          ?>
                                          <div class="col-md-8">
                                            <input type="text" class="form-control " placeholder="<?php echo $submetido;?>" name="apelido" id="apelido" required>
                                          </div>
                                         
                                        </div>                                         
                                          </form>
                                        </div> 
                                        
                                        <br>

        <?php
            }
        }else{
        ?>
        <h5 style="text-align: center; margin-top: 10rem; position: relative; font-family: 'Quicksand', sans-serif;">De momento, não é possível mostrar a fatura!</h5>
        <?php } ?>
        <div class="col-md-12">
                                        <div class="row" style="text-align: center; align-items: center; justify-content: center;">
                                        <div class="col-md-4" >
                                                <br>
                                                <form method="post">
                                                  <button style="text-align: center;" type="submit" name="delete" class="btn btn-lg btn-danger btn-block" > <i class="far fa-trash-alt"></i> Apagar fatura</button>
                                                <br>
                                                </form>
                                                <!--btn-block-->
                                                
                                            </div>
                                          </div>
                                          </div>   
                                            </div></div>        

        </div>

        </body>
        </html>



       