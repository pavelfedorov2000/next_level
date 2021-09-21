$('.clients__cards').slick({
    infinite: false,
    slidesToScroll: 1,
    rows: 2,
    slidesToShow: 4,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    variableWidth: true,
    appendArrows: $('.clients__arrows'),
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                rows: 1,
                slidesToShow: 1,
                variableWidth: false,
            }
        },
    ]
});

$('.gallery-slider').slick({
    infinite: false,
    slidesToShow: 2,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    appendArrows: $('.gallery__arrows'),
});

$('.coaches-slider').slick({
    infinite: false,
    slidesToShow: 2,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    appendArrows: $('.s-coaches__arrows'),
});

$('.people-reviews__slider').slick({
    infinite: false,
    slidesToShow: 2,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    appendArrows: $('.people-reviews__arrows'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.companies-reviews__slider').slick({
    infinite: false,
    slidesToShow: 1,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    appendArrows: $('.companies-reviews__arrows'),
});

$('.course-popup__slider').slick({
    slidesToShow: 1,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
});

$('.how-we-study__slider').slick({
    infinite: false,
    slidesToShow: 1,
    prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
    appendArrows: $('.how-we-study__slider-arrows'),
});

@@include('../blocks/modules/catalog/catalog.js')