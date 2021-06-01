let menuOpen = document.querySelector('.menu-bar')
let menuUl = document.querySelector('.menu-block')
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
let actionLink = document.querySelector('.action-link')
let button = document.querySelector('.button')
let search = document.querySelector('#search')
let cart = document.querySelector('#cart')
let signUp = document.querySelector('#up')
let signIn = document.querySelector('#in')


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




