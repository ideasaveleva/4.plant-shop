let menuOpen = document.querySelector('.menu-bar')
let menuUl = document.querySelector('.menu-block')
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
let actionLink = document.querySelector('.action-link')
let button = document.querySelector('#btn')
let search = document.querySelector('#search')
let cart = document.querySelector('#cart')
let signUp = document.querySelector('#up')
let signIn = document.querySelector('#in')

let search1 = document.querySelector('#search1')
let cart1 = document.querySelector('#cart1')
let up1 = document.querySelector('#up1')
let in1 = document.querySelector('#in1')


menuOpen.addEventListener('click', function () {
  menuOpen.classList.toggle('active')
  menuUl.classList.toggle('active')
})

next.addEventListener('click', function () {
  alert('Cледующее растение, на данный момент растений нет')
})
previous.addEventListener('click', function () {
  alert('Предыдущее растениe, библиотека не подключена')
})
actionLink.addEventListener('click', function () {
  alert('Магазин работает в праздничные дни')
})
button.addEventListener('click', function () {
  alert('Проверка формы, база данных не подключена')
})

search.addEventListener('click', function () {
  alert('Будет поиск растений')
})
cart.addEventListener('click', function () {
  alert('Будет добавление растений в корзину')
})
signUp.addEventListener('click', function () {
  alert('Будет регистрация')
})
signIn.addEventListener('click', function () {
  alert('Войти в систему')
})


search1.addEventListener('click', function () {
  alert('Будет поиск растений')
})
cart1.addEventListener('click', function () {
  alert('Будет добавление растений в корзину')
})
up1.addEventListener('click', function () {
  alert('Будет регистрация')
})
in1.addEventListener('click', function () {
  alert('Войти в систему')
})



