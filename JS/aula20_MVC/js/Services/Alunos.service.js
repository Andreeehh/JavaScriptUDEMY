class AlunosService{
    constructor(){
        this.alunos = []
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be a insteance of AlunoModel")
        }
        this.alunos.push(aluno)
    }

    edit(aluno){
        return aluno
    }
}