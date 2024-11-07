"use strict";

const loginId = document.getElementById('id');
const loginPw = document.getElementById('password');
const loginBtn = document.getElementById('login_button');


function moveToMain(){
  localStorage.setItem('userId', loginId.value);
  location.replace("./index.html");
}

loginBtn.addEventListener('click',moveToMain);

/*비밀번호 show or hide 구현 함수*/
function show() {
    var btn = document.getElementById("show_button");
    var password = document.getElementById("password");
    if (btn.innerText == "show") {
      password.type = "text";
      btn.innerText = "hide";
    } else {
      password.type = "password";
      btn.innerText = "show";
    }
}