const readlineInstance = require("../utils/readline");
const covertCelsiusToFahrenheit = require("../utils/convertDegrees");
const showDegrees = require("../utils/showDegrees");
const showError = require("../utils/showError");
const QUESTION_CELSIUS = require("../constants/questions");

const startConverter = () => {
  readlineInstance.question(QUESTION_CELSIUS, answer => {
    const celsiusValue = Number(answer);
    const vahrenheitValue = covertCelsiusToFahrenheit(answer);

    celsiusValue || celsiusValue === 0
      ? showDegrees("Fahrenheit", vahrenheitValue)
      : showError();

    readlineInstance.close();
  });
};

module.exports = startConverter;
