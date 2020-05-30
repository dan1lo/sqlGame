<?php
    class ConectorBanco{
        private $servername ;
        private $username;
        private $database;
        private $password;

        public function __construct(){
            $this->servername = "mysql:host=localhost;dbname=sqlGame";
            $this->username = "root";
            $this->database = "sqlGame";
            $this->password = "";
    

        }

        public function getServer(){
            return $this->servername;
        }
        public function getUser(){
            return $this->username;
    
        }
        public function getDatabase(){
            return $this->database;
        }
        public function getPass(){
            return $this->password;
        }

    }



?>