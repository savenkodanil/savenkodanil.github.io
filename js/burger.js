/******************************
*************БУРГЕР************
******************************/
$(document).ready(function() {
    $('.button__burger').click(function(event) {
        $('body , .nav-icon2 , .header__nav , .header__logo , .header__bg , .wrapper__text__modal__wimdow , .header__content , .button__connection__with__me , .header__buttons').toggleClass('open');
    });
});


$(document).ready(function() {
  $('.nav__menu').click(function(event) {
      $('body , .nav-icon2 , .header__nav , .header__logo , .header__bg , .header__content , .wrapper__text__modal__wimdow , .button__connection__with__me').removeClass('open');
  });
});