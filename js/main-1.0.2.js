(function($) {

    "use strict";



    $(window).load(function () {
        $("#status").fadeOut();
        $("#preloader").delay(1000).fadeOut("slow");
    })

    $(document).ready(function() {

        var introHeader = $('.tag_line_image');
        var intro = $('.tag_line_image');

        buildModuleHeader(introHeader);

        $(window).resize(function() {
            var width = Math.max($(window).width(), window.innerWidth);
            buildModuleHeader(introHeader);
        });

        /* menu items link remove */
/*
        $(".has-submenu"). removeAttr("href");
        $(".has-submenu"). removeAttr("href");
*/



        intro.each(function(i) {
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
        });

        function buildModuleHeader(introHeader) {

        }

        function effectsModuleHeader(introHeader, scrollTopp) {
            if (introHeader.length > 0) {
                var homeSHeight = introHeader.height();
                var topScroll = $(document).scrollTop();

                if ((introHeader.hasClass('tag_line_image')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    introHeader.css('top', (topScroll * .4));
                }

                if (introHeader.hasClass('tag_line_image') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    introHeader.css('opacity', (1 - topScroll / introHeader.height() * 1));
                }
            }
        }

        if ($(window).width() > 680) {
           $(window).scroll(function() {
                effectsModuleHeader(introHeader, this);
            });
        }


        $('.loop').owlCarousel({
            center: false,
            items: 3,
            loop: false,
            dots: false,
            autoplay: true,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                992: {
                    items: 3,
                    center: false,
                    margin: 30
                },
                1300: {
                    items: 3
                }
            }
        });

        var el = $('.circle');
        var inited = false;

        el.appear({
            force_process: true
        });
        el.on('appear', function() {
            if (!inited) {
                el.circleProgress();
                inited = true;
            }
        });


        $('.circle').circleProgress({
            size: 120,
            fill: {
                color: "#EC0B5B"
            },
            emptyFill: "#f4f4f4",
            startAngle: 300,
            animation: {
                duration: 4000
            }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').text((stepValue * 100).toFixed(1));
        });

        $(document).on('click', '.close-black-block', function(event) {
            event.preventDefault();
            $('.search-icon-header').removeClass('open');
            $(".focus-input").focus();
        });

        $(document).on('click', '.search-icon-header > a', function(event) {
            event.preventDefault();
            $('.search-icon-header').addClass('open');
            $(".focus-input").focus();
        });

        $('.gallery-slider').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            nav: true,
            autoplay: true,
            autoheight: true,
            dots: false,
            autoplayTimeout: 4000,
            navText: [
                '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'
            ],
            autoplaySpeed: 1000
        });


      $('body').addClass('menu-transparent');

        var pioneer_sticky_menu_offset_top = $('.navbar-wrap').offset().top > 50;
            var pioneer_sticky_menu = function() {
                var scroll_top = $(window).scrollTop();

                if (scroll_top > pioneer_sticky_menu_offset_top) {
                    $('.navbar-fixed-top').addClass('top-nav-collapse');
                } else {
                    $('.navbar-fixed-top').removeClass('top-nav-collapse');
                }

            };

            pioneer_sticky_menu();

            $(window).scroll(function() {
                pioneer_sticky_menu();
            });



        $(window).on('load resize scroll', function() {
            adjustNavBar();
            setInterval(adjustNavBar, 250);
        });

        function adjustNavBar() {
            var pusher = $('#hellobar-pusher')
            var hp = pusher && $('iframe.hb-bar-top')[0]? pusher.height() : 0
            if (pusher && pusher.css('display') === 'none') {
                hp = 0
            }
            if ($("body").hasClass('admin-bar')) {
                hp += $('#wpadminbar').height()
                $('.navbar-fixed-top').css('top', hp)
                $('.mob-menu-header-holder').css('top', hp);
            } else {
                $('.navbar-fixed-top').css('top',hp)
                $('.mob-menu-header-holder').css('top', hp);
            }
        }


        function scrollTop() {

            var offset = 500,
                scroll_top_duration = 350,
                $back_to_top = $('.scroll-top');

            $(window).on('scroll', function() {
                if ($(this).scrollTop() > offset) {

                    $back_to_top.addClass('scroll-top-visible').removeClass('scroll-top-hidden');

                } else {

                    $back_to_top.addClass('scroll-top-hidden').removeClass('scroll-top-visible');

                }
                //form fixed on the top
/*
                if ($(this).scrollTop() > offset) {

				    $(".RobotsImg").addClass("FixedForm");

				} else {

				    $(".RobotsImg").removeClass("FixedForm");

				}
*/
            });

            $back_to_top.on('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, scroll_top_duration);
                return false;
            });

        }

        scrollTop();



        var $container = $('.pioneer_mas_container');
            if($container.length) {
                $container.waitForImages(function() {
                    $container.isotope({
                      itemSelector : '.pioneer_mas_item',
                      layoutMode : 'masonry',
                    });
                },null,true);
            }

        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        });
        wow.init()

            $( '.swipebox' ).swipebox( {
                useCSS : true, // false will force the use of jQuery for animations
                useSVG : false, // false to force the use of png for buttons
                hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
                hideBarsDelay : 0, // delay before hiding bars on desktop
                videoMaxWidth : 1140, // videos max width
                loopAtEnd: false, // true will return to the first image after the last image is reached
                autoplayVideos: true // true will autoplay Youtube and Vimeo videos
            } );

            $( '.swipebox-video' ).swipebox();

            $( '.swipebox' ).swipebox( {
                useCSS : true, // false will force the use of jQuery for animations
                useSVG : false, // false to force the use of png for buttons
                hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
                hideBarsDelay : 0, // delay before hiding bars on desktop
                videoMaxWidth : 1140, // videos max width
                loopAtEnd: false, // true will return to the first image after the last image is reached
                autoplayVideos: true // true will autoplay Youtube and Vimeo videos
            } );

            $( '.video-button-vc' ).swipebox();

        //Scroll to Sections Speed

        if (window.location.hash) {
	        var hash = window.location.hash;
	        $('html, body').animate({
	            scrollTop :  $(hash).offset().top -170
	        }, 500);
	    };

        $('.icon_button > a[href^="#"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top -170
		        }, 800);
		    }
		});

		$('.Benefit > a[href^="#"]').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top -170
		        }, 800);
		    }
		});

		//fix position First Section on a Form WHen scrolling



        // addition for swipebox, closing img on click on bg
        jQuery(function(){
            jQuery(document.body)
                .on('click touchend','#swipebox-slider .current img', function(e){
                    return false;
                })
                .on('click touchend','#swipebox-slider .current', function(e){
                    jQuery('#swipebox-close').trigger('click');
                });
        });


        $(window).on('load scroll',function() {
            $('a.page-scroll').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 55)
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

            $(window).on("load",function(){
                $("#menu-onepage a").mPageScroll2id({
                    highlightSelector:"#menu-onepage a",
                    scrollSpeed: 1500,
                    scrollingEasing: "easeInOutExpo",
                    clickedClass: "active-menu",
                    highlightClass: "active-menu"
                });
            });

        if ($("body").hasClass('fullscreen')) {
            $(function(){
                    $('.tag_line.tag_line_image').css('height', (($(window).height())))
            })
        }

        if ($("body").hasClass('fullscreen')) {
            $(function(){
                $(window).on('load resize',function() {
                    $('.tag_line.tag_line_image').css('height', (($(window).height())))
                })
            })
        }

        if ($("body").hasClass('error404')) {
            $(function(){
                $('.tag_line.tag_line_image').css('height', (($(window).height())))
            })
        }

        if ($("body").hasClass('error404')) {
            $(function(){
                $(window).on('load resize',function() {
                    $('.tag_line.tag_line_image').css('height', (($(window).height())))
                })
            })
        }









    });
})(jQuery);
