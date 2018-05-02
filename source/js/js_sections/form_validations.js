var loginForm = (function () {
    var check = document.querySelector('.author-form__checkbox');
    var enterBtn = document.getElementById('buttons-login');
    var errorField = document.querySelector('.form-error');

    return {
        valid: function () {
            check.addEventListener('change', function () {

                var login = document.querySelector('.input-field_log').value;
                var password = document.querySelector('.input-field_pass').value;

                enterBtn.addEventListener('click', function(){
                    if (login == 'anatolii' && password == '191080') {
                        enterBtn.setAttribute('href', 'admin.html');
                    }
                });

            });
        },
        pass: function () {
            enterBtn.addEventListener('click', function () {
                var login = document.querySelector('.input-field_log').value;
                var password = document.querySelector('.input-field_pass').value;

                if (login == '' || password == '') {
                    errorField.innerHTML = 'login or password field cannot be empty';
                } else if (login !== 'anatolii' && password !== '191080') {
                    errorField.innerHTML = 'login or password is incorrect';
                } else if (check.checked == false) {
                    errorField.innerHTML = 'conform you you are not a bot'
                }
            });
        }
    }


}());

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------- FORM AJAX REQUEST -------------
const contactFormData = (function(){
    const myForm = document.forms[0];
    const formElems = document.querySelectorAll('.cont-input');
    const subButton = document.getElementById('submit');

    return{
        post: function(){
            var data = {};
            for(var i = 0; i < formElems.length ; i++){
               data[formElems[i].name] = formElems[i].value
            };

            subButton.addEventListener('click', function(){
                getFormPost('POST',  '/', JSON.stringify(data))
                    .then(function(result){
                       var formWrap =  document.querySelector('.cont-form__wrap');
                       formWrap.appendChild(result);
                    });
                console.log(data);
            });

        }
    }

}());



function getFormPost(math, path, data) {
    return new Promise(function (res, rej) {
        var xhr = new XMLHttpRequest();
        xhr.open(math, path);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onloadend = function () {
            res(xhr.response);
        };
        xhr.onerror = function () {
            rej(xhr.statusText)
        };
        xhr.send(data);
    });
}









