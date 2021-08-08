if(!String.prototype.ReplaceAll){
    //resolução professor

    String.prototype.replaceAll = function(busca,troca){
        if(!(busca instanceof Strig || typeof busca === "string")){
            throw Error("first parameter must be a string")
        }
        if(!(troca instanceof Strig || typeof troca === "string")){
            throw Error("second parameter must be a string")
        }
        return this.valueOf().split(busca).join(troca)//split vai separar em array ex "teste".split(e) [t,st,], ja o join ira juntar essas arrays trocando a virgula pela letra
    }
}
    
    
    //minha tentativa
    // const newReplace = {
    //     newReplaceAll(oldStr, newStr){
    //         while(!(this.search(oldStr) == -1)){
    //             this = this.replace(oldStr, newStr)
    //         }
    //         return this
    //     }
    // }
    // Object.setPrototypeOf(String, newReplace)
    // let str = "str a str b str c str d"
    // console.log(str.this)
    // //str.newReplace.newReplaceAll("str", "abc")

String.prototype.newReplaceAll = function(oldStr,newStr){
    console.log(this)
    console.log(this.valueOf())
    console.log(this.valueOf().search(oldStr))
    let newString = this.valueOf()
    while(!(newString.search(oldStr) == -1)){
        newString = newString.replace(oldStr, newStr)
    }
    return newString
}
let str = "str a str b str c str d"
str = str.newReplaceAll("str","aaaebaa")
console.log(str)
