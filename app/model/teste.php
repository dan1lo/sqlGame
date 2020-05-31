<?php
include "QuestoesDAO.php";

$teste = new QuestoesDAO();

$testado = $teste->selecionarNivel(1);
foreach ($testado as $row) {
    echo $row['nivel'] . "\t";
    echo $row['pergunta'] . "\t";
}


?>