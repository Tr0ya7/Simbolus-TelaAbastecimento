<?php

	require_once "Conexao.php";
	require_once "../Class/Funcionario.php";
	//require_once "../Tools/funcoes.php";

	class FuncionarioDAO
	{
		private $conn = null;
		public function __construct($Conexao = null)
		{
			if($Conexao == null)
			{
				$this->conn = new Conexao();
			}
			else
			{
				$this->conn = $Conexao;
			}
		}

		// pegar um unico funcionario
		public function GetByName($txtUsuario)
		{
			
			$sql = "SELECT FUN_CODIGO, FUN_NOME, FUN_PRIMEIRO_NOME, FUN_CNPJ, FUN_SENHA FROM FUNCIONARIOS WHERE FUN_SAIDA IS NULL and FUN_CNPJ = '{$txtUsuario}'";

			$funcionarios = array();
			
	        $query = $this->conn->GetQuery($sql);
	        while ($row = $this->conn->GetQueryResult($query))
	        {
	            $funcionario = new funcionario();
	            $funcionario->setFunCodigo($row->FUN_CODIGO);
				$funcionario->setFunNome(strEcd($row->FUN_NOME));
				$funcionario->setFunCnpj($row->FUN_CNPJ);
				$funcionario->setFunSenha($row->FUN_SENHA);
				$funcionario->setFunPrimeiroNome($row->FUN_PRIMEIRO_NOME);
	            $funcionarios[] = $funcionario;
	        }        
	        return $funcionarios;
		}

		//Primeiro Acesso
		public function GetByNameNova($txtUsuario)
		{
			
			$sql = "SELECT FUN_CODIGO, FUN_NOME, FUN_CNPJ, FUN_SENHA, FUN_PRIMEIRO_NOME FROM FUNCIONARIOS WHERE FUN_SAIDA IS NULL and FUN_CNPJ = '{$txtUsuario}'";

			$funcionarioprimeira = array();
			
	        $query = $this->conn->GetQuery($sql);
	        while ($row = $this->conn->GetQueryResult($query))
	        {
	            $funcionario = new funcionario();
	            $funcionario->setFunCodigo($row->FUN_CODIGO);
				$funcionario->setFunNome($row->FUN_NOME);
				$funcionario->setFunCnpj($row->FUN_CNPJ);
				$funcionario->setFunSenha($row->FUN_SENHA);
				$funcionario->setFunPrimeiroNome($row->FUN_PRIMEIRO_NOME);
				$funcionarioprimeira[] = $funcionario;
	        }        
	        return $funcionarioprimeira;
		}

		//Recuperar Senha
		public function GetByNameRecupera($txtUsuario)
		{
						
			$sql = "SELECT FUN_CODIGO, FUN_NOME, FUN_EMAIL, FUN_CNPJ, FUN_SENHA, FUN_PRIMEIRO_NOME FROM FUNCIONARIOS
			WHERE FUN_SAIDA IS NULL and FUN_CNPJ = '{$txtUsuario}'";

			$funcionarios = array();
			
	        $query = $this->conn->GetQuery($sql);
	        while ($row = $this->conn->GetQueryResult($query))
	        {
	            $funcionario = new funcionario();
	            $funcionario->setFunCodigo($row->FUN_CODIGO);
				$funcionario->setFunNome($row->FUN_NOME);
				$funcionario->setFunEmail($row->FUN_EMAIL);
				$funcionario->setFunCnpj($row->FUN_CNPJ);
				$funcionario->setFunSenha($row->FUN_SENHA);
				$funcionario->setFunPrimeiroNome($row->FUN_PRIMEIRO_NOME);
				$funcionarios[] = $funcionario;
	        }        
	        return $funcionarios;
		}
		// update senha gerada para recuperação
		public function SenhaGeradaRecuperacao($senharecuperacao, $txtUsuario)
	    {

	        $sql = "UPDATE FUNCIONARIOS SET FUN_SENHA = '{$senharecuperacao}' WHERE FUN_CNPJ = '{$txtUsuario}'";
	        $query = $this->conn->GetQuery($sql);
	        if (!$this->conn->GetQuery($sql, $trasanc))
	        {
	            $this->conn->Rollback($trasanc);
	            return false;
	        }
	        return true;
	    }

		//Esqueceu Acesso
		public function GetByNameTroca($txtUsuario)
		{
			
			$sql = "SELECT FUN_CODIGO, FUN_NOME, FUN_CNPJ, FUN_SENHA, FUN_PRIMEIRO_NOME FROM FUNCIONARIOS WHERE FUN_SAIDA IS NULL and FUN_CNPJ = '{$txtUsuario}' and FUN_SENHA <> ''";

			$funcionarios = array();

	        $query = $this->conn->GetQuery($sql);
	        while ($row = $this->conn->GetQueryResult($query))
	        {
	            $funcionario = new funcionario();
	            $funcionario->setFunCodigo($row->FUN_CODIGO);
				$funcionario->setFunNome($row->FUN_NOME);
				$funcionario->setFunCnpj($row->FUN_CNPJ);
				$funcionario->setFunSenha($row->FUN_SENHA);
				$funcionario->setFunPrimeiroNome($row->FUN_PRIMEIRO_NOME);
	            $funcionarios[] = $funcionario;
	        }        
	        return $funcionarios;
			
		}
		//listando os funcionarios mas só o que está na sessão
		public function Listar()
		{
			$sql = "SELECT fun_codigo, fun_nome, fun_cnpj, fun_senha FROM funcionarios ";
			$sql .="WHERE COALESCE(fun_senha, '') <> '' and fun_saida is null and fun_codigo = " . $_SESSION["funcionario_codigo"] . "";
			$query = $this->conn->GetQuery($sql);

			$funcionarios = array();
			while ($row = $this->conn->GetQueryResult($query))
			{
				$funcionario = new funcionario();
				$funcionario->setFunCodigo($row->fun_codigo);
				$funcionario->setFunNome($row->fun_nome);
				$funcionario->setFunCnpj($row->fun_cnpj);
				$funcionario->setFunSenha($row->fun_senha);
	            $funcionarios[] = $funcionario;
			}

			return $funcionarios;
		}

		//nova senha

		public function Inserir($novaS, $func)
    	{
	        $sql = "UPDATE FUNCIONARIOS SET FUN_SENHA = '{$novaS}'  WHERE FUN_CODIGO = '{$func}'";
	        $this->conn->GetQuery($sql);
	        
    	}


		public function ListarFuncionarios()
		{
			$sql = "SELECT fun_codigo, fun_nome, fun_cnpj, fun_senha, fun_email FROM funcionarios ";
			$sql .="WHERE COALESCE(fun_senha, '') <> '' and fun_saida is null ";
			$query = $this->conn->GetQuery($sql);

			$funcionarios = array();
			while ($row = $this->conn->GetQueryResult($query))
			{
				$funcionario = new funcionario();
				$funcionario->setFunCodigo($row->fun_codigo);
				$funcionario->setFunNome($row->fun_nome);
				$funcionario->setFunCnpj($row->fun_cnpj);
				$funcionario->setFunSenha($row->fun_senha);
				$funcionario->setFunEmail($row->fun_email);
				$funcionarios[] = $funcionario;
			}

			return $funcionarios;
		}
	}

	echo 'teste';
?>