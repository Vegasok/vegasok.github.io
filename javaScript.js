(function ($) {

    $.fn.slider = function(options) {

        options = $.extend({
            autoPlay: false,
            autoPlayDelay: 5
        }, options);

        var make = function () {

            var moveNext = function(){
                var currentSlide = $('.active-slide'),
                    nextSlide = currentSlide.next();

                if(nextSlide.length === 0){
                    nextSlide = $('.slide').first();
                }

                currentSlide.fadeOut(100).removeClass('active-slide');
                nextSlide.fadeIn(100).addClass('active-slide');
            };

            var nextHnd = function(e) {
                e.preventDefault();
                moveNext();
            };


            $('.arrow-next').on('click', nextHnd);

            var prevHnd = function(e){
                var currentSlide = $('.active-slide'),
                    prevSlide = currentSlide.prev();

                if(prevSlide.length === 0){
                    prevSlide = $('.slide').last();
                }

                currentSlide.fadeOut(100).removeClass('active-slide');
                prevSlide.fadeIn(100).addClass('active-slide');

                e.preventDefault();
            };
            $('.arrow-prev').on('click', prevHnd);


            if(options.autoPlay){
                function aPlay() {
                    $('.arrow-next').click();
                    delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
                }
                var delId = setTimeout(aPlay, options.autoPlayDelay * 1000);

                $('.arrows').hover(
                    function() {
                        clearTimeout(delId);
                    },
                    function() {
                        delId = setTimeout(aPlay, options.autoPlayDelay * 1000);
                    }
                );
            }
        };

        return this.each(make);
    };
})(jQuery);

$(document).ready($('.slider').slider({autoPlay: true, autoPlayDelay: 3}));

