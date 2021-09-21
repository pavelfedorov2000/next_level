$(function () {

    @@include('dinamic-adapt.js')

    @@include('../blocks/modules/burger/burger.js')

    @@include('accordion.js')

    @@include('sliders.js')


    if ($(window).width() > 992) {
        $('.header__menu-item--drop').hover(function () {
            $(this).toggleClass('header__menu-item--active');
            $(this).find('ul.header__menu-sublist').slideToggle('300');
        });
    } else {
        $('.header__menu-drop').on('click', function() {
            $(this).parent().siblings().removeClass('header__menu-item--active');
            $(this).parent().siblings().find('ul.header__menu-sublist').slideUp('300');
            $(this).parent().toggleClass('header__menu-item--active');
            $(this).parent().find('ul.header__menu-sublist').slideToggle('300');
        });
    }

    $('.filter-btn').not(':first-child').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.filter-btn:first-child').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('tab--active');
        $('.tabs-content').addClass('tabs-content--active');
        $(this).addClass('tab--active');
    });

    $('.blog-section__btn').on('click', function () {
        $(this).hide();
        $('.more-news').slideDown('300');
    });

    $('.client-review__view-all').on('click', function () {
        $(this).hide();
        $(this).prev().addClass('no-overflow');
    });

    $('form').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize(),
        });
        $(this).find("input").val("");
        $('form').trigger('reset');
        $.magnificPopup.open({
            items: {
                src: '#thanks',
            }
        });
        return false;
    });

    @@include('../blocks/modules/popups/popups.js')
});



