export default function () {

  var firstForm = document.querySelector(".form-js");
  var name = document.querySelector(".name-js");
  var telegram = document.querySelector(".telegram-js");
  var email = document.querySelector(".email-js");
  var position = document.querySelector(".position-js");

  var popupForm = document.querySelector(".popup-form");
  var popupName = document.querySelector(".popup-name");
  var popupTelegram = document.querySelector(".popup-telegram");
  var popupEmail = document.querySelector(".popup-email");
  var popupPosition = document.querySelector(".popup-position-js");

  function setSuccessFor(field) {
    field.parentElement.classList.remove("error-border");
    field.nextElementSibling.classList.remove("error");
    field.parentElement.classList.add("success");
  }

  function setName(field) {
    function isName(name) {
      var re = /^[a-zA-Zа-яёЇїІіЄєҐґА-ЯЁ\s\-]+$/;
      return re.test(String(name).toLowerCase());
    }

    var nameValue = field.value.trim();

    if (nameValue === "" || !isName(nameValue)) {
      field.parentElement.classList.add("error-border");
      field.nextElementSibling.classList.add("error");
    } else {
      setSuccessFor(field);
    }
  }

  function setTelegram(field) {
    function isTelegram(telegram) {
      var re = /.*\B@(?=\w{5,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm;
      return re.test(String(telegram).toLowerCase());
    }

    var nameValue = field.value.trim();

    if (nameValue === "" || !isTelegram(nameValue)) {
      field.parentElement.classList.add("error-border");
      field.nextElementSibling.classList.add("error");
    } else {
      setSuccessFor(field);
    }
  }

  function setEmail(field) {
    function isEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    var emailValue = field.value.trim();

    if (emailValue === "" || !isEmail(emailValue)) {
      field.parentElement.classList.add("error-border");
      field.nextElementSibling.classList.add("error");
    } else {
      setSuccessFor(field);
    }
  }

  function getName(fieldName) {
    setName(fieldName);
  }

  function getTelegram(fieldName) {
    setTelegram(fieldName);
  }

  function getEmail(fieldName) {
    setEmail(fieldName);
  }

  function clearForm(name, telegram, email, position) {
    name.value = "";
    telegram.value = "";
    email.value = "";
    position.value = "";
    name.parentElement.classList.remove("success");
    telegram.parentElement.classList.remove("success");
    email.parentElement.classList.remove("success");
    position.parentElement.classList.remove("success");
  }

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var timeH = date.getHours();
  var timeM = date.getMinutes();

  firstForm.addEventListener('keyup', function (event) {
    console.log(event.target.value)
    if (event.target.name === "name") {
      getName(name);
    } else if (event.target.name === "telegram") {
      getTelegram(telegram)
    } else if (event.target.name === "email") {
      getEmail(email)
    } else if (event.target.name === "position") {
      getName(position);
    }
  })

  popupForm.addEventListener('keyup', function (event) {
    if (event.target.name === "name") {
      getName(popupName);
    } else if (event.target.name === "telegram") {
      getTelegram(popupTelegram)
    } else if (event.target.name === "email") {
      getEmail(popupEmail)
    } else if (event.target.name === "position") {
      getName(popupPosition);
    }
  })

  firstForm.addEventListener('submit', function (event) {
    event.preventDefault();
    $(firstForm).find($(".js-input-date")).val("".concat(day, ".").concat(month, ".").concat(year, " / ").concat(timeH, ":").concat(timeM));
    getName(name);
    getName(position);
    getTelegram(telegram);
    getEmail(email);
    var hasErrors = document.querySelector(".form-js .error-border:not(.hidden)");

    if (!hasErrors) {

      $(".loader-wrapper").show();
      $.ajax({
        url: "https://api.apispreadsheets.com/data/Qzdwbuqi9jH5vATv/",
        type: "post",
        data: new FormData(this),
        contentType: false,
        processData: false,
        headers: {
          accessKey: "8fe5bcc5bf8f67999fec3499691bc527",
          secretKey: "f5986da955050e13bafc0cb69961beae"
        },
        success: function success() {
          clearForm(name, telegram, email, position);
          $(".registration-block").hide();
          $(".registration__success").show();
        },
        error: function error() {
          console.error("There was an error :(");
        }
      });
    }
  });
  popupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    getName(popupName);
    getName(popupPosition);
    getTelegram(popupTelegram);
    getEmail(popupEmail);
    $(popupForm).find($(".js-input-date-popup")).val("".concat(day, ".").concat(month, ".").concat(year, " / ").concat(timeH, ":").concat(timeM));
    var hasErrors = document.querySelector(".popup-form .error-border:not(.hidden)");

    if (!hasErrors) {
      $(".popup-loader-wrapper").show();
      $.ajax({
        url: "https://api.apispreadsheets.com/data/Qzdwbuqi9jH5vATv/",
        type: "post",
        data: new FormData(this),
        contentType: false,
        processData: false,
        headers: {
          accessKey: "8fe5bcc5bf8f67999fec3499691bc527",
          secretKey: "f5986da955050e13bafc0cb69961beae"
        },
        success: function success() {
          clearForm(popupName, popupTelegram, popupEmail, popupPosition);
          $(".popup-form").hide();
          $(".popup-loader-wrapper").hide();
          $(".popup-registration__success").show();
          $(".registration-block").hide();
          $(".registration__success").show();
        },
        error: function error() {
          console.error("There was an error :(");
        }
      });
    }
  });
}
