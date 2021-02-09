const { getPeople } = require('./api')

Array.prototype.myReduce =  function (callback, valorInicial){
    let valorFinal = typeof valorInicial != undefined ? valorInicial : this[0]
    for (let index = 0; index < this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this);        
    }
    return valorFinal
}

async function main (){
    try {
        const { results } = await getPeople('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos', pesos)
        const total = pesos.myReduce((anterior, proximo) => {
            return anterior + proximo
        }, 0)
        console.log('total', total)
    } catch (error) {
        console.error(error)
    }
}

main()