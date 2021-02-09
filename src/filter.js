const { getPeople } = require('./api')

Array.prototype.myFilter = (callback) => {
    const list = []   
    for (const key in this) {
        const item = this[key]
        const result = callback(item, key, this)
        if (!result) continue;
        list.push(item)
    }

    return list;
}

async function main () {
    try {
        const { results } = await getPeople('a')
        // const familyLars  = results.filter((item) => {
        //     return item.name.toLowerCase().indexOf('lars') !== -1
        // })
        const familyLars = results.myFilter((item, key, list) => {
            console.log(item,key,list)
            // return item.name.toLowerCase().indexOf('lars') !== -1
        })
        const names = familyLars.map((person) => person.name )
        console.log(names);
    } catch (error) {
        console.error(error)
    }
}

main()