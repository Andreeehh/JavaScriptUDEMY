(function () {

    window.addEventListener("scroll", positionImage)//adiciona uma função possitionImage a cada evento de scroll
    //window.addEventListener("scroll", positionBoxes)//adiciona uma função possitionBoxes a cada evento de scroll

    //const dataParalaxSection = [...document.getElementsByClassName("content-section")]
    //console.log(dataParalaxSection)
    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]//cria uma array constante que recebe todos as query com [data-paralax] de classe

    /*function isFullShow(section){
        return container.getBoundingClientRect().bottom >= 0
    }

    function positionBoxes(){
        dataParalaxSection.forEach(s => {
            if(isFullShow(s)){
            }
        })
    }*/

    function isGettingOut(container) {//função que recebe um parametro
        return container.getBoundingClientRect().top <= 0 // retorna verdadeiro ou falso se esse parametro saiu do topo da pagina
    }

    function getNewPosition(c) {//funcao que recebe um parametro
        const v = parseFloat(c.getAttribute("data-p-velocity")) || .5 //constante que transforma em float o atributo do parametro "data-p-velocity" ou caso vazio fica por padrão .5
        return c.getBoundingClientRect().top * v * -1 //retorna em relação a área visivel, a parte superior do parametro, multiplicado pela constante v criada acima, multiplicado por -1
                                                      //fazendo com que o parametro desça na pagina com relação a velocidade v
    }

    function positionImage() {//função 
        dataParalaxContainer.forEach(c => { //arrow funciton onde o c é igual ao dataParalaxContainer.forEach, array criada no começo, forEach é um loop que aplica para todos os atributos do array
            let originalPositionY = getComputedStyle(c).backgroundPositionY //variável que recebe a posição inicialY do dataParalaxContainer 
            let originalPositionX = getComputedStyle(c).backgroundPositionX //variável que recebe a posição inicialX do dataParalaxContainer

            console.log(originalPositionX, originalPositionY)//mostra no console as posições

            if (isGettingOut(c)) {
                c.style.backgroundPosition = ` ${originalPositionX} ${getNewPosition(c)}px ` //se saiu do topo da visão, muda a posição da propriedade style do paramentro(container)
                                                                                             //para a posição inicial X, concatenada com a nova posição Y retornada pela função, com px
            } else {
                c.style.backgroundPosition = ` ${originalPositionX} 0px `//caso não, a posição da imagem fica na posição original X concatenada com 0px para posição Y
            }
        })
    }

    positionImage()//executa a função


})()