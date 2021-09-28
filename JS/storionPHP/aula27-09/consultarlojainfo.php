<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $bd = "lojainformatica";

        $conexao = new mysqli($servidor,$usuario,$senha,$bd);

        if($conexao->connect_error){
            die("Conexão falhou: ".$conexao->connect_error);
        }

        $sql = "select cpf, nome, celular from cliente";
        $resultado = $conexao->query($sql);

        if($resultado->num_rows > 0){
            while ($linhas = $resultado->fetch_assoc()){
                echo "cpf: ".$linhas["cpf"]. " - nome: " .$linhas["nome"] . " - celular: ".$linhas["celular"]."<br>";
            }
        }else{
            echo"0 resultados";
        }
        $conexao->close();
    ?>
</body>
</html>