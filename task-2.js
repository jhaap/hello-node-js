var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input a number:", function(answer) {
  console.log(answer*2);

  rl.close();
});