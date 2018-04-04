var smallSlider = (function(){
    return{
            data: ['/assets/img/small-slide_1.png', '/assets/img/small-slide_2.png',
                   '/assets/img/small-slide_3.png', '/assets/img/small-slide_5.png', '/assets/img/small-slide_6.jpg'],
            slides: document.querySelector('.about-left__slide-item'),
            counter: 0,
            set: function(){
                this.slides.style.backgroundImage = "url(" + this.data[this.counter] + ")";
            },
            doSlide: function(){
                this.counter++;
                if(this.counter == this.data.length){
                    this.counter = 0;
                }
                this.set();
            }

    }
}());

$(window).on('resize', function(){
    var imgWrap = $('.about-left__slide-img-wrap');
    var imgItem = $('.about-left__slide-img');
    var imgHeight = imgItem.height();

    imgWrap.css('min-height', imgHeight);
});

