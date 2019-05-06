
const $fas = document.querySelector('.open_menu')
const $close = document.querySelector('.close_menu')
const $sidebar = document.querySelector('.sidebar')

$fas.addEventListener('click',function(){
    $sidebar.classList.add('active')
})
$close.addEventListener('click',function(){
    $sidebar.classList.remove('active')
})

