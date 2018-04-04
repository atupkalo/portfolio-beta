 var wWidth = window.innerWidth;
    if(location.pathname == '/work.html'){
        var slideRight = document.querySelector('.slider-right');

        function sliderHeight(h1, h2){
            if(h1 > 920){
                slideRight.style.height = h2 + 'px';
            }else{
                slideRight.style.height = h1 + 'px';
            }

        };
        sliderHeight(wWidth , wWidth / 2);
        //-----------------------------------------------------------------------------------------------------

        function setSpeakersBg(wSize){
            var speakersBg = document.querySelector('.speakers-bg__img');
            var contFormBg = document.querySelectorAll('.cont-form__bg-wrap');

            if(wSize < 1200 && wSize > 768){
                speakersBg.setAttribute('src', '/assets/img/spk_bg1200.png');
            }else if(wSize < 768 && wSize > 420){
                speakersBg.setAttribute('src', '/assets/img/spk_bg768.png');
            }else if(wSize <=420){
                speakersBg.setAttribute('src', '/assets/img/spk_bg420.png');
            }

        };

        setSpeakersBg(wWidth);

        window.addEventListener('resize', function(){

            sliderHeight(window.innerWidth , window.innerWidth / 2);
            setSpeakersBg(window.innerWidth);
        });
    };

//    --------------------------------------------------------------------------------------------------------------






















