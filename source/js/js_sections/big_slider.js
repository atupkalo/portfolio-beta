if(location.pathname == '/work.html'){


    var btnL = document.querySelector('.slider-right__btn-item--l');
    var btnR = document.querySelector('.slider-right__btn-item--r');
    var leftDesc = document.querySelector('.slider-left__desc-teh');
    var leftTitle = document.querySelector('.slider-left__desc-title');
    var slideLink = document.querySelector('.slider-left__desc-link');


    var data = [
        {
            title: 'Single Page Application. Weather widget',
            desc: 'HTML, CSS, jQuery, Ajax',
            link: 'http://cj86618.tmweb.ru/',
            img: '/assets/img/proj-1.jpg'
        },
        {
            title: 'Lending page',
            desc: 'HTML, LESS, jQuery',
            link: 'http://h-sweet.cj86618.tmweb.ru',
            img: '/assets/img/h-sweet.png'
        },
        {
            title: 'website of the 3',
            desc: 'HTML, CSS, JAVASCRIPT-333',
            link: '#',
            img: '/assets/img/new-2.png'
        },
        {
            title: 'website of the 4',
            desc: 'HTML, CSS, JAVASCRIPT-4444',
            link: '#',
            img: '/assets/img/new-3.png'
        },
    ];

    // getResSlider('GET', '').then(function(servRes){
    //     data.push(servRes);
    // });


    var count = 0;
    var dataLength = data.length;
     addElems();

    btnL.addEventListener('click', function(){
        count++;
        if(count >= dataLength){
            count = 0;
        };

        addElems();
    });


    btnR.addEventListener('click', function(){
        count--;
        if(count < 0){
            count = dataLength - 1;
        };

        addElems();
    });


    function addElems(){
        var slideRight = document.querySelector('.slider-right__pic-wrap');
        var smallPicLeft = document.querySelector('.slider-btn__small-pic-left');
        var smallPicRight = document.querySelector('.slider-btn__small-pic-right');

        var prev = countLimiter(count - 1);
        var next = countLimiter(count + 1);

        var img = document.createElement('img');
        img.setAttribute('src', data[count].img);
        img.classList.add('slider-right__pic');
        slideRight.innerHTML = '';
        slideRight.style.opacity = 0;
        slideRight.appendChild(img);
        setTimeout(function(){
            slideRight.style.opacity = 1;
        }, 300);

        var img = document.createElement('img');
        img.setAttribute('src', data[next].img);     // left
        img.classList.add('slider-btn__small-pic-item-left');
        smallPicLeft.innerHTML = '';
        smallPicLeft.style.opacity = 0;
        smallPicLeft.appendChild(img);
        setTimeout(function(){
            smallPicLeft.style.opacity = 1;
        }, 300);

        var img = document.createElement('img');
        img.setAttribute('src', data[prev].img);    // right
        img.classList.add('slider-btn__small-pic-item-left');
        smallPicRight.innerHTML = '';
        smallPicRight.style.opacity = 0;
        smallPicRight.appendChild(img);
        setTimeout(function(){
            smallPicRight.style.opacity = 1;
        }, 300);

        //  ----------------------------------------------------left side
        leftTitle.innerHTML = '';
        leftTitle.style.opacity = 0;
        leftTitle.innerHTML = data[count].title;
        setTimeout(function(){
            leftTitle.style.opacity = 1;
        }, 300);

        leftDesc.innerHTML = '';
        leftDesc.style.opacity = 0;
        leftDesc.innerHTML = data[count].desc;
        setTimeout(function(){
            leftDesc.style.opacity = 1;
        }, 300);

        slideLink.setAttribute('href', data[count].link);
    };

    function countLimiter(num){
        if(num < 0){
            return num = dataLength -1;
        }else if(num >= dataLength){
            return num = 0;
        }else{
            return num;
        }
    };

    function getResSlider(math, url){
        return new Promise(function(res, rej){
            var xhr = new XMLHttpRequest();
            open(math, url);
            xhr.onloadend = function(){
                res(xhr.response);
            };
            xhr.onerror = function(){
                rej(xhr.statusText);
            };
            xhr.send();
        });
    };

};
