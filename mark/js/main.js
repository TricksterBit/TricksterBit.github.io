$(document).ready(function(){
    var menuButton = $('.menu-btn');
    var menuButtonActive = $('.menu-btn-active');
    var menuShow = $('.menuList');
    var menuListItems = $('.menuListItems');

    menuButton.click(function(){
    menuButton.toggleClass('menu-btn-active');
    menuShow.toggleClass('menuListActive');
    });
    menuButtonActive.click(function(){
    menuButton.removeClass('menu-btn-active');
    });
});