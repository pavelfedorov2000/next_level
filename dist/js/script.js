$(function () {

    function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();

    $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.header__menu').toggleClass('header__menu--active');
    $('body').toggleClass('_lock');
});

$('.header__menu-link').on('click', function () {
    $('.burger-menu').removeClass('burger-menu--active');
});

    $('.accordion__item-summary').on('click', function () {
    $(this).parent().siblings().find('.accordion__item-summary').removeClass('accordion__item-summary--active');
    $(this).parent().siblings().find('div.accordion__item-details').slideUp('300');
    $(this).toggleClass('accordion__item-summary--active');
    $(this).next().slideToggle('300');
});

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

$('.catalog__item').each(function(index){

    $(this).addClass('catalog__item-' + index);
    var indexClass =  '.catalog__item-' + index;
    $(this).children().find('div.catalog-item__slider-arrows').addClass('catalog-item__slider-arrows--' + index);
    var arrows = '.catalog-item__slider-arrows--' + index;

    $(indexClass + ' .catalog-slider').slick({
        infinite: false,
        slidesToShow: 2,
        prevArrow: '<button class="slider-btn slider-btn--prev"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M44 22H4M4 22L27.4783 2M4 22L27.4783 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn--next"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M0 22H40M40 22L16.5217 2M40 22L16.5217 42" stroke="#FDE61B" stroke-width="5"/></svg></button>',
        variableWidth: true,
        appendArrows: $(arrows),
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
});


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
});



