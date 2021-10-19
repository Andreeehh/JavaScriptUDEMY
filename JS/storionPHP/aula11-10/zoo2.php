<html>

<head>
    <title>Resultados da consulta</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
        body {
            font-family: arial, sans-serif;
            background-color: #F0E68C
        }

        table {
            background-color: #ADD8E6
        }

        td {
            padding-top: 2px;
            padding-bottom: 2px;
            padding-left: 4px;
            padding-right: 4px;
            border-width: 1px;
            border-style: inset
        }
    </style>
</head>

<body>
    <?php
    extract($_POST);

    $servidor = "localhost";
    $usuario = "root";
    $senha = "1234";
    $bancodados = "zoo";
    $conexao = new mysqli($servidor, $usuario, $senha, $bancodados);
    if ($conexao->connect_error) {
        die("Conexão falhou: " . $conexao->connect_error);
    }
    $consulta = "select * from animal where especie= '$especie'";
    $resultado = $conexao->query($consulta);

    ?>
    <h3>Resultados da pesquisa</h3>
    <table>
        <?php
        print("<tr>");
        if ($resultado = $conexao->query($consulta)) {

            print("A espécie pesquisada é $especie");
            printf("<td> %s \n", "Nome");
            printf("<td> %s \n", "Habitat");
            print("</tr>");
            while ($acesso = $resultado -> fetch_row()) {
                printf("<td> %s \n", $acesso[1]);
                printf("<td> %s \n", $acesso[3]);
                print("</tr>");
            }
            $resultado->free_result();
        }
        $conexao->close();
        ?>
    </table>
    <br />Sua pesquisa para Animais
</body>

</html>