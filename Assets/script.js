// nav bar js
let menuIcon = document.querySelector('.menuIcon')
let crossBtn = document.querySelector('.crossBtn')
// let crossBtn = document.getElementsByClassName('crossBtn')
let mobile__menu = document.querySelector('.mobile__menu')

menuIcon.addEventListener('click', function(){
    mobile__menu.classList.toggle('open')
})

crossBtn.addEventListener('click', function(){
    mobile__menu.classList.remove('open')
})

