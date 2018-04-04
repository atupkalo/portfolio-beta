
//----------------------------------------------------------- flip


var flip = (function(){
    var authorBtn =  $('.author'),
         rotateItem = $('.front-block__rotate'),
         frontBlock = $('.front-block__wrap-front'),
         backToMain = $('#empty');
      return {
          set: function(){
              authorBtn.on('click', function(){
                  rotateItem.css('transform', 'rotateY(180deg)');
                  setTimeout(function(){frontBlock.css('display', 'none')}, 1000);
                  setTimeout(function(){authorBtn.css('display', 'none')}, 300);
              });
              backToMain.on('click', function(){
                  rotateItem.css('transform', 'rotateY(0deg)');
                  setTimeout(function(){frontBlock.css('display', 'block')}, 100);
                  setTimeout(function(){authorBtn.css('display', 'block')}, 100);
              });
          }
      }

}());

//----------------------------------------------------contacts drop down

var contacts = (function(){
    var infoBlock = $('.my-info').hide(),
        infoBtn =$('.my-info__btn-wrap'),
        infoIcon =  $('.my-info__btn-icon'),
        iconClose = $('.my-info__close');
    return {
        down: function() {
            if (infoBlock.is(":hidden")) {
                infoBtn.on('click', function () {
                    infoBlock.slideDown(500);
                    infoIcon.addClass('icon-rotate');

                });

            }else{infoBlock.slideUp(500)};



            iconClose.on('click', function () {
                infoBlock.slideUp(500);
                infoIcon.removeClass('my-info__rotate');
                infoIcon.removeClass('icon-rotate');
            })
        }
    }

}());

//------------------------------------------- slowdown page



 var scrollPage = (function(){

     var arrowBottom = $('.footer__arrow-up'),
         arrowTop = $('.header-arrow__link');


     arrowTop.on('click', function(e){
         e.preventDefault();
         var positionBottom = arrowBottom.offset().top;
         $('html, body').animate({scrollTop: positionBottom}, 800);
     });
     arrowBottom.on('click', function(e){
         e.preventDefault();
         var positionBottom = $('.header-wrap').offset().top;
         $('html, body').animate({scrollTop: positionBottom}, 800);
     });

 }());





