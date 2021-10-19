<html><head>
      <title>Resultados da consulta</title>
   <style type = "text/css">
         body  { font-family: arial, sans-serif;
                 background-color: #F0E68C } 
         table { background-color: #ADD8E6 }
         td    { padding-top: 2px;
                 padding-bottom: 2px;
                 padding-left: 4px;
                 padding-right: 4px;
                 border-width: 1px;
                 border-style: inset }
      </style></head><body>
      <?php
         extract( $_POST );
         
		$servidor = "localhost";
		$usuario = "root";
		$senha = "1234";
		$bancodados = "biblioteca";
		$conexao = new mysqli($servidor, $usuario, $senha, $bancodados);
		if ($conexao->connect_error) {
			die("Conexão falhou: " . $conexao->connect_error);
} 
		
		//$consulta = "SELECT " . $categotia . " FROM livro";
		$consulta = "select titulo from livro where categoria= '$categoria'";
		$resultado = $conexao->query($consulta);
         
      ?><!-- fim do  PHP script -->
      <h3>Resultados da pesquisa</h3>
      <table>
         <?php
            print( "<tr>" );
			if ($resultado = $conexao -> query($consulta)) {
			
            print( "$categoria" );
			while ($acesso = $resultado -> fetch_row()) {
				printf ("<td> %s \n", $acesso[0]);
				print( "</tr>" );
				
			}
				$resultado -> free_result();
			}
		$conexao->close();
		?><!-- fim do PHP script -->
      </table>
      <br />Sua pesquisa para Livros
      </body></html>
