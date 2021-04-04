$(document).ready(function(){
  $('.slick').slick({
    dots: true,
    draggable: false,
    infinite: false,
  });
});

$(document).ready(function() {
  $('.find_desktop').click(function(event) {
    $('.find_input_desktop').toggleClass('find_active')
  })
  $('#main').click(function(event) {
    $('.find_input_desktop').removeClass('find_active')
    $('.find_input_mobile').removeClass('find_active')
  })
  $('.close_finder').click(function(event) {
    $('.find_input_desktop').removeClass('find_active')
  })
  $('.find_mobile').click(function(event) {
    $('.find_input_mobile').toggleClass('find_active')
  })
  $('.close_finder').click(function(event) {
    $('.find_input_desktop').removeClass('find_active')
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

