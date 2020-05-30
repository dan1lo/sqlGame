<?php
include "QuestoesDAO.php";

$teste = new QuestoesDAO();

$testado = $teste->selecionarNivel();
foreach ($testado as $row) {
    echo $row['nivel'] . "\t";
}


?>