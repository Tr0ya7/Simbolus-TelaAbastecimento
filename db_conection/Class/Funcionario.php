<?php
	Class Funcionario
	{
		private $fun_codigo;
		private $fun_nome;
		private $fun_email;
		private $fun_cnpj;
		private $fun_senha;
		private $fun_primeiro_nome;

		public function __construct()
		{
			$this->fun_codigo = 0;
			$this->fun_nome = "";
			$this->fun_email = "";
			$this->fun_cnpj = "";
			$this->fun_senha = "";
			$this->fun_primeiro_nome = 0;
		}
		//metodo Gets
		public function getFunCodigo()
		{
			return $this->fun_codigo;
		}
		public function getFunNome()
		{
			return $this->fun_nome;
		}
		public function getFunEmail()
		{
			return $this->fun_email;
		}
		public function getFunCnpj()
		{
			return $this->fun_cnpj;
		}
		public function getFunSenha()
		{
			return $this->fun_senha;
		}
		public function getFunPrimeiroNome()
		{
			return $this->fun_primeiro_nome;
		}
		//metodos Sets
		public function setFunCnpj($fun_cnpj)
		{
			$this->fun_cnpj = $fun_cnpj;
		}
		public function setFunSenha($fun_senha)
		{
			$this->fun_senha = $fun_senha;
		}
		public function setFunCodigo($fun_codigo)
		{
			$this->fun_codigo = $fun_codigo;
		}
		public function setFunNome($fun_nome)
		{
			$this->fun_nome = $fun_nome;
		}
		public function setFunEmail($fun_email)
		{
			$this->fun_email = $fun_email;
		}
		public function setFunPrimeiroNome($fun_primeiro_nome)
		{
			$this->fun_primeiro_nome = $fun_primeiro_nome;
		}
		
	}
?>