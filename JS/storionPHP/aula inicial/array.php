<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<title>Array manipulador</title>
</head>
<body>
<?php
// criar o primeiro array
print( "<strong>criando o primeiro array</strong><br />" );
         $primeiro[ 0 ] = 5;
         $primeiro[ 1 ] = 10;
         $primeiro[ 2 ] = 20;
         $primeiro[ 3 ] = 30; 

// exibir cada valor pelo seu indice
for ( $i = 0; $i < count( $primeiro ); $i++ ) 
print( "elemento $i e o $primeiro[$i] <br />" );

$soma = $primeiro[ 2 ] + $primeiro[ 3 ];
print( "resultado da soma $soma <br />" );
$quarto = array(
    	"Janeiro" => "primeiro",
        "Fevereiro" => "segundo",
        "Março" => "terceiro",
        "Abril" => "quarto",
        "Mairo" => "quinto"
    );
    
    foreach ($quarto as $element => $value)
    	print ("$element é o $value mês <br/>");

        $arr = array(
            1=> 10,
            2=> 2,
            3=> 4,
            4=> 8,
            5=> 9,
        );
        $total = 0;
        foreach($arr as $i => $e){
            $total+= $e;
            print("o valor da posicao $i é de $e </br>");
        }
        $media = $total/$i;
        print("a média deles é de $media");

        $conteudoString = "3.5 segundos";
    $conteudoDouble = 97.2;
    $conteudoInteger = 12;
    
    print( "$conteudoString e do tipo " . gettype($conteudoString) . "<br/>");
    print( "$conteudoDouble e do tipo " . gettype($conteudoString) . "<br/>");
    print( "$conteudoInteger e do tipo " . gettype($conteudoString) . "<br/><br/>");
    
    print("$conteudoString");
    settype($conteudoString, "double");
    print(" converter para double $conteudoString <br/>");
    print("$conteudoString");
    settype($conteudoString, "integer");
    print(" converter para inteiro $conteudoString <br/>");
    settype($conteudoString, "string");
    print("retornar para um texto $conteudoString <br/><br/>");
    //convertendo sem alterar variável
    $dados = "98.6 graus";
    print(" conversao, $dados e um " . gettype($dados) . "<br /><br />");
    print("usando conversão : <br />
    e um double: " . (double) $dados.
    "<br />e um integer: " .(integer)$dados);
    print("<br /><br />depois casting, $dados e um " . gettype($dados));

?> 

</body>
</html>
