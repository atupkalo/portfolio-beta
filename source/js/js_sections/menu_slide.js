var menu = (function(){
    var menuBlock = $('.menu-wrap'),
        menuClose = $('.menu__close-item'),
        menuTrigger = $('.header-menu__link'),
        menuItems = $('.menu-item'),
        arrItems = jQuery.makeArray(menuItems),
        pageName    =  location.pathname.substring(1, 5);


    return {
        slideTo : function (){

            menuTrigger.on('click', function(){
                if(menuBlock.hasClass('display')){
                    menuBlock.removeClass('display');

                        if(pageName == 'work'){
                            $(arrItems[0]).addClass('menu-active');
                        }else if(pageName == 'abou'){
                            $(arrItems[1]).addClass('menu-active');
                        }else if(pageName == 'blog'){
                            $(arrItems[2]).addClass('menu-active');
                        }

                    menuBlock.animate({'right': 0}, 300);
                }

            });
        },
        slideOff : function(){
            menuClose.on('click', function(){
                menuBlock.animate({'right': -500}, 300);
                setTimeout(function(){menuBlock.addClass('display')}, 500);
            });
        }

    }

}());
