//Given an integer array arr, count how many elements x there are, such that x+1 is also in arr. If there're duplicates in arr, count them separately

var coutElements = function(arr){
    var result = null;
    var aux = arr;
    arr.forEach((e,i)=>{
        aux.forEach((e1,i1) =>{
            if (e == e1 && i != i1){
                aux.splice(i1,1);
            }
        })
    })
    arr.forEach(e=>{
        aux.forEach(e1=>{
            if(e == e1+1){
                result +=1;
            }
        })
    })
    return result;
}

var arr = [1,1,3,3,5,5,7,7];
console.log(coutElements(arr));