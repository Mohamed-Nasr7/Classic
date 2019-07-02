/*global $, window*/

$(function () {
    "use strict";
    $('.header').height($(window).outerHeight());
    
    $(window).resize(function () {
        $('.header').height($(window).outerHeight());
        
        $('.slider').each(function () {
            $(this).css("paddingTop",  ($(window).outerHeight() - $('.slider div').outerHeight()) / 2);
        });
        
    });
    
    
    $('nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
    
    
    // SLIDER
    
    $('.slider').bxSlider({
        pager: false
    });
    
    
    
    // positioning in the middle
    
    $('.slider').each(function () {
        $(this).css("paddingTop",  ($(window).outerHeight() - $('.slider div').outerHeight()) / 2);
    });
    
    
    
    
    //  SCROLLING down to any section
    
    $('nav ul li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    
    
    
    
    //  AUTO Slide
    
    (function autoSlide() {
        
        $('.autoslider .active').each(function () {
            
            if ($(this).is(':not(":last-child")')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlide();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    $(".autoslider :eq(0)").addClass('active').fadeIn();
                    autoSlide();
                });
            }
            
            
            
        });
        
        
    }());
    
    
    
    
    
});





