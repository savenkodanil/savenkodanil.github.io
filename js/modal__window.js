/******************************
**********МОДАЛЬНОЕ ОКНО*******
******************************/
$(document).ready(function() {
    $('.button__connection__with__me , .btn').click(function(event) {
        $('html , body , .popup-bg , .modal__window , .close__modal__window , .overlay , .popup-bg , header , .progress__bar__all__photos').toggleClass('active');
    });
});

$(document).ready(function() {
  $('.close__modal__window , .overlay ').click(function(event) {
      $('html , body , .modal__window , .popup-bg , .close__modal__window , .overlay , header , .progress__bar__all__photos').removeClass('active');
  });
});
  