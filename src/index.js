const uniqueRandomArray = require('unique-random-array'); 
const starwarsNames = require('./starwars-names.json');

module.exports = {
  all: starwarsNames,
  random: uniqueRandomArray(starwarsNames),
};
