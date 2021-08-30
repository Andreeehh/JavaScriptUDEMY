class AlunosService{
    constructor(){
        this.alunos = []
        this.updateListAlunosFromLocalStorage()
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be a insteance of AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    edit(aluno){
        return aluno
    }

    serchById(id){
        return this.alunos.find(aluno => aluno._id === id)//retorna o aluno que tem o id passado por parametro igual sua propriedade id
    }

    updateLocalStorage(){//função criada para armazenar os alunos criados na página no local storage 
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos",alunos)//somente itens de tipo string podem ser armazenados
    }

    updateListAlunosFromLocalStorage(){//função criada para atualizar a página com os alunos armazenados no local storage
        const local = localStorage.getItem("alunos")
        if(local){
            const alunos = JSON.parse(local)
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }
}