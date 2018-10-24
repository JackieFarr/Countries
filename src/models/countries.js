const PubSub = require("../helpers/pub_sub.js")

const RequestHelper = require("../helpers/request_helper.js")

const Countries = function() {
  this.input = null;
};

Countries.prototype.getData = function () {
  const request = new RequestHelper("https://restcountries.eu/rest/v2/all")
  request.get((countriesData) => {
    this.input = countriesData
    console.log(countriesData[0].name);
    PubSub.publish("Countries:countries-loaded", this.input);

  PubSub.subscribe("SelectView:change", (event) => {
    const selectedIndex = event.detail;
    this.publishInputDetail(selectedIndex)
    })
  })
};

Countries.prototype.publishInputDetail = function (countryIndex){
  const selectedCountry = this.input[countryIndex];
  PubSub.publish("Countries:selected-country-ready", selectedCountry)
};

module.exports = Countries;
