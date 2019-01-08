$(document).ready(function(){
    var menuButton = $('.menu-btn');
    var overlay = $('.dark-overlay');

    menuButton.click(function(){
        $('.menu-list-adaptive').toggleClass('menu-list-adaptive-active');
        $(overlay).css("visibility", "visible");
    })
    overlay.click(function(){
        $('.menu-list-adaptive').toggleClass('menu-list-adaptive-active');
        $(overlay).css("visibility", "hidden");
    })


$('li.accordeon-item > .content-accordeon').not(':first').hide(); // Скрыть содержимое аккордеона кроме первого
$('li.accordeon-item > .name-tab').click(function(){ // Функция клика по заголовку аккордеона 
    var findArticle = $(this).next('.content-accordeon'); //Найти конкретный контент соответствующий заголовку аккордеона
    var findWrapper = $(this).closest('.accordeon-services'); // Закрыть аккордеон который был открыт перед открытием следующего

    if(findArticle.is(':visible')){ //Если содержимое выбранного аккордеона открыто
        findArticle.slideUp('slow'); // Закрыть или открыть
    }else{
        findWrapper.find('.content-accordeon').slideUp();//Если первое условие не выполняется, то найти открытый аккордеон и закрыть его
        findArticle.slideDown('slow');// И открыть кликнутый аккордеон
    }
});
$(document).ready(function(){
    var heightTestimonial = $('.testimonial').height();
    
    $('.slider-container').height((heightTestimonial*2));
    $('.slies').height(heightTestimonial*$('.slides > li').length);
    $('.slides').css('top', -(heightTestimonial));
    $('.slides>li:last-child').prependTo('.slides');
    
    function prevSlide() {
        $('.slides').animate({
          'margin-top':(heightTestimonial)
        },300, function() {
          $('.slides>li:last-child').prependTo('.slides');
          $('.slides').css('margin-top', 0);
        });
      }
    function nextSlide() {
        $('.slides').animate({
          'margin-top':-(heightTestimonial)
        },300, function() {
          $('.slides>li:first-child').appendTo('.slides');
          $('.slides').css('margin-top', 0);
        });
      }
        $('.next').click(nextSlide);
        $('.prev').click(prevSlide);
    })


    // animate 
    // Because only Chrome supports offset-path, feGaussianBlur for now

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}

  $(window).on('load', function () {
    $preloader = $('.preloader'),
    $loader = $preloader.find('.infinity');
        $loader.fadeOut('slow');
        $preloader.delay(750).fadeOut('slow');

  });

});
