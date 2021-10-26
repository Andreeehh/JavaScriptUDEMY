<html xmlns="http://www.w3.org/1999/xhtml">

<head>
   <title>Formulário</title>
   <meta http-equiv="Content-Type" content=" text/html; charset=utf-8">

   <style type="text/css">
      div {
         text-align: center
      }

      div div {
         font-size: larger
      }

      .prompt {
         color: blue;
         font-family: sans-serif;
         font-size: smaller
      }

      .avisoerro {
         color: red
      }

      .smalltext {
         font-size: smaller
      }

      .error {
         color: red;
         font-size: smaller
      }
   </style>
</head>

<body>
   <?php
   extract($_POST);
   $falha = false;

   // array de titulos de livros
   $listalivros = array("Java como programar", "Use a cabeça Java", "C# como programar", "Use a cabeça C#");

   // array com os sistemas operacionaos
   $listasistemas = array("Windows XP", "Windows Vista", "Mac OS X", "Linux", "Other");

   // array com os campos de texto
   $camposform = array("fname" => "Nome", "lname" => "Sobrenome", "email" => "Email", "phone" => "fone");

   // garantir que todos os campos foram preenchidos corretamente
   if (isset($submit)) {
      $formerrors["fnameerror"] = false;
      if ($fname == "") {
         $formerrors["fnameerror"] = true;
         $falha = true;
      }
      $formerrors["lnameerror"] = false;
      if ($lname == "") {
         $formerrors["lnameerror"] = true;
         $falha = true;
      }
      $formerrors["emailerror"] = false;
      if ($email == "") {
         $formerrors["emailerror"] = true;
         $falha = true;
      }
      $formerrors["phoneerror"] = false;
      if (!preg_match("/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/", $phone)) {
         $formerrors["phoneerror"] = true;
         $falha = true;
      }
      if (!$falha) {
         $servidor = "localhost";
         $usuario = "root";
         $senha = "1234";
         $bancodados = "pessoa";
         $conexao = new mysqli($servidor, $usuario, $senha, $bancodados);
         if ($conexao->connect_error) {
            die("Conexão falhou: " . $conexao->connect_error);
         }
         $insert = "insert into dados values ('$fname','$lname','$email','$phone','$livros','$os')";


         function alert($msg)
         {
            echo "<script type='text/javascript'>alert('$msg');</script>";
         }
         if ($conexao->query($insert) === TRUE) {
            alert("Cadastrado");
         } else {
            echo "Error: " . $insert . "<br>" . $conexao->error;
         }
         $conexao->close();
      } // fim do if 
   } // fim do if 
   print("<h1>Registro de dados.</h1>
            Por favor, preencha todos os campos e clique em Registrar.");

   if ($falha) {
      print("<br /><span class = 'avisoerro'>                 
               Os campos com * são obrigatórios.</span>");
   }
   print("<!-- posta os dados no form.php -->
            <form method = 'post' action = 'validar.php'>

            <h3>Informações do Usuário</h3>
            <span class = 'prompt'>
            Por favor, preencha os campos abaixo.<br /> </span>

            <!-- cria os quatro campos de texto, campos do form, entradadas, alternativas -->");
   foreach ($camposform as $inputname => $inputalt) {
      if ($inputname == "phone") {
         print(" $inputalt <input type = 'text'                
               name = '$inputname' value = '" . (isset($$inputname) ? $$inputname : '') . "'placeholder=(555)555-5555 />");
      } else {
         print(" $inputalt <input type = 'text'                
         name = '$inputname' value = '" . (isset($$inputname) ? $$inputname : '') . "' />");
      }

      if (isset($formerrors) && $formerrors[($inputname) . "error"] == true)
         print("<span class = 'error'>*</span>");

      print("<br />");
   } // fim foreach

   if (isset($formerrors) &&  $formerrors["phoneerror"])
      print("<span class = 'error'>");
   else
      print("<span class = 'smalltext' placeholder='*555)555-5555'>");

   print("Este deve ser o formato correto (555)555-5555
            </span><br /><br />

            <h3>Publicações</h3>

            <span class = 'prompt'>
            Qual livro gostaria de informações!
            </span><br />

            <!-- criar a lista drop down com nomes dos livros -->
            <select name = 'livros'>");

   foreach ($listalivros as $livrocorrente) {
      print("<option");

      if (isset($livros) && ($livrocorrente == $livros))
         print(" selected = 'true'");

      print(">$livrocorrente</option>");
   } // fim do foreach

   print("</select><br /><br />
            <h3>Sistemas Operacionais</h3>
            <br /><span class = 'prompt'>
            Qual sistema operacional você está usando atualmente?
            <br /></span>

            <!-- cria cinco botões de rádio -->");
   $counter = 0;
   foreach ($listasistemas as $sistemacorrente) {
      print("<input type = 'radio' name = 'os' 
               value = '$sistemacorrente'");

      if (isset($os) && ($sistemacorrente == $os))
         print("checked = 'checked'");
      elseif (isset($os) && !$os && $counter == 0)
         print("checked = 'checked'");

      print(" />$sistemacorrente");

      // colocar uma quebra de linha na lista de sistemas operacionais
      if ($counter == 1) print("<br />");
      ++$counter;
   } // fim do foreach

   print("<!-- criar o botão enviar -->
            <br /><input type = 'submit' name = 'submit'
            value = 'Registrar' /></form></body></html>");
   ?>