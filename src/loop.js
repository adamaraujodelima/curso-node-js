const { toNamespacedPath } = require('path');
const mpeople = require('./api')

async function main (){
    try {
        const people = await mpeople.getPeople('a')
        console.log(people)
        // const names = []
        // for (let index = 0; index < people.length; index++) {
        //     const element = people[index];
        //     names.push(element.name)            
        // }

        // people.results.forEach(element => {
        //     names.push(element.name)
        // });

        // const names = people.results.map(person => person.name)

        // console.log('names', names)

    } catch (error) {
        console.error('error instance', error)
    }
}

main()