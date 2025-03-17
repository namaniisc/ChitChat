const socket = io()

let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')

do {
    name = prompt('Please enter your name: ')
} while(!name)


