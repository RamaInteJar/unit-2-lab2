const express = require("express");

const app = express();

//GREETINGS
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name} ! it is so great to see you`);
});


//TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req, res) => {
  // evoking the total  from the request parameters
  const total = parseInt(req.params.total);
  // evoking the tipPercentage from the request parameters
  const tipPercentage = parseInt(req.params.tipPercentage);
  //Calculate the total tip amount
  const tipAmount = ((total * tipPercentage) / 100).toFixed(2);
  //Send the tip amount as response
  res.send(`Your tip amount is: ${tipAmount}`);
});

//MAGIC 8 BALL
const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Define the route '/magic/:question'
app.get("/magic/:question", (req, res) => {
  // Extract the question from the URL
  const question = req.params.question;

  // Get a random Magic 8 ball response from the array
  const randomMagic8Response =
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

  // Send the question and the Magic 8 ball response as a response
  res.send(
    `<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomMagic8Response}</h1>`
  );
});


//FIBONACCI

app.get("/fibonacci/:number", (req, res) => {
  const number = req.params.number;

  function getfibonacci(number) {
    number === 0 ? 0 : 1;
    return getfibonacci(number - 1) + getfibonacci(number - 2);
  }

  function displayFibNum() {
    const fibonacciNumbers = [];
    for (let i = 0; i < 9; i++) {
      fibonacciNumbers.push(getfibonacci(i));
    }
    return fibonacciNumbers;
  }
  const firstNineFibonacciNumbers = displayFibNum();

  const randomFibNumbers = firstNineFibonacciNumbers[Math.floor(Math.random() * firstNineFibonacciNumbers.length)]

  number === randomFibNumbers ? res.send('Very good. It is Fibonacci') : res.send("I can tell this is not a fibonacci number.")
  
});

app.listen(3000, () => {
  console.log("3000 are you listening?");
});
