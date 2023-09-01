<?php
    $teste = "teste";

    $dados = [
        'teste' => $teste
    ];

    header('Content-Type: application/json');

    echo json_encode($dados);
?>