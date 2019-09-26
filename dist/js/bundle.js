/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {

    const persons = document.querySelectorAll('.counter-block-input')[0],
          restDays = document.querySelectorAll('.counter-block-input')[1],
          place = document.getElementById('select'),
          totalValue = document.getElementById('total');
    
    let personsSum = 0,
         daysSum = 0, 
         total = 0;
    
    totalValue.innerHTML = 0;
      
    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
    
        if(restDays.value == '' || this.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });
    
    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
    
        if(persons.value == '' || this.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });
    
    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    
  const more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        descriptionBtn = document.querySelectorAll(".description-btn");

  function showModal() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }

  more.addEventListener("click", function() {
    let show = showModal.bind(this);
    show();
  });

  descriptionBtn.forEach(function(item) {
    item.addEventListener("click", function() {
      let show = showModal.bind(this);
      show();
    });
  });

  close.addEventListener("click", function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
}

module.exports =  modal;


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {

  const slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(index) {

    if (index > slides.length) {
      slideIndex = 1;
    }
    if (index < 1) {
      slideIndex = slides.length;
    }
   
    slides.forEach((item) => {

      item.style.display = 'none';

      dots.forEach((item) => {
        item.classList.remove('dot-active');
      });

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
    });
  }

  function changeSlide(index) {
    showSlides(slideIndex += index);
  }

  function currentSlide(index) {
    showSlides(slideIndex = index);
  }

  prev.addEventListener('click', () => {
    changeSlide(-1);
  });

  next.addEventListener('click', () => {
    changeSlide(1);
  });

  dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') 
      && event.target == dots[i-1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

  const tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");
  
  hideTabContent = a => {
    for (i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  };
  
  hideTabContent(1);
  
  showTabContent = b => {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  };
  
  info.addEventListener("click", function(event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;




/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {

    const deadline = "2020-03-12";

    getRemainTime = time => {
            let t = Date.parse(time) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor(t / 1000 / 60 / 60);
        
            if (t <= 0) {
              seconds = 0;
              minutes = 0;
              hours = 0;
            }
            return {
              total: t,
              seconds: seconds,
              minutes: minutes,
              hours: hours
            };
          };
        
    setClock = (id, endtime) => {
        const timer = document.getElementById(id),
              hours = timer.querySelector(".hours"),
              minutes = timer.querySelector(".minutes"),
              seconds = timer.querySelector(".seconds"),
              timeInterval = setInterval(changeTimer, 1000);
        
            function changeTimer() {
              let t = getRemainTime(endtime);
        
              if (t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
              } else {
                seconds.textContent = t.seconds;
              }
        
              if (t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
              } else {
                minutes.textContent = t.minutes;
              }
        
              if (t.hours < 10) {
                hours.textContent = "0" + t.hours;
              } else {
                hours.textContent = t.hours;
              }
        
              if (t.total <= 0) {
                clearInterval(timeInterval);
              }
            }
          };
        
    setClock("timer", deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", function() {

  'use strict';
  
  const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
        form = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js"),
        calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");

  tabs();
  timer();
  slider();
  modal();
  form();
  calc();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map