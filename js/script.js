window.addEventListener('load', function () {

    setTimeout(function () {
        $("body").removeClass("transition-reset");
    }, 200);

});


$(function () {
    var state = false;
    var scrollpos;
    $('.js-menubtn').on('click', function () {
        if (state == false) {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-nav').addClass('is-show');
            state = true;
        } else {
            $('body').removeClass('is-fixed').css({
                'top': 0
            });
            $('.l-nav').removeClass('is-show');
            window.scrollTo(0, scrollpos);
            state = false;
        }
    });
    $('.js-menubtn-close').on('click', function () {
        if (state == false) {
            state = true;
        } else {
            $('body').removeClass('is-fixed').css({
                'top': 0
            });
            $('.l-nav').removeClass('is-show');
            window.scrollTo(0, scrollpos);
            state = false;
        }
    });
    $('.js-articlebtn-close').on('click', function () {
        $('body').removeClass('is-fixed').css({
            'top': 0
        });
        $('.l-article').removeClass('is-show');
        window.scrollTo(0, scrollpos);
    });
});


//スクロール アニメーション
$(function() {
  $('.article__section , .menu__list .col-12').addClass('inview');
  $('.inview').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('fadeIn');
    } 
  });
  
});