//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------BLOG AND ABOUT GET REQUESTS--
if(location.pathname == '/about.html'){

    getRes('GET', '/').then(function(circleVal){
        var svgCircles = document.querySelectorAll('.inner-circle');

        for(var i = 0; i < svgCircles.length ; i++){
           if(svgCircles[i].dataset.cirname === circleVal.skillsblockname){
               svgCircles[i].style.strokeDasharray = circleVal.value + 282.6;
           }
        };
    });


 };

if(location.pathname == '/blog.html'){
    var artclWrap = document.querySelector('.articles-wrap');
    var navList = document.querySelecto('.nav__list');
    getRes('GET', '/blog').then(function(artclData){
        artclWrap.appendChild(artclData);
        navList.appendChild(artclData.title);
    })

};


function getRes(math, url){
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

