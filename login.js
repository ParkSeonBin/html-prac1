"use strict";

// 로그인 및 로그아웃 버튼 초기화 함수
function initializeLogin() {
  const loginId = document.getElementById('id');
  const loginBtn = document.getElementById('login_button');
  const logoutBtn = document.getElementById('logout_button');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const userId = localStorage.getItem('userId');

  // 로컬 스토리지에서 저장된 ID가 있으면 환영 메시지와 로그아웃 버튼 표시
  if (userId) {
    welcomeMessage.innerText = `${userId}님, 반갑습니다!`;
    if (logoutBtn) logoutBtn.style.display = 'block';
  } else {
    if (logoutBtn) logoutBtn.style.display = 'none';
  }

  // 로그인 함수
  function moveToMain() {
    if (loginId && loginId.value) {
      localStorage.setItem('userId', loginId.value);
      location.replace("./layout.html"); // 메인 페이지로 이동
    } else {
      console.log("아이디가 입력되지 않았습니다.");
    }
  }

  // 로그아웃 함수
  function logout() {
    localStorage.removeItem("userId");
    location.replace("layout.html"); // 로그아웃 후 메인 페이지로 이동
  }

  // 로그인 버튼 이벤트 리스너 추가
  if (loginBtn) loginBtn.addEventListener('click', moveToMain);

  // 로그아웃 버튼 이벤트 리스너 추가
  if (logoutBtn) logoutBtn.addEventListener('click', logout);
}

/* 비밀번호 show/hide 구현 함수 */
function show() {
  const btn = document.getElementById("show_button");
  const password = document.getElementById("password");
  if (btn && password) {
    if (btn.innerText === "show") {
      password.type = "text";
      btn.innerText = "hide";
    } else {
      password.type = "password";
      btn.innerText = "show";
    }
  }
}
