const readline = require("readline");

const readlineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineInstance.question("Please, enter degrees Celsius: ", answer => {
  const answerParts = answer.split(",");
  const restoredAnswer = answerParts.join(".");
  const celsiusValue = Number(restoredAnswer);

  if (celsiusValue || celsiusValue === 0) {
    const vahrenheitValue = celsiusValue * 1.8 + 32;
    console.log("Fahrenheit value is ", vahrenheitValue);
  } else {
    console.error("The entered value must be a number");
  }

  readlineInstance.close();
});
