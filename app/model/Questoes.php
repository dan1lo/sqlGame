<?php

class Questões{
    private $nivel;
    private $resposta;
    private $errada;
    private $pergunta;

    public function setNivel($nivel){
        $this->nivel = $nivel;
    }
    public function getNivel(){

        return $this->nivel;
    }
    public function setResposta($resposta){
        $this->resposta = $resposta;
    }
    public function getResposta(){
        return $this->resposta;
    }
    public function setErrada($errada){
        $this->errada = $errada;
    }
    public function getErrada(){
        return $this->errada;
    }
    public function setPergunta($pergunta){
        $this->pergunta = $pergunta;
    }
    public function getPergunta(){
        return $this->pergunta;
    }


}

?>