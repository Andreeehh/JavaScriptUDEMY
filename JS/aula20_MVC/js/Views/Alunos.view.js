class AlunosView{
    constructor(tableDOM){
        this.tableList = tableDOM
        this.tableHeader = this.tableList.querySelector("thead")
        this.tableBody = this.tableList.querySelector("tbody")
        this.materias = ["portugues","matematica","historia","ciencias"]
        this.renderHeader()
    }
    renderHeader(){
        //inserir no thead a propriedade "nome" e cada uma das matérias
    const htmlHeader = document.createElement("tr")//cria um elemento do DOM de tag  tr table row(linha), colocando na cosntante htmlHeader
    htmlHeader.innerHTML = "<td>Nome</td>"//adiciona no innerHtml da constante a string com a tag td(coluna da tabela)

    let htmlheaderMaterias = this.materias.map(materia =>{
        console.log(materia)
        return `<td>${materia}</td>`
    }).join("")//concatena esse array retornado do .map em uma unica string
    htmlHeader.innerHTML += htmlheaderMaterias//concatena a td nome com as tds das matérias
    this.tableHeader.appendChild(htmlHeader)//adiciona um filho a thead da tabela que tem a tag [data-table-alunos] a variável com as tds buscadas acima
    }

    render(alunos){
            this.tableBody.innerHTML = ""//zera o valor dele html para quando adicionar novo campo, ele começar limpo
            alunos.forEach(aluno =>{//cria um loop para a constante alunos passando o objeto como parametro
                const htmlBody = document.createElement("tr")//adiciona um elemento html de tag tr
                let htmlMedias = `<td>${aluno.nome}</td>`//concatena o nome do aluno com tag td
                let encontrado = false

                this.materias.forEach(materia => {//loop para cada matéria passando matéria como parametro
                    if(materia in aluno.notas){//caso o aluno tenha nota na matéria
                        encontrado = true
                    }
                })
                if (encontrado){//caso tenha nota em ao menos 1 matéria incluir link por nota
                    this.materias.forEach(materia => {//forma uma array com os nomes das matérias do aluno, e cria um forEach com esses nomes das propriedades por parametro
                        htmlMedias += `<td>
                        ${aluno.media[materia] !== undefined ? 
                            aluno.media[materia] :
                            `<a href="edit.html?id=${aluno._id}">Incluir nota</a>`
                        }
                        </td>`//concatena a tag td a média do aluno em cada matéria
                    })
                }   else {//caso n tenha ao menos uma nota, incluir um link para todas
                    htmlMedias += `<td colspan ="${this.materias.length}">
                        <a href="edit.html?id=${aluno._id}">Incluir notas</a>
                    </td>`
                }

                
                htmlBody.innerHTML = htmlMedias//concatena as tag td de média com a tag td de nome
                this.tableBody.appendChild(htmlBody)//adiciona essas tag tr e td ao body como filho
            })
            
        }
}



