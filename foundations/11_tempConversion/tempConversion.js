const convertToCelsius = function(temp) {
  celc = (temp - 32) * (5/9);

  if (celc == 0) {
    return 0;
  }

  return celc.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  fahr = (temp * (9/5) + 32);

  if (fahr == 0) {
    return 0;
  }
  
  return fahr.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
