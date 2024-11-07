// 특정 페이지의 article 파일을 로드하는 함수
function loadArticle(page) {
  const articleContainer = document.getElementById("article");

  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      articleContainer.innerHTML = data; // 불러온 콘텐츠를 article 컨테이너에 삽입
      initializeLogin(); // 페이지 로드 후 로그인/로그아웃 버튼 초기화
    })
    .catch((error) => console.error("Error loading article:", error));
}

  // 메뉴 항목에 클릭 이벤트 추가
  document.addEventListener("DOMContentLoaded", () => {
    // 초기 로드할 페이지 설정
    loadArticle("index");

    // Main 클릭 시 index.html 로드
    document.querySelector('a[href="index.html"]').addEventListener("click", (event) => {
        event.preventDefault(); // 기본 링크 이동 막기
        loadArticle("index"); // index.html의 콘텐츠 로드
      });
    
    // Number Game 클릭 시 1.html 로드
    document.querySelector('a[href="1.html"]').addEventListener("click", (event) => {
      event.preventDefault(); // 기본 링크 이동 막기
      loadArticle("1"); // 1.html의 콘텐츠 로드
    });
  
    // MeRong 클릭 시 2.html 로드
    document.querySelector('a[href="2.html"]').addEventListener("click", (event) => {
      event.preventDefault();
      loadArticle("2");
    });
  
    // Login 클릭 시 3.html 로드
    document.querySelector('a[href="3.html"]').addEventListener("click", (event) => {
      event.preventDefault();
      loadArticle("3");
    });
  });
  
  // 초기 로드할 페이지 설정 (예: index.html의 콘텐츠 로드)
  loadArticle("index");
  