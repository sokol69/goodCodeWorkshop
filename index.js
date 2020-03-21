const readline = require("readline");

const readlineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineInstance.question("Please, enter degrees: ", answer => {
  const trimedAnswer = answer.replace(/\s+/g, " ").trim();
  const answerParts = trimedAnswer.split(" ");
  const answerNumPart = answerParts[0].split(",");
  const restoredNumPart = answerNumPart.join(".");
  const answerValue = parseFloat(restoredNumPart);

  if (answerValue || answerValue === 0) {
    const answerStrPart = answerParts[1];

    if (answerStrPart) {
      const typeOfDegrees = answerStrPart.toLowerCase();

      if (typeOfDegrees === "c") {
        const fahrenheitValue = answerValue * 1.8 + 32;
        const kelvinValue = answerValue + 273.15;
        console.log(fahrenheitValue, "F");
        console.log(kelvinValue, "K");
      } else if (typeOfDegrees === "f") {
        const celciusValue = (answerValue - 32) / 1.8;
        const kelvinValue = celciusValue + 273.15;
        console.log(celciusValue, "C");
        console.log(kelvinValue, "K");
      } else if (typeOfDegrees === "k") {
        const celciusValue = (answerValue - 32) / 1.8;
        const fahrenheitValue = answerValue * 1.8 + 32;
        console.log(celciusValue, "C");
        console.log(fahrenheitValue, "F");
      } else {
        console.error("You entered unknown type of degrees");
      }
    } else {
      console.error("You didn't enter type of degrees");
    }
  } else {
    console.error("You entered an invalid value");
  }

  readlineInstance.close();
});
