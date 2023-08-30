<?php
    $database = "localhost/3070:C:\Bancos\NUTRI\Nutriagro\BANCO.FDB";
    $username = "SYSDBA";
    $password = "masterkey";
    $dbname = "BANCO.FDB";

    $conn = new mysqli($database, $username, $password, $dbname);

    if ($conn -> connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }
?>