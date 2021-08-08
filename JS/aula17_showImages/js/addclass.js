(function(){
    let elements = [...document.querySelectorAll("[data-addclass-on-scroll]")]//cria variável elementos que recebe todos elementos do documento com atributo data-addclass-on-scroll
    console.log(elements)//mostra a variavel elementos
    window.addEventListener("scroll", addClassOnScroll)//adiciona um ouvidor de evento scroll, e uma função a cada evento desse
    
    function isElementVisible(el){//função que recebe um parametro
        let rect = el.getBoundingClientRect()//variavel que recebe a propriedade getBoundingClientRect do parametro
        return (
            (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= innerHeight)//retorna verdadeiro caso o elemento esteja dentro da viewport
        )
    }

    function addClassOnScroll(){//função
        if(elements.length === 0){//compara tamanho do elemento a 0
            window.removeEventListener("scroll", addClassOnScroll)//caso for 0, remova o evento de scroll
            console.log("evento removido com sucesso")//imprime no console
        }
        elements.forEach(el => {//loop de forEach, passando uma arrow function para um parametro
            if(isElementVisible(el)){//função recebendo o parametro da arrow function
                let delay = parseInt(el.getAttribute("data-addclass-on-scroll-delay")) || 0 //variável que transforma em int a informação guardada no atributo, se ela n existir, recebe 0
                
                setTimeout(function(){//função de tempo que faz uma ação(função sem nome), num determinado tempo em milisegundos passado pela variável delay
                    let _class = el.getAttribute("data-addclass-on-scroll")//pega o atributo show da data-addclass-on-scroll e adiciona a variável
                    el.classList.add(_class)//adiciona uma classe passada por parametro
                    el.removeAttribute("data-addclass-on-scroll")//remove o atributo
                    el.removeAttribute("data-addclass-on-scroll-delay")//remove o atributo
                    elements = [...document.querySelectorAll("[data-addclass-on-scroll]")]//atualiza a array com todas as que ainda tem os atributos que não foram removidas acima
                },delay)
            }
        })
    }   

    addClassOnScroll()//executa a função ao inciar
})()