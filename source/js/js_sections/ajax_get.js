//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------BLOG AND ABOUT GET REQUESTS--
if(location.pathname == '/about.html'){
    getRes('GET', '/').then(function(circleData){
        var svgCircles = document.querySelectorAll('.inner-circle');
        console.log(circleData);
    });


 };

if(location.pathname == '/blog.html'){

    var artclWrap = document.querySelector('.articles-wrap');
    var navList = document.querySelector('.nav__list');
    getRes('GET', '/blog').then(function(artclData){
      console.log(artclData);
    });

};


function getRes(math, url){
    return new Promise(function(res, rej){
        var xhr = new XMLHttpRequest();
        xhr.open(math, url);
        xhr.onloadend = function(){
            res(xhr.res);
        };
        xhr.onerror = function(){
            rej(xhr.statusText);
        };
        xhr.send();
    });
};

