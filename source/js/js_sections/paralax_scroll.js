var parallax = (function(){
    var bg = $('.header-main__bg'),
        portfolioText = $('.header-bg__img-wrapper'),
        user = $('.header-avatar');

    return{
        move : function (block, windowScroll, strafeAmount){
            var strafe = windowScroll / strafeAmount + '%',
                transformString = 'translate3d(0,' + strafe + ', 0)';
            block.css({
                'transform' : transformString,
                '-webkit-transform' : transformString
            });

        },
        init : function (wScroll) {
            this.move(bg, wScroll, -35);
            this.move(portfolioText, wScroll, 65);
            this.move(user, wScroll, -10);
        }
    }
}());
