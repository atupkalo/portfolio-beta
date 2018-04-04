var blogScroll = (function(){
    var  navLink = $('.nav__list-item-link');
    var navItem = $('.nav__item');

    return {
        doScroll : function(){
            var
                navBlog = $('.nav'),
                navClone = $('.nav__under-clone');
            var wScroll = $(window).scrollTop();

            if (wScroll >= 780) {
                navBlog.addClass('nav-fixed');
            }
            else{
                navBlog.removeClass('nav-fixed');
            }
        },
        scrollPointed : function(){
            navLink.on('click', function(){
                var
                    $this = $(this),
                    idArticle = $this.attr('href'),
                    articlePosition = $(idArticle).offset().top;
                $('html, body').stop(true).animate({scrollTop: articlePosition}, 600);

                navItem.removeClass('.blog-item__active');
                $this.addClass('.blog-item__active');
            })
        },
        navActiveLink : function(){
             var navLinks = $('.nav__list-item-link');
             var wScroll = $(window).scrollTop();
             var navItems = $('.nav__item');

             var scrollItems = navLinks.map(function(){
                 var item = $($(this).attr('href'));

                 if (item.length) { return item; }
            });

            var currNum = 0;
            scrollItems.each(function(i, elem){

               if(elem.offset().top - 100 <= wScroll){
                   currNum = i;
               }

            });
           // if(!navItems.eq(currNum).hasClass('blog-item__active')){
           //     navItems.eq(currNum).addClass('blog-item__active').siblings().removeClass('blog-item__active');
           // }
            navItems.removeClass('blog-item__active');
            navItems.eq(currNum).addClass('blog-item__active');

        }

    }

}());

