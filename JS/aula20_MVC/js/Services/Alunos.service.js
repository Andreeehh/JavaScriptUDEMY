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
        aluno.generateAvarage()
        this.updateLocalStorage()
    }

    serchById(id){
        return this.alunos.find(aluno => aluno._id === id)//retorna o aluno que tem o id passado por parametro igual sua propriedade id
    }

    search(name){
        console.log(this.alunos.filter(aluno => aluno.nome.indexOf(name) >= 0 ))//filtrando dos objetos alunos que contem todos os alunos, apenas aqueles que tem uma parte do nome igual ao que foi passado por parametro
        return this.alunos.filter(aluno => aluno.nome.indexOf(name) >= 0 )
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