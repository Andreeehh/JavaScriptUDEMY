(function(){  
    var $html = document.getElementById('html');
    var $btn = document.getElementById('13');
    $btn.addEventListener('click',toggleDone);
    function toggleDone(){
                $html.classList.toggle('menu-opened');//increcenta ou retira se ja tiver uma classe
    }
})()