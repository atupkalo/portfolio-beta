
//                   -----------------------------------blog

if(location.pathname == '/admin.html'){
    var atcTitle = document.querySelector('.admin-blog__table-input-title');
    var atcDate = document.querySelector('.admin-blog__table-input-date');
    var atcBody = document.querySelector('.admin-blog__table-input-title-content');
    var atcSubBtn = document.querySelector('.admin__button--blog');


    atcSubBtn.addEventListener('click', function(){
        console.log(atcTitle.value, atcDate.value, atcBody.value);

    });




}



//                                     -------------------------------------skills

var skillsCirs = document.querySelectorAll('.inner-circle');
var adminSkillsInps = document.querySelectorAll('.top-display__input');

for(var i = 0; i < skillsCirs.length ; i++){
    console.log(skillsCirs[i].dataset.techn);
};