(function(){
    window.addEventListener('scroll', destacaMenu);

    const menu = document.querySelector(".nav");
    const links = menu.querySelectorAll("li a");

    function destacaMenu(){
        let positions = [...links].map(link => {
            let href = link.getAttribute("href");
            let h2 = document.querySelector(href);
            return h2.getBoundingClientRect().top;
        })

        let linkAtivo = pegaUltimoElementoVisto(positions);
        let menuActived = menu.querySelector(".actived");
        if(menuActived){
            menuActived.classList.remove("actived");//remover caso ja tenha algum ativo
        }
        if(linkAtivo){
            return linkAtivo.classList.add("actived");//ativar o link da pela posição
        }

        return links[0].classList.add("actived")// começar a pagina com o primeiro já ativo
    }

    function pegaUltimoElementoVisto(_positions){
        let positions = _positions.filter(n => n < innerHeight / 2)
        //console.log(positions.pop()); //.pop destroi o array origial
        //console.log(links[positions.length - 1]);
        return links[positions.length - 1]
    }

    destacaMenu();

})();