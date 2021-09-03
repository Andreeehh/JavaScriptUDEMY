(function () {
    
    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(element){
        
        let bounding = element.getBoundingClientRect();

        return (
            bounding.top * -1 < bounding.height && bounding.top <= 0
          );
    }

    function getNewPosY(element){
        const velocity = parseFloat(element.getAttribute("data-p-velocity")) || .1
        return element.getBoundingClientRect().top * velocity * -1
    }

    function positionImage(e){

        dataParalaxContainer.forEach(c => {
            let originalYPositionY = getComputedStyle(c).backgroundPositionY
            let originalYPositionX = getComputedStyle(c).backgroundPositionX

            let newPosY = parseInt(originalYPositionY)

            if(isGettingOut(c)){

                c.style.backgroundPosition = `${originalYPositionX} ${getNewPosY(c)}px`
            }
        })
    }

    window.addEventListener("scroll", positionImage)

    positionImage()

})()