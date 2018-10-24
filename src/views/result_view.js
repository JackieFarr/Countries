const PubSub = require("../helpers/pub_sub.js")

const ResultView = function (container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe("Countries:selected-country-ready", (event) => {
    const country = event.detail;
    this.render(country);
  });

};

ResultView.prototype.render = function(country) {
  this.container.innerHTML = '';

  const heading = this.createHeading(country);
  const region = this.createRegion(country);
  const flag = this.createImage(country);

  this.container.appendChild(heading);
  this.container.appendChild(region);
  this.container.appendChild(flag);
};


ResultView.prototype.createHeading = function(country){
  const heading = document.createElement('h2');
  heading.textContent = country.name;
  return heading;
}

ResultView.prototype.createImage = function (country){
  const flag = document.createElement('img');
  flag.classList.add('large');
  flag.src = country.flag;
  return flag;
}

ResultView.prototype.createRegion = function (country){
  const region = document.createElement('p')
  region.textContent = country.region;
  return region;
}
  // const p = document.createElement('p');
  // p.textContent = countries;
  // this.container.appendChild(p);
// };

module.exports = ResultView;
