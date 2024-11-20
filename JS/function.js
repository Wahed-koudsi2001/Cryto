(function ($) {
    "use strict";

    var $window = $(window);
    var $body = $('body');

    /* Preloader Effect */
    $window.on('load', function () {
        setHeaderHeight();
        $(".preloader").fadeOut(600);
    });

    /* Sticky Header */
    $window.on('resize', function () {
        setHeaderHeight();
    });

    function setHeaderHeight() {
        $("header.main-header").css("height", $('header .header-sticky').outerHeight());
    }

    $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        setHeaderHeight();
        var headerHeight = $('header .header-sticky').outerHeight()
        $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
        $("header .header-sticky").toggleClass("active", (fromTop > 600));
    });

    /* Slick Menu JS */
    $('#menu').slicknav({
        label: '',
        prependTo: '.responsive-menu'
    });

    /* Youtube Background Video JS */
    if ($('#herovideo').length) {
        var myPlayer = $("#herovideo").YTPlayer();
    }

    /* Hero Slider Layout 1 JS */
    const hero_slider_layout1 = new Swiper('.hero-slider-layout1 .swiper', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.hero-button-next',
            prevEl: '.hero-button-prev',
        },
    });


    /* Price Carousel Left JS */
    const price_carousel_left = new Swiper('.price-carousel.price-carousel-left .swiper', {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
            delay: 0,
        },
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 6,
            }
        }
    });

    /* Price Carousel Right JS */
    const price_carousel_right = new Swiper('.price-carousel.price-carousel-right .swiper', {
        slidesPerView: 1.5,
        centeredSlides: true,
        speed: 2500,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 0,
            reverseDirection: true,
        },
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 6,
            }
        }
    });

    /* Testimonial Carousel JS */
    const testimonial_carousel = new Swiper('.testimonial-carousel .swiper', {
        slidesPerView: 1,
        speed: 2500,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 0,
        },
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 4,
            }
        }
    });

    /* Popup Video */
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /* Animated skills Bars */
    $('.our-skills').waypoint(function () {
        $('.skillbar').each(function () {
            $(this).find('.count-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    }, {
        offset: '50%'
    });

    /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

    /* Text Effect Animation */
    if ($('.text-anime').length) {

        let staggerAmount = 0.05,
            translateXValue = 20,
            delayValue = 0.5,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll('.text-anime');

        animatedTextElements.forEach((element) => {
            let splitText = new SplitType(element, { type: "chars, words" });
            gsap.from(splitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: { trigger: element, start: "top 85%" },
            });
        });
    }

    /* Parallaxie js */
    /* var $parallaxie = $('.parallaxie');
    if($parallaxie.length)
    {
        if ($window.width() > 768) {
            $parallaxie.parallaxie({
                speed: 0.55,
                offset: 0,
            });
        }
    } */

    /* About Carousel JS */
    const about_carousel = new Swiper('.about-carousel .swiper', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.about-button-next',
            prevEl: '.about-button-prev',
        },
    });

    /* Contact form validation end */
    
    /* Init Counter */
    $('.counter').counterUp({ delay: 5, time: 2000 });
    /* Animated Wow Js */
    new WOW().init();
})(jQuery);