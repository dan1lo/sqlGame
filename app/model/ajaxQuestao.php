<?php 

include "QuestoesDAO.php";


$questoes = new QuestoesDAO();



//$nivel = $_POST['nivel'];
$nivel = 1;

$dados = $questoes->selecionarNivel(1);
// - - - - - - - - - - - - - - 

$array = array();
foreach ($dados as $row) {
    array_push($array, array (
        'nivel'=> $row['nivel'],
        'pergunta' => $row['pergunta'],
        'resposta' => $row['resposta'],
        'errada' => $row['errada']
    ));

}
header("content-type: application/json");
echo json_encode($array);

//foreach ($dados as $row) {
  //header("content-type: application/json");
    //echo json_encode($row['nivel']);
// Parte importante
//}

?>