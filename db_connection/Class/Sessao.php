<?php

class Sessao
{
    private $id;
    private $funcionario;
    private $inicio;
    private $ultimaRequisicao;
    private $termino;
    
    public function __construct() {
        
    }
    
    public function getId() {
        return $this->id;
    }

    public function getFuncionario() {
        return $this->funcionario;
    }

    public function getInicio() {
        return $this->inicio;
    }

    public function getUltimaRequisicao() {
        return $this->ultimaRequisicao;
    }

    public function getTermino() {
        return $this->termino;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setFuncionario($funcionario) {
        $this->funcionario = $funcionario;
    }

    public function setInicio($inicio) {
        $this->inicio = $inicio;
    }

    public function setUltimaRequisicao($ultimaRequisicao) {
        $this->ultimaRequisicao = $ultimaRequisicao;
    }

    public function setTermino($termino) {
        $this->termino = $termino;
    }
}
