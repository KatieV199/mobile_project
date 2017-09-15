$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button id="prev" type="button" class="arrow-slider prev"></button>',
    nextArrow: '<button id="next" type="button" class="arrow-slider next"></button>'
});


$('.track__list-slider-320').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button id="prev" type="button" class="arrow-slider prev"></button>',
    nextArrow: '<button id="next" type="button" class="arrow-slider next"></button>'
});



$('.reviews__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    prevArrow: '<button id="prev" type="button" class="arrow-slider prev"></button>',
    nextArrow: '<button id="next" type="button" class="arrow-slider next"></button>'
});

$('.reviews__list-320').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button id="prev" type="button" class="arrow-slider prev"></button>',
    nextArrow: '<button id="next" type="button" class="arrow-slider next"></button>'
});


$(document).ready(function() {
    $('.price-320__item').on('click', function() {
        $(this).toggleClass('active-sl');
        $('.price-320__item').not(this).removeClass('active-sl');
    });
});

$(document).ready(function() {
    $('.page-header__toggler').on('click', function() {
        $('.small-menu').toggleClass('active-t');

        
    });
});