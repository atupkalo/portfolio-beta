//preloader
var imgs = [];

$.each($('*'), function(){

    var
        $this = $(this),
        background = $this.css('background-image'),
        img = $this.is('img'),
        gradient = background.indexOf('linear-gradient');
    if (background != 'none'){
        if (gradient === -1) {
            var path = background.replace('url("' , '').replace('")', '');
            imgs.push(path);
        }
    }
    if (img) {
        var path = $this.attr('src');

        if
        (path) {
            imgs.push(path);
        }
    }

   var percentsTotal = 1;
     for (var i = 0; i < imgs.length; i++){
          var image = $('<img>', {
                    attr: {
                          src: imgs[i]
                         }
                    });

         image.on('load', function(){
            setPercents(imgs.length, percentsTotal);
            percentsTotal++;
         });

         image.on('error', function(){
             percentsTotal++;
         });


    }
    function setPercents(total, current) {
        var percent = Math.ceil(current / total * 100);
        $('.preloader__percents ').text(percent + '%');
        if (percent >= 100) {
            $('.preloader').fadeOut();

           }
        };
});

