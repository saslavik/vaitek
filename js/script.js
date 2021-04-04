$(document).ready(function(){
  $('.slick').slick({
    dots: true,
    draggable: false,
    infinite: false,
  });
});

$(document).ready(function() {
  $('.find').click(function(event) {
    $('.find_input').toggleClass('find_active')
  })
  $('#main').click(function(event) {
    $('.find_input').removeClass('find_active')
  })
  $('.close_finder').click(function(event) {
    $('.find_input').removeClass('find_active')
  })
  $('.burger_menu').click(function(event) {
    $('.header_content').toggleClass('header_content_active')
    $('body').toggleClass('body_lock')
  })
  $('.close_burger').click(function(event) {
    $('.header_content').removeClass('header_content_active')
    $('body').removeClass('body_lock')
  })
})

