let encode = document.querySelector('#encode');
let decode = document.querySelector('#decode');
let output = document.querySelector('textarea');

encode.addEventListener('click', ()=>{
    output.value = btoa(output.value);
});
decode.addEventListener('click', ()=>{
    output.value = atob(output.value);

});



        function contar (palavra) {
        var contando = window.document.getElementById('txt1')
        var res = window.document.getElementById('res')

        var totalVogal = 0;
        var vogais = ['a', 'e', 'i', 'o', 'u'];
        var i;

        for (i = 0; i < palavra.length; i++ ) {
                if(vogais.indexOf(palavra[i]) != -1) {
                    totalVogal++;
                }
            }

            return totalVogal;

            res.innerHTML = totalVogal
        }

        
        


    



