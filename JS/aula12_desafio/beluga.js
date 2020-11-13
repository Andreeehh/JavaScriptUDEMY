function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }
    if(!arguments.some(function(el){
        return el === 0;
    })){
        return 'reprovado';
    }

    return (total / qtd).toFixed(2);
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado+1;
}