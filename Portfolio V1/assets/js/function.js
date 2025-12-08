// $('body').before('<div class="bodyLoading"><i></i></div>');

$(window).load(function () {

    $("body").addClass('fadeInLoading');
    //$(".bodyLoading").fadeOut(500);
	

});

$(function(){

    var w = $(window).width();

    /**************scrolltoTop 目前只用在首頁**************/
    $(window).scroll(function () {
        var s = $(this).scrollTop();
        var m = 300;
        if(s > m) {
            $("#pagetop").fadeIn('slow');
        } else if(s < m) {
            $("#pagetop").fadeOut('slow');
        };
        
    });





    $("#pagetop p").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $(".button-group .button").click(function () {
        $('html,body').animate({ scrollTop: 200 }, 'slow');
        //return false;
    });
    /**************scrolltoTop end**************/


    //Reload

    $(document).ready(function(){

        var Dwinsize, Nwinsize;

        if ( window.innerWidth>768) {
          Dwinsize = true;
        }else{
          Dwinsize = false;
        }

        $( window ).resize(function(){
          if ( window.innerWidth>768) {
            Nwinsize = true;
          }else{
            Nwinsize = false;
          }

          if (Dwinsize != Nwinsize) {
            $( window ).off('resize');
            window.location.reload()
          };
        })

        /**************locationInfo**************/
        
        /*main nav*/
        $('#navBtn').click(function(){
            $(this).toggleClass('open');
            $('.mainNav ul').slideToggle(1000);
        });

        /**************back to top**************/
        $(".back-top").hide();    
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                    $('.back-top').fadeIn();
                } else {
                    $('.back-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('.back-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });


        /**************fixed on top**************/
        // function moveScroller() {
        //     var $anchor = $("#scroller-anchor");
        //     var $scroller = $('#scroller');

        //     var move = function() {
        //         var st = $(window).scrollTop();
        //         var ot = $anchor.offset().top;
        //         if(st > ot) {
        //             $scroller.css({
        //                 position: "fixed",
        //                 top: "0px"
        //             });
        //         } else {
        //             if(st <= ot) {
        //                 $scroller.css({
        //                     position: "relative",
        //                     top: ""
        //                 });
        //             }
        //         }
        //     };
        //     $(window).scroll(move);
        //     move();
        // }

        $(window).scroll(function(e){ 
            var $el = $('.bodyHeader .wrapper'); 
            var isPositionFixed = ($el.css('position') == 'fixed');
            if ($(this).scrollTop() > 200 && !isPositionFixed){ 
                $('.bodyHeader .wrapper').animate({'top': 0}, 200).addClass('fixed');
                // $('.stickyAnchor').height($('.bodyHeader .wrapper').outerHeight());
                $('.stickyAnchor').addClass('heightFill');

                $('.button-group').animate({'top': 80}, 200).addClass('fixed');
                // $('.button-groupAnchor').height($('.button-group').outerHeight());
                $('.button-groupAnchor').addClass('heightFill');
            }else

            if ($(this).scrollTop() < 200 && isPositionFixed)
            {
                $('.bodyHeader .wrapper').animate({'top': 0}, 200).removeClass('fixed');
                // $('.stickyAnchor').height(0);
                $('.stickyAnchor').removeClass('heightFill');

                $('.button-group').animate({'top': 0}, 200).removeClass('fixed');
                // $('.button-groupAnchor').height(0);
                $('.button-groupAnchor').removeClass('heightFill');
            } 
        });

        // function sticky_relocate() {
        //     var window_top = $(window).scrollTop();
        //     var div_top = $('.stickyAnchor').offset().top;
        //     if (window_top > div_top) {
        //         $('.wrapper').addClass('fixed');
        //         $('.stickyAnchor').height($('.wrapper').outerHeight());  
        //     } else {
        //         $('.wrapper').removeClass('fixed');
        //         $('.stickyAnchor').height(0);
        //     }
        // }

        // $(function() {
        //     $(window).scroll(sticky_relocate);
        //     sticky_relocate();
        // });

        

    //colorbox
    // $(document).bind('cbox_open', function(){ 
    //       $('body').css({overflow:'hidden'}); 
    //   }).bind('cbox_closed', function(){ 
    //       $('body').css({overflow:'auto'}); 
    //   });



    });

    // 共用
    $("#header-placeholder").load("../template/header_inner.html");
    $("#footer-placeholder").load("../template/footer.html");



});




