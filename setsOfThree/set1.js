import cities from '../resources/cities.json';
const exports = module.exports = {};

/************************
  Exercise 1: Get the year you were born
  This function should take in your age and return
  The year you are born
************************/

exports.returnWhatYearYouWereBorn = function(age){
  let date = new Date();
  let birthYear = date.getFullYear();
  return birthYear - age;
};


/************************
  Exercise 2:
  You should sort through the cities data set and return all the cities that begin with the letter c
  this operation must be case insensitive, bonus use <code>.filter</code>
************************/
//working on this exercise

exports.returnOnlyCitiesThatStartWith = function(theLetter){
  var arr = [];
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].city.slice(0, 1).toLowerCase() === theLetter.toLowerCase()) {
      arr.push(cities[i].city)
    }
  }
  console.log(arr);
  return arr;
};



exports.returnOnlyCitiesThatStartWith("c");

/************************
  Exercise 3:
  You need to find all the prime numbers between 2 and 2,000,000 then sum then together
  and return them...
************************/

exports.returnSumOfPrimes = function(input) {
    return input;
};
