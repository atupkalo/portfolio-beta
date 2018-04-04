var blur = (function(){
    var
        blurSection = $('.speakers-wrap'),
        blurBg = $('.cont-form__bg-wrap'),
        formBlur = $('.cont-form__wrap');

    if(location.pathname == '/work.html'){
        function getBlur() {
            var
                imgWidth = $('.speakers-bg__img').width(),
                imgHeight= $('.speakers-bg__img').height(),
                positionLeft = blurSection.offset().left - formBlur.offset().left,
                positionTop = blurSection.offset().top - formBlur.offset().top;

            blurBg.css({
                'background-size' : imgWidth + 'px' + ' ' + imgHeight + 'px',
                'background-position' : positionLeft + 'px' + ' ' + positionTop + 'px'
            });
        }
        getBlur();
    }
}());
