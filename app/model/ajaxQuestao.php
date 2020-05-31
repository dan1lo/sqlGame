<?php 

include "QuestoesDAO.php";


$questoes = new QuestoesDAO();



//$nivel = $_POST['nivel'];
$nivel = 1;

$dados = $questoes->selecionarNivel(1);
// - - - - - - - - - - - - - - 

// Parte importante
header("content-type: application/json");
echo json_encode($dados);

?>