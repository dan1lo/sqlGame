<?php
include "ConectorBanco.php";

$bd = new ConectorBanco();

//  Create a new connection to the MySQL database using PDO
$conn = new mysqli($bd->getServer(), $bd->getUser(), $bd->getPass());
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>