var tabs = (function(){
    return{
        set: function(){
            $('.admin__tabs-item-link').on('click', function(e){
                e.preventDefault();
                var link = $('.admin__tabs-item-link'),
                    $this = $(this),
                    item = $this.closest('.admin__tabs-item'),
                    index = item.index(),
                    container = $this.closest('.admin-wrap'),
                    allcontent = container.find('.admin__content-item'),
                    active = allcontent.filter('.active'),
                    duration = 300,
                    reqcontent = allcontent.eq(index);



                if (!item.hasClass('active')) {

                    item.addClass('active')
                        .siblings().removeClass('active');

                    active.stop(true).fadeOut(duration, function(){
                        reqcontent.stop(true).fadeIn(duration);

                        reqcontent.addClass('active')
                            .siblings()
                            .removeClass('active');
                    });



                }

                link.removeClass('change_color');
                $this.addClass('change_color');


            });
        }
    }
}());


