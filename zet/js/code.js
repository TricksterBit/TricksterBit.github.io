
$( document ).ready(function() {
    $("a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('header').addClass('black');
        }else{
            $('header').removeClass('black');
        }
    })
    $('.fa-times').hide();
    $('.menu').on('click', function(){
        $('.menu-block').toggleClass('menu-block-active');
        $('.fa-bars').toggleClass('d-none');
        $('.fa-times').toggleClass('d-inline');
    })
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('preloader')[0].style.display = "block";
}

  $(window).on('load', function () {
    $preloader = $('.preloader'),
    $loader = $preloader.find('.preloader');
        $loader.fadeOut('slow');
        $preloader.delay(750).fadeOut('slow');

  });
});