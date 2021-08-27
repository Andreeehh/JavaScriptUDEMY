class AlunoModel{
    // constructor(aluno){
    //     this.nome = aluno.nome
    // }
    constructor({nome, _id, notas} = {notas:{} }){
        this.nome = nome
        this._id = (_id !== undefined) ? id : this.generateId()
        this.notas = {...notas}


        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }
        for(let materia in newAluno.notas){
        
            newAluno.media[materia] = avarege(...newAluno.notas[materia])
        }

        this.media = {}
    }

    generateId(){
        return AlunoModel.maxId + 1
    }
}

AlunoModel.maxId = 0