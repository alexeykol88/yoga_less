window.addEventListener("DOMContentLoaded", function() {

  'use strict';
  
  const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        slider = require('./modules/slider'),
        modal = require('./modules/modal'),
        form = require('./modules/form'),
        calc = require('./modules/calc');

  tabs();
  timer();
  slider();
  modal();
  form();
  calc();
});