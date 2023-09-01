<?php

require_once("Conexao.php");
require_once("../Class/Sessao.php");

class SessaoDAO 
{
    private $conn = null;

    public function __construct($Conexao = null)
    {
        if ($Conexao == null)
        {
            $this->conn = new Conexao();
        }
        else
        {
            $this->conn = $conexao;
        }
    }

    public function GravarSessao($funcodigo, $dataInicio, $dataUltimaRequisicao)
    {

            try
            {
                $tr = $this->conn->StartTransaction();
                $generator = $this->conn->GetQueryResult($this->conn->GetQuery('SELECT GEN_ID(GERA_ID_SESSAO_PHP2,1) AS CODIGO FROM RDB$DATABASE'))->CODIGO;
                $generator = $generator -1;

                $sql = "INSERT INTO SESSAO_PHP2(SES_ID, FUN_CODIGO, SES_INICIO, SES_ULTIMAREQUISICAO, SES_TERMINO) VALUES({$generator}, {$funcodigo}, '{$dataInicio}', '{$dataUltimaRequisicao}', null)";

                    $this->conn->GetQuery($sql, $tr); 

                    //Se der tudo certo comita...
                    $this->conn->Commit($tr);
            }
            catch (Exception $e)
            {
                //Caso dê algum erro reverte tudo
                $this->conn->Rollback();
                return false;
                ?><script>
                    alert($e->getMessage());
                    location="login.php";
                </script> <?php            
            }              
    }
       

    
    public function GetSessaoAberta($funcionario)
    {
        $sql = "SELECT FIRST 1 * FROM SESSAO_PHP2 WHERE FOR_CODIGO = {$funcionario} AND SES_TERMINO IS NULL ORDER BY SES_ID DESC";
            $query = $this->conn->GetQuery($sql);
        
            $sessao = array();

            $query = $this->conn->GetQuery($sql);
            while ($row = $this->conn->GetQueryResult($query))
            {

                $sessoes = new Sessao();
                $sessoes->setId($row->SES_ID);
                $sessoes->setFuncionario($funcionario);
                $sessoes->setInicio($row->SES_INICIO);
                $sessoes->setUltimaRequisicao($row->SES_ULTIMAREQUISICAO); 
                $sessoes->setTermino($row->SES_TERMINO);

                $sessao[] = $sessoes;

            }
            return $sessao;    
    }
       
    public function GetById($id)
    {
        $sql = "SELECT * FROM SESSAO_PHP2 WHERE SES_ID = {$id}";
        $query = $this->conn->GetQuery($sql);
        
        if ($row = $this->conn->GetQueryResult($query))
        {
            $sessao = new Sessao();
            $sessao->setId($id);
            $sessao->setFuncionario($row->FUN_CODIGO);
            $sessao->setInicio($row->SES_INICIO);
            $sessao->setUltimaRequisicao($row->SES_ULTIMAREQUISICAO);
            $sessao->setTermino($row->SES_TERMINO);
            
            return $sessao;
        }
        else
            return null;
    }
        
    public function  Atualiza($id)
    {
        $sql = "UPDATE SESSAO_PHP2 SET SES_ULTIMAREQUISICAO = '" . date("m/d/Y H:i:s") . "'  WHERE SES_ID = {$id}";
        $this->conn->GetQuery($sql);
    }

    public function Logout($id)
    {
        $sql = "UPDATE SESSAO_PHP2 SET SES_TERMINO = '" . date("m/d/Y H:i:s") . "'  WHERE SES_ID = {$id}";
        $this->conn->GetQuery($sql);
    }
}