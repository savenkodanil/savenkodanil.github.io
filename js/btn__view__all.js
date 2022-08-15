/**********************************
**********КНОПКА БІЛЬШЕ ФОТО*******
**********************************/

$(document).ready(function() {
    $('.btn__view__all').click(function(event) {
        $('.wrapper__view__all , .btn__close , .skills , .btn__view__all').toggleClass('open');
    });
});
  
$(document).ready(function() {
  $('.btn__close').click(function(event) {
      $('.wrapper__view__all , .btn__close , .skills , .btn__view__all').removeClass('open');
  });
});
