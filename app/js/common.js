$( document ).ready(function() {
    //Slimmenu
    $('li').click(function(){
        $(this).children('.submenu').toggle(function (){
            $(this).prev('.caret').toggleClass('active')
        });
    });
    new WOW().init();

    $('.carousel-1').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.carousel-2').owlCarousel({
        loop:true,
        margin: 30,
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
            }
        }
    });

    $('.carousel-3').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    });

    $('.carousel-4').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.carousel-5').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    //Magnific popUp
    $('.popUp-btn').magnificPopup();
});

