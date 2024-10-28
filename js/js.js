document.addEventListener("DOMContentLoaded", function () {
  let isMessageVisible = false; // Отслеживание состояния окна

  // Функция для отображения сообщения
  function showInspectMessage() {
    if (isMessageVisible) return; // Прекращаем, если окно уже показано

    const messageBox = document.getElementById("inspect-message");
    isMessageVisible = true; // Окно отображено
    messageBox.classList.add("show");

    setTimeout(() => {
      messageBox.classList.remove("show");
      isMessageVisible = false; // Окно скрыто
    }, 2000); // Сообщение исчезает через 2 секунды
  }

  // Отключение контекстного меню правой кнопки мыши
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    showInspectMessage();
  });

  // Отключение клавиши F12
  document.addEventListener("keydown", function (event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
      event.preventDefault();
      showInspectMessage();
    }
  });
});
