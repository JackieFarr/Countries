const Countries = require("./models/countries.js");
const ResultView = require("./views/result_view.js");
const SelectView = require("./views/select_view.js");


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


const countries = new Countries();
  countries.getData();

const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
    selectView.bindEvents();

const infoDiv = document.querySelector("div#country");
const resultView = new ResultView(infoDiv);
  resultView.bindEvents();
//

});
