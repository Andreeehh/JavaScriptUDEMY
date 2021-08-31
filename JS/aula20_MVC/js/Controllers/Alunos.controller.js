class AlunosController{
    constructor(service, view){
        view.render(service.alunos)
        this.view = view
        this.service = service
    }

    add(aluno){
        this.service.add(new AlunoModel(aluno))
        this.view.render(this.service.alunos)
    }

    search(name){
        const data = this.service.search(name)//retorna o aluno com nome com parte igual passado por parametro
        this.view.render(data)//renderiza a pagina novamente com apenas os alunos recuperados acima
    }
}