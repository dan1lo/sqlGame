<?php
  include "ConectorBanco.php";
class FabricaConexoes{

    private $bd;
    private $conn;
    public function __construct(){
        $this->bd = new ConectorBanco();
    }
//  Create a new connection to the MySQL database using PDO
    public function criarConexao() {
        try {
            $this->conn = new PDO($this->bd->getServer(),$this->bd->getUser(), $this->bd->getPass());
            return $this->conn;
        // Check connection
        }catch (PDOException $e) {
        return "Erro: Conexão com banco de dados não foi realizada com sucesso. Erro gerado " 
        . $e->getMessage();
        }

    }

}
?>