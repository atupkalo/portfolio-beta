var loginForm = (function () {
    var check = document.querySelector('.author-form__checkbox');
    var enterBtn = document.getElementById('buttons-login');
    var errorField = document.querySelector('.form-error');

    return {
        valid: function () {
            console.log(333);
            check.addEventListener('change', function () {
                console.log(333);
                var login = document.querySelector('.input-field_log').value;
                var password = document.querySelector('.input-field_pass').value;
                console.log(login);
                enterBtn.addEventListener('click', function(){
                    console.log(login);
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


// const contactForm = (function(){
//     const myForm = document.forms[0];
//     const formErr = document.querySelector('.cont-form__error');
//     const subButton = document.getElementById('submit');
//     const url = '';
//     return {
//         valid(){
//             subButton.addEventListener("click", function(e){
//                 e.preventDefault();
//                 const name = document.querySelector('.cont-input_name').value;
//                 const phone = document.querySelector('.cont-input_phone').value;
//                 const email = document.querySelector('.cont-input_mail').value;
//                 const message = document.querySelector('.cont-textarea').value;
//                 const info = []; info.push(name, phone, email, message);
//
//                 this.formRequest('POST', url, info).then();
//             });
//         },
//         formRequest(meth, path, data){
//             return new Promise(function(res, rej){
//                 var xhr = new XMLHttpRequest();
//                 xhr.open(meth, path);
//                 xhr.send(data);
//                 xhr.onreadystatechange = function(){
//                     if(xhr.readyState === 4 && xhr.status === 200){
//                         res(xhr.response);
//                     }
//                 };
//                 xhr.onerror = () => {rej(xhr.responseText)}
//             });
//         }
//     }
//
// }());


    // function formRequest(meth, path){
    //     return new Promise(function(res, rej){
    //         var xhr = new XMLHttpRequest();
    //         xhr.open(meth, path);
    //         xhr.send();
    //         xhr.onreadystatechange = function(){
    //             if(xhr.readyState === 4 && xhr.status === 200){
    //                 res(xhr.response);
    //             }
    //         };
    //
    //     });
    // };
    //
    // document.getElementById('submit').addEventListener('click', function(){
    //     formRequest('GET', 'ajax.html').then(function(data){
    //         document.querySelector('.cont-form__wrap').innerHTML = data;
    //     })
    //
    // });




