let count = 0

const increment = () => ++count

const getCount = () => count

module.exports = {increment, getCount}

//nao é compartilhado entre os 2 apps, cada um utiliza um count novo