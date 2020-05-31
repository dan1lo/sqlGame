<?php

include "Questoes.php";
include "FabricaConexoes.php";

class QuestoesDAO{

    private $conexao;
    private $questao;
    private $sql;
    public function __construct(){
        $this->conexao = new FabricaConexoes();
        //$this->questao = new Questoes();
        $this->sql = $this->conexao->criarConexao();
        
    
    }

    public function selecionarNivel($nivel){
        
        $linha = $this->sql->query('SELECT nivel FROM questoes;', PDO::FETCH_ASSOC);
        //$stmt->bindValue(':nivel',"nivel" );
        //$stmt->bindValue(':senha', $senha);
       // $run = $stmt->execute();
       // $linha = $this->sql->fetch(PDO::FETCH_ASSOC);
        
        return $linha;
    }




}

?>