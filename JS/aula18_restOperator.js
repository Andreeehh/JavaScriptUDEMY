function teste(n1,n2, ...ns){//rest Operator deve ser sempre o ultimo parametro
    console.log(n1)
    console.log(n2)
    console.log(ns)
    console.log(ns.map)
    console.log(typeof ns)
}

teste(1,2,3,4,5)