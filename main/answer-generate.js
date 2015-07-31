'use strict';

function AnswerGenerate(math){
  this.math= math;

}

AnswerGenerate.prototype.generate = function () {
  var number = '';
  while (number.length < 4) {
    var num = this.math.floor(this.math.random() * 10);

       if(number.indexOf(num) === -1){
         number += num;
        }
  }
return number;
}


module.exports = AnswerGenerate;
