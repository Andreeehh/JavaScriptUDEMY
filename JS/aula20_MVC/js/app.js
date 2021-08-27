const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        portugues: [1, 1, 2, 2],
        matematica: [2, 2, 2, 2],
        historia: [2, 2, 3, 3],
        ciencias: [3, 3, 3, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        portugues: [4, 4, 4, 4],
        matematica: [4, 4, 5, 5],
        historia: [5, 5, 6, 6],
        ciencias: [7, 7, 8, 9],
      },
    },
  ];

//calcla a média por matéria de cada aluno e cria uma propriedade chamada média
alunos.forEach(aluno => {//cria uma loop para executar uma ação para cada objeto(aluno) da constante alunos, passando o objeto(aluno) como parametro
    aluno.media = {};//cria uma propriedade média para cada aluno passando um objeto vazio
    
    for(let materia in aluno.notas){//loop para cada nota do aluno passando o nome da propriedade(materia) como variável 
        
        aluno.media[materia] = avarege(...aluno.notas[materia])//popula o objeto média com um array com variável matéria de nome de propriedade, e usando a função avarege,
                                                               //passando por spread operator as notas do aluno naquela materia em um array, para tirar a média por soma/lenght
    }
})

//inserir no thead a propriedade "nome" e cada uma das matérias
const htmlHeader = document.createElement("tr")//cria um elemento do DOM de tag  tr table row(linha), colocando na cosntante htmlHeader
htmlHeader.innerHTML = "<td>Nome</td>"//adiciona no innerHtml da constante a string com a tag td(coluna da tabela)

let htmlheaderMaterias = Object.keys(alunos[0].notas).map(materia =>{//.map chama uma função para cada parametro do array original e retorna um novo array com base na função
    console.log(materia)//Object.keys dos (alunos[indice].notas) retorna um array com o nome das propriedades de alunos[indice].notas, que ficam armazenados na variavel matéria
    return `<td>${materia}</td>`//retorna um array com a tag td e o nome da matéria
}).join("")//concatena esse array retornado do .map em uma unica string
console.log(alunos)
console.log(htmlheaderMaterias)
htmlHeader.innerHTML += htmlheaderMaterias//concatena a td nome com as tds das matérias
console.log(document.querySelector("[data-table-alunos] thead"))//busca a thead da tabela que tem a tag [data-table-alunos]
document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)//adiciona um filho a thead da tabela que tem a tag [data-table-alunos] a variável com as tds buscadas acima

//inserir no tbody o nome do aluno e suas médias de cada matéria
function render(){
    document.querySelector("[data-table-alunos] tbody").innerHTML = ""//zera o valor dele html para quando adicionar novo campo, ele começar limpo
    alunos.forEach(aluno =>{//cria um loop para a constante alunos passando o objeto como parametro
        const htmlBody = document.createElement("tr")//adiciona um elemento html de tag tr
        let htmlMedias = `<td>${aluno.nome}</td>`//concatena o nome do aluno com tag td
        Object.keys(aluno.notas).forEach(materia => {//forma uma array com os nomes das matérias do aluno, e cria um forEach com esses nomes das propriedades por parametro
            htmlMedias += `<td>${aluno.media[materia]}</td>`//concatena a tag td a média do aluno em cada matéria
        })
        htmlBody.innerHTML = htmlMedias//concatena as tag td de média com a tag td de nome
        document.querySelector("[data-table-alunos] tbody").appendChild(htmlBody)//adiciona essas tag tr e td ao body como filho
    })
    
}
render()


//Adicionar aluno colocando um listener de subimit no FORM
document.querySelector("form").addEventListener("submit", function(e){//cria um evento de listener de quando da submit no form
    e.preventDefault()
    const nome = document.getElementById("first_name").value//recupera o valor da caixa de texto com id first_name

    const newAluno = {
    _id:0,
    nome,//cria objeto new aluno passando o nome criado acima como propriedade
    notas:{
        portugues: [6,2,1,2],
        matematica: [10,5,7,6],
        historia: [8,10,4,6],
        ciencias: [7,7,5,6],
        },
    }

    
    newAluno.media = {}
    
    
    for(let materia in newAluno.notas){//loop para cada nota do aluno passando o nome da propriedade(materia) como variável 
        
        newAluno.media[materia] = avarege(...newAluno.notas[materia])//popula o objeto média com um array com variável matéria de nome de propriedade, e usando a função avarege,
        //passando por spread operator as notas do aluno naquela materia em um array, para tirar a média por soma/lenght
    }
    
    alunos.push(newAluno)
    render()
})
