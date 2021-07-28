
/*
const dog = {
    name: "rex",
    falar: function(){
        console.log(this.name, "fala: au au")
    }
}
dog.falar()
*/

function latir(){
    console.log(this.name, "fala: au au")
}

function miar(){
    console.log(this.name, "fala: miau")
}

const dog = {
    name: "rex",
    falar(){// ecma script subistitui falar: function(){} por falar(){}
        console.log(this.name, "fala: au au")
    },
    falar2(){
        console.log("falar2")
    }
}

const cat = {
    name: "charlie",
    falar: miar, //this é o objeto
    falar2(){
        miar() // this é undefined
    },
    falar3(){
        miar.call(this)//chama o this do objeto acima
    }
}
dog.falar()
dog.falar2()
cat.falar()
cat.falar2()
cat.falar3()