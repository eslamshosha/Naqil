$(document).ready(function() {
	new WOW().init();


	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor, .lang-word, .navgition .dropdown>a').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
        //slide down menu
        $('.btn-div').click(function () {
            $(".cats-dispaly").slideToggle(400);
            if ($(window).width() <= 1199) {
                $(this).toggleClass("active")
            }
        });
        $('.overlay-box').click(function () {
            $(".cats-dispaly").slideToggle(400);
        });

        $('.has-level-2>.cat-anchor').click(function (e) {
            e.preventDefault()
            var item = $(this);
            $(".has-level-2>.cat-anchor").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level-2>.cat-anchor").not(item).siblings().slideUp(500);
        })

        $('.has-level-3>.cat-anchor').click(function (e) {
            e.preventDefault()
            var item = $(this);
            $(".has-level-3>.cat-anchor").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level-3>.cat-anchor").not(item).siblings().slideUp(500);
        })
   	}
    //    $('.btn-div').click(function () {
    //     $(".cats-dispaly").slideToggle(400);
    //     $(".overlay-box2").fadeToggle(300);
    //     if ($(window).width() <= 1199) {
    //         $(".overlay-box2").hide();
    //         $(this).toggleClass("active")
    //     }
    //     });
       //This is to Open Search Box 
	$(".search .search-icon").click(function() {
		// $("body").addClass("overflow")
		$(this).toggleClass("open-search close-search")
		
		$(".search-cont").toggleClass("search-open");
		$(".overlay-box").fadeToggle(500);
        $(".search-icon.hidden-lg").toggleClass("search-icon-ovar");
	});
    $(".overlay-box").click(function() {
		// $("body").removeClass("overflow")
		$(".search .search-icon").addClass("open-search")
		$(".search .search-icon").removeClass("close-search")
		$(".search-cont").removeClass("search-open");
        $(".search-icon.hidden-lg").removeClass("search-icon-ovar");
		$(".overlay-box").fadeOut(500);
	});
	
    ////////////////add chevron-down class in mobile size////////////////////////////////

	 if ( $(window).width() < 1199 ) {
        $(".top-header .add-chevron").addClass("chevron-down");
        
    }
	

    // //product Slider Carousel
    ///////// ** product** /////////
    var specials = new Swiper('.product-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-slider .swiper-btn-next',
            prevEl: '.product-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });   
            ///////// ** product2** /////////
    var specials = new Swiper('.product-slider-two .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.product-slider-two .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-slider-two .swiper-btn-next',
            prevEl: '.product-slider-two .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    
    // //big-image Slider Carousel
    ///////// ** big-image** /////////
    var specials = new Swiper('.banner-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.banner-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.banner-slider .swiper-btn-next',
            prevEl: '.banner-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
	

	////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})
    /////////////////////////////////////////////////////
    ////////////////add swiper carsoul to class feature////////////////////////////////

	 if ( $(window).width() < 1199 ) {
        $('.features .col-md-3.col-xs-12').contents().unwrap();
		$('.features .row').contents().unwrap();
        $(".feature-section .features").addClass("swiper-container");
        $(".feature-section .features-div").addClass("swiper-wrapper");
        $(".feature-section .features-box").addClass("swiper-slide");
        var blog = new Swiper('.feature-section .swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.feature-section .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1199: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }    

	

});