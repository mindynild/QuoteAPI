const express = require('express');
const app = express();


const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const lengthQuotes = quotes.length;

app.get('/api/quotes/random', (req, res, next) => {
  const random = getRandomInt(lengthQuotes);
  //console.log(random);
  const randomQuote = quotes[random].quote;
  //console.log(randomQuote);
  res.status(400).send({
    quote: randomQuote
  });
  }
);
