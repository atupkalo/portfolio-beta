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

    function PostFile(math, path, data){
        return new Promise(function(res, rej){
            var xhr = new XMLHttpRequest();
            xhr.open(math, path);
            xhr.setRequestHeader('Content-type', 'multipart/form-data');
            xhr.onloadend = function(){
                res(xhr.response);
            };
            xhr.onerror = function(){rej(xhr.statusText)};
            xhr.send(data);
        });

    };

    var admBlogBtn = document.querySelector('.admin__button--blog');
    var admSliderBtn = document.querySelector('.admin-button--slider ');
    var blogFile = document.querySelector('.admin-blog__imput-img');
    var sliderFile = document.querySelector('.admin-work__input-file');

    //                                                                                 ---------------  blog
    blogFile.addEventListener('change', function(){
        if(blogFile.value){
            PostFile('POST', '/upload', blogFile.value).then(console.log);
        };
    });

    admBlogBtn.addEventListener('click', function(){
        var blogInputs = document.querySelectorAll('.admin-blog__input');
        var data = {};
        for(var i = 0; i < blogInputs.length ; i++){
            data[blogInputs[i].name] = blogInputs[i].value;
        };
     getPost('POST',  '/blog', JSON.stringify(data));
    });

    //                                                                                  -------------  slider
    sliderFile.addEventListener('change', function(){
        if(sliderFile.value){
            PostFile('POST', '/upload', sliderFile.value).then(console.log);
        }
    });

    admSliderBtn.addEventListener('click', function(e){
        e.preventDefault();
        var formSlider = document.forms[4];

        for(var i = 0; i < formSlider.length ; i++){

           if(formSlider[i].type == 'text'){
               var inputs = formSlider[i];
           };
            getPost('POST',  '/slider', JSON.stringify({name: inputs.name, value: inputs.value})).then(console.log).catch(console.log);
        };
    });

    //                                                                                      ---------  skills level

    document.getElementById('levels').addEventListener('click', function(e){
        e.preventDefault();
                 var skillsInputs = document.forms[2];

                  for(var i = 0; i < skillsInputs.length ; i++){
                     if(skillsInputs[i].name){
                         var inputs = skillsInputs[i];
                     }
                      getPost('POST', '/skills', JSON.stringify({name: inputs.name, value: inputs.value})).then(console.log).catch(console.log);
                  };

    });


    //                                                                                       --------  skills technology
    document.getElementById('circle').addEventListener('click', function(e){
        e.preventDefault();
        var dataSkillsTech = document.forms[1];
        var data = {};
        for(var i = 0; i < dataSkillsTech.length ; i++){
            if(dataSkillsTech[i].name){
                data[dataSkillsTech[i].name] = dataSkillsTech[i].value
            }
        };
        getPost('POST',  '', JSON.stringify(data));
    });

    //                                                                                        --------- skills section
    document.getElementById('sec').addEventListener('click', function(e){
        e.preventDefault();
        var dataSkillsSec = document.forms[0];
        var data = {};
        for(var i = 0; i < dataSkillsSec.length ; i++){
          if(dataSkillsSec[i].name){
              data[dataSkillsSec[i].name] = dataSkillsSec[i].value;
          }
        };
        getPost('POST',  '', JSON.stringify(data));
    });



}















//                                     -------------------------------------skills
