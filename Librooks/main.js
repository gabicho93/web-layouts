/* Sticky navigation*/



/*
let navbar = $('.navbar');

$(window).scroll(function () {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if ($(window).pageYOffset() > oTop) {
        navbar.addClass('sticky');
    } else {
        navbar.removeClass('sticky');
    }
});

*/

let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        });
    });
};

$(window).scroll(function () {

})