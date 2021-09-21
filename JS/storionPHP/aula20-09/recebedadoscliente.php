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
    echo ("dados da pessoa:
    <br> Nome:$nome 
    <br> Rua:$rua 
    <br> Cidade:$cidade
    <br> Sexo:$sexo
    <br> Sugestões:$sugestoes
    ")
    ?>
</body>

</html>