(function($) {"use strict";
    $(document).ready(function() {

function demo_f() {


            function pioneerMenu() {
                $('.burger_pioneer_main_menu > .menu-item-has-children > a').on('click', function(e) {
                    e.preventDefault();
                    if ($(this).next('ul').is(':visible')) {
                        $(this).removeClass('sub-active').next('ul').slideUp(250);
                    } else {
                        $('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
                        $(this).addClass('sub-active').next('ul').slideToggle(250);
                    }
                });
            }

            pioneerMenu();

            function pioneer_burger_responsive() {
                $('#open-button').click(function(e) {
                    e.preventDefault();

                    $(this).toggleClass('active');
                    $('body').toggleClass('show-menu');
                });
            }

            pioneer_burger_responsive();

            $(".burger_pioneer_main_menu > li").each(function(i) {
                $(this).css({
                    "transform": "translate3d(0, " + (i + 1) * 45 + "px, 0)"
                });
            });
        };


   $(window).on('load', demo_f);



    });
})(jQuery);
