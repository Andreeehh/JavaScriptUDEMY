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
        extract($_POST);
        echo("Relatório de compra
        <br>Dados do cliente
        <br>Nome do cliente:$nome
        <br>Idade:$idade
        <br>CPF:$cpf
        <br>Sexo:$sexo
        <br>Rua:$rua
        <br>CEP:$cep
        <br>Cidade:$cidade
        <br>Dados da compra
        <br>Tipo de roupa:$tipo
        <br>Tamanho:$tamanho
        <br>Observações:$obs
        ")
    ?>
</body>
</html>