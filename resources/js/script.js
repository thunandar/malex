$(window).on('load', function() {
    $('#status ').fadeOut(1000);
    $('#preloader').delay(1100).fadeOut(1000);
})

// Owl Carousel
$(document).ready(function() {
    $("#team-members").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});
// Progress Bar
$(document).ready(function() {
    $('#progress-elements').waypoint(function() {
        $('.progress-bar').each(function() {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%',
            }, 3000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view',
    });

});
// Testimonial Section
$(document).ready(function() {
    $(".client-list").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                item: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});
$(document).ready(function() {
    $(".testimonial-part").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            }
        },
    });
});
//Stats Section
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
});
//Nav Section
$(document).ready(function() {
    $(window).scroll(function() {
        //For Show
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top');
            $('#back-to-top').fadeIn();
        } else {
            //For Hide
            $('nav').removeClass('white-nav-top');
            $('#back-to-top').fadeOut();

        }
    });
});
//Scroll Effect
$(document).ready(function() {
    $('a.smooth-scroll').click(function(event) {
        event.preventDefault();
        var select_id = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(select_id).offset().top - 64,
        }, 1250, 'easeInOutQuad')
    })
});
//Animation Scroll
$(document).ready(function() {
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeInLeft', '2s');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInRight', '2s');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeInDown', '1s');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__fadeInLeft', '4s');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animate__animated animate__fadeInLeft', '1s');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animate__animated animate__fadeInUp', '1s');
    }, {
        offset: '50%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animate__animated animate__fadeInLeft', '2s');
    }, {
        offset: '50%'
    });

    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animate__animated animate__fadeInRight', '2s');
    }, {
        offset: '50%'
    });

    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animate__animated animate__fadeInLeft', '2s');
    }, {
        offset: '50%'
    });

    $('.js--wp-10').waypoint(function(direction) {
        $('.js--wp-10').addClass('animate__animated animate__fadeInUp', '2s');
    }, {
        offset: '50%'
    });

    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animate__animated animate__fadeInLeft', '1s');
    }, {
        offset: '50%'
    });

    $('.js--wp-12').waypoint(function(direction) {
        $('.js--wp-12').addClass('animate__animated animate__fadeInUp', '0.3s');
    }, {
        offset: '50%'
    });
});