'use strict';


function Guess(compareNumber,answerGernate){
    this.compareNumber = compareNumber;
    this.answerGenerate = answerGernate;
}

Guess.prototype.getResult = function(input){

  var number = this.answerGenerate.generate();

  return this.compareNumber.compare(number,input);

}

module.exports = Guess;
