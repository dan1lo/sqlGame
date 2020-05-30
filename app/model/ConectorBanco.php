<?php
    class ConectorBanco{
        private $servername = "localhost";
        private $username = "localhost";
        private $database = "sqlGame";
        private $password = "";

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