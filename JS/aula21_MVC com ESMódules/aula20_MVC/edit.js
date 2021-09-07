import { AlunosService } from "./js/Services/Alunos.service.js"
import { EditAlunoView } from './js/Views/EditAluno.views.js'
import { EditAlunoController} from "./js/Controllers/EditAluno.controller.js" 
import { MateriasService } from "./js/Services/Materias.service.js"


        const alunosService = new AlunosService()

        // alunos.forEach(aluno => {
        //     alunosService.add(new AlunoModel(aluno))
        // })

        const paramsString = window.location.search//recebe tudo passado na url q está depois do "?", ex ?id=2
        console.log(paramsString)
        const URLparams = new URLSearchParams(paramsString)//separa os parametros em um objeto
        const id = parseInt(URLparams.get("id"))//recupera o parametro id desse objeto

        const aluno =alunosService.serchById(id)

        document.getElementById("first_name").value = aluno.nome

        const editAlunoView = new EditAlunoView(
          document.querySelector("[data-edit-aluno-form]"), 
          new MateriasService().materias)

        const editAlunoController = new EditAlunoController(aluno, editAlunoView, alunosService)

        document.querySelector("form").addEventListener("submit", function(e){
            e.preventDefault()
            const nome = document.querySelector("#first_name").value

            editAlunoController.edit(aluno, nome)
            window.location.assign("index.html")
        })