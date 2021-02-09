const EventEmitter = require('events')

class MyEvent extends EventEmitter{

}

const myEmitter = new MyEvent()
const nameEvent = 'user:click'

myEmitter.on(nameEvent, (click)=> {
    console.log('An user has clicked', click)
})

// let count = 0
// setInterval(() => {
//     myEmitter.emit(nameEvent, 'no ok ' + (count++))
// })

const stdin = process.openStdin()
stdin.addListener('data', (value) => {
    console.log(`You wrote: ${value.toString().trim()}`)
})