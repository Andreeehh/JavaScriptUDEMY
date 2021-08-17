/*
you are keeping score for a baseball game with strange rules. The game consists of several rounds, where the socres of past rounds may affect future rounds'scores.
At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the follwoing:
An integer x - Record a new score of x.
"+" - Record a new score tha is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

*/

var calPoints = function(ops){
    var result = null;
    var aux = [];
    var auxI = 0;
    ops.forEach((element) => {
        
        
        if(element == "+"){
            var s = aux[auxI-1] + aux[auxI];
            aux.push(s) ;
            auxI++;
        }else{if(element == "D"){
            var d = aux[auxI] * 2;
            aux.push(d) ;
            auxI++;
            
        }else{if(element == "C"){
            aux.pop();
            auxI = auxI-2;
        }else{
            aux.push(element);
            auxI++;
        }}
        }
        
        
    });
    aux.forEach(e => {
        result += e;
    });
    return result;
}
var ops = [5,2,"C","D","+"];

console.log(calPoints(ops));

