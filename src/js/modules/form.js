function form() {
    
  const form = document.querySelector(".main-form"),
        formBottom = document.getElementById("form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

  let message = {
    loading: "Загрузка...",
    succes: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так"
  };

  statusMessage.classList.add("status");

  function sendForm(elem) {
    elem.addEventListener("submit", function(event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          request.open("POST", "server.php");
          request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded;"
          );

          request.addEventListener("readystatechange", function() {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          request.send(data);
        });
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }
      }

      postData(formData)
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (statusMessage.innerHTML = message.succes))
        .catch(() => (statusMessage.innerHTML = message.failure))
        .then(clearInput);
    });
  }
  sendForm(form);
  sendForm(formBottom);
}

module.exports = form;
