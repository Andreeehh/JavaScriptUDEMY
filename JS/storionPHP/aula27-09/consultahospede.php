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
        $conexao = mysql_connect("localhost","root","");
        mysql_select_db("hotel", $conexao);

        $consulta = mysql_query("select * from hospede");

        echo 'Hóspedes do Hotel! <br>';
        while($campo = mysql_fetch_array($consulta)){
            $variavelnome = $campo['nome'];
            echo 'nome indivíduo:  '.$variavelnome. '<br>';

            $variavelcidade = $campo['cidade'];
            echo 'cidade indivíduo :  '.$variavelcidade . '<br>';
        }
    ?>
</body>
</html>