$('.open-video').magnificPopup({
    type: 'iframe',
    preloader: false,
});

$('.popup-link').magnificPopup({
    type: 'inline' // к попапу добавить класс mfp-hide // Через кнопку data-mfp-src="#call_me" добавить кнопке
});

$('.popup-link').on('click', function () {
    $('.course-popup__slider').slick('setPosition'); 
});