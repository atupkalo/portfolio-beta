window.addEventListener('load', function(){




        var parallax_front = (function () {

            var pics = $('.wrapper').find('.front__bg');
            $(window).on('mousemove', function(e){
                var mouse_dx = e.pageX,
                    mouse_dy = e.pageY;

                var w = (window.innerWidth/2) - mouse_dx,
                    h = (window.innerHeight/2) - mouse_dy;



                pics.map(function(key, value){

                    var widthPosition = w * (key * 1.6 / 100),
                        heightPosition = h * (key * 1.6 / 100);

                    $(value).css({
                        'transform' : 'translate3d('+widthPosition+'px, '+heightPosition+'px, 0)'
                    });
                });

            });
        }());

});








