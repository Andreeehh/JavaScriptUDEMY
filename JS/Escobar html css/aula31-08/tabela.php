<?php
    $numero = $_POST['numero'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        O número que você digitou é <?php echo $numero;?>
    </title>
</head>
<body>
    <?php
        for($i= 0; $i <= $numero; $i++){
            echo "O número atual é " .$i ."<br/>";
        }
    ?>
</body>
</html>