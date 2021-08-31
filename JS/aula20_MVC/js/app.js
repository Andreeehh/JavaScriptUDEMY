// const alunos = [
    // {
    //   _id: 0,
    //   nome: "chico melato",
    //   notas: {
    //     portugues: [1, 1, 2, 2],
    //     matematica: [2, 2, 2, 2],
    //     historia: [2, 2, 3, 3],
    //     ciencias: [3, 3, 3, 3],
    //   },
    // },
//     {
//       _id: 1,
//       nome: "talita lima",
//       notas: {
//         portugues: [4, 4, 4, 4],
//         matematica: [4, 4, 5, 5],
//         historia: [5, 5, 6, 6],
//         ciencias: [7, 7, 8, 9],
//       },
//     },
//   ];

const alunosService = new AlunosService()
//calcla a média por matéria de cada aluno e cria uma propriedade chamada média
// alunos.forEach(aluno => {
//     alunosService.add(new AlunoModel(aluno))
// })
const alunosView = new AlunosView(
    document.querySelector('[data-table-alunos]'),
    new MateriasService().materias
    )

const alunosController = new AlunosController(alunosService, alunosView)


// //inserir no tbody o nome do aluno e suas médias de cada matéria

// render()


//Adicionar aluno colocando um listener de subimit no FORM
document.querySelector("form").addEventListener("submit", function(e){//cria um evento de listener de quando da submit no form
    e.preventDefault()
    const nome = document.getElementById("first_name").value//recupera o valor da caixa de texto com id first_name
    alunosController.add({nome})//passando a propriedade com mesmo valor = {nome: nome}
})

document.querySelector("#search_name").addEventListener("input", function(){
    const name = this.value
    sessionStorage.setItem("search", name)

    if(name.length > 2 || name.length === 0){//caso for maior que dois busque com as letras passadas, ou busque todos
        alunosController.search(name)
    }
})
//Deixar um histórico de pesquisa, caso seja cancelado a ação de salvar na pagina edit.html, e buscar a view com o valor do histórico
const inputEvent = new Event("input")//não tem suport para IE
const inputEvent_IE = document.createEvent("Event")
inputEvent_IE.initEvent("input", true, true)

if(sessionStorage.getItem("search")){
    document.querySelector("#search_name").value = sessionStorage.getItem("search")
    // document.querySelector("#search_name").dispatchEvent(inputEvent)
    document.querySelector("#search_name").dispatchEvent(inputEvent_IE)
}
