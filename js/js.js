document.getElementById("enter-button").onclick = function () {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
  document.getElementById("video-background").style.display = "block";

  // Включаем звук при нажатии кнопки
  const video = document.getElementById("background-video");
  video.muted = false;
  video.play().catch(error => {
    console.log("Автозапуск с включенным звуком заблокирован браузером.");
  });
};

// Код для показа окна при нажатии ПКМ или F12
document.addEventListener("DOMContentLoaded", function () {
  let alertVisible = false;
  const overlay = document.createElement("div");
  overlay.style = `
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 20px 40px;
    border-radius: 8px;
    color: white;
    font-size: 20px;
    text-align: center;
    backdrop-filter: blur(5px);
    transition: opacity 0.3s;
    z-index: 9999;
  `;
  overlay.textContent = "Какова хуя инспектируеш?";
  overlay.style.opacity = "0";
  overlay.style.display = "none";
  document.body.appendChild(overlay);

  function showAlert() {
    if (alertVisible) return;
    alertVisible = true;
    overlay.style.display = "block";
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
        alertVisible = false;
      }, 300);
    }, 2000);
  }

  // Обработчик для ПКМ
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showAlert();
  });

  // Обработчик для F12
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12") {
      e.preventDefault();
      showAlert();
    }
  });
});
