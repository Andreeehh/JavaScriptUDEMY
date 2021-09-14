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
    function media($um, $dois)
    {
        $resultado = ($um + $dois) / 2;
        if ($resultado >= 7) {
            echo "Aluno aprovado <br>";
        } else {
            if ($resultado >= 5) {
                echo "Aluno em recuperação <br>";
            } else {
                echo "Aluno reprovado <br>";
            }
        }
        return $resultado;
    }
    $um = $fnotaUm;
    $dois = $fnotaDois;
    echo "A nota final do aluno é : " . media($um, $dois);
    echo (" <br> notas do aluno, nota um $um , nota dois $dois");
    ?>
</body>

</html>