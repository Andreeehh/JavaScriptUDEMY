//doc = document.querySelector("a").style.color = "red" //encadear propriedades da função depois de execulata

const cal = {
    value: 0,
    soma(n){
        this.value += n
        return this
    },
    subtrai(n){
        this.value -= n
        return this
    },
    log(){
        console.log(this.value)
        return this
    }
}

cal.soma(5).soma(2).subtrai(3).subtrai(2).log().soma(4).log()//caso o objeto retorne um valor, no caso this, pode se encadear funções dele mesmo logo após
//console.log(cal.value)