//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------ADMIN POST REQUESTS--------------




//                   -----------------------------------blog

if(location.pathname == '/admin.html'){

    function getPost(math, path, data){
        return new Promise(function(res, rej){
            var xhr = new XMLHttpRequest();
            xhr.open(math, path);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onloadend = function(){
                res(xhr.response);
            };
            xhr.onerror = function(){rej(xhr.statusText)};
            xhr.send(data);
        });

    };

    var admBlogBtn = document.querySelector('.admin__button--blog');
    var admSliderBtn = document.querySelector('.admin-button--slider ');
    var admSkillsBtnSec = document.querySelector('.admin__button--skills-section');
    var admSkillsBtnTech = document.querySelector('.admin__button--skills-tech');
    var admSkillsBtnLevel =document.querySelector('.admin__button--skills-level');


    admBlogBtn.addEventListener('click', function(){                               //    blog
        var blogInputs = document.querySelectorAll('.admin-blog__input');
        var data = {};
        for(var i = 0; i < blogInputs.length ; i++){
            data[blogInputs[i].name] = blogInputs[i].value;

        };

        getPost('POST',  '/blog', JSON.stringify(data));
    });


    admSliderBtn.addEventListener('click', function(){                            // slider
        var dataSlider = document.querySelectorAll('.admin-work__input-slider');
        var data = {};

        for(var i = 0; i < dataSlider.length ; i++){
             data[dataSlider[i].name] = dataSlider[i].value;
        };

        getPost('POST',  '', JSON.stringify(data));
    });

    admSkillsBtnLevel.addEventListener('click', function(){                       //skills level

    });



    admSkillsBtnTech.addEventListener('click', function(){                        //skills technology
        var dataSkillsTech = document.querySelectorAll('.bottom-display__input-tech');
        var data = {};
        for(var i = 0; i < dataSkillsTech.length ; i++){
           data[dataSkillsTech[i].name] = dataSkillsTech[i].value

        };

        getPost('POST',  '', JSON.stringify(data));
    });


    admSkillsBtnSec.addEventListener('click', function(){                         //skills section
        var dataSkillsSec = document.querySelector('.bottom-display__input-sec');
        var data = {};
        data[dataSkillsSec.name] = dataSkillsSec.value;

        getPost('POST',  '', JSON.stringify(data));
    });

}















//                                     -------------------------------------skills
