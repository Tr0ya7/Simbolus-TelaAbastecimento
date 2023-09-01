<?php

class Conexao {


    private $database = "localhost/3070:C:\BANCOS\Nutri\Marmontel2.fdb";
    private $conexao = null;

    public function __construct() {
        if ($this->conexao == null)
        {
   		$this->conexao = ibase_connect($this->database, 'SYSDBA', 'masterkey','WIN1252', null, 1);
        }
    }

    public function getConexao() {
        return $this->conexao;
    }

    public function GetQuery($sql, $transaction = null) 
    {
        if ($transaction == null)
        {
            return ibase_query($this->conexao, $sql);
        }
        else
        {
            return ibase_query($transaction, $sql);
        }
    }

    public function GetQueryResult($query) {
        return ibase_fetch_object($query);
    }

    public function FreeQuery($query) {
        ibase_free_result($query);
    }

    public function CloseConnection() {
        ibase_close($this->conexao);
    }

    public function StartTransaction()
    {
        return ibase_trans();
    }
    
    public function Commit($transaction)
    {
        ibase_commit($transaction);
    }
    
    public function CommitrRetaining($transaction)
    {
        ibase_commit_ret($transaction);
    }
    
    public function Rollback($transaction)
    {
        ibase_rollback($transaction);        
    }
    
    public function RollbackRetaining($transaction)
    {
        ibase_rollback_ret($transaction);        
    }
}

?>