const readline = require("readline");

const readlineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = readlineInstance;
