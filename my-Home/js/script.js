/*
const $fas = document.querySelector('.fab')
const $close = document.querySelector('#close_btn')
const $sidebar = document.querySelector('.sidebar')
$fas.addEventListener('click',function(){
    $sidebar.classList.add('active')
})
$close.addEventListener('click',function(){
    $sidebar.classList.remove('active')
})
*/
function main(){
  $('.container').hide();
  $('.container').fadeIn(1000);
  $('.fas').on('click',function(){
    $('.sidebar').toggleClass('active');
  });
  $('#close_btn').on('click', function(){
    $('.sidebar').removeClass('active');
  })
}
$(document).ready(main);
  
