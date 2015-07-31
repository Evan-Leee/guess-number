'use strict';

var CompareNumber = require('../main/compare-number');
var AnswerGenerate = require('../main/answer-generate');
var Guess = require('../main/guess');


describe('Guess-Integration',function (){
  describe('#getResult()',function(){
    var guess;
    beforeEach(function(){

      var count = 0;

      spyOn(Math,'random').and.callFake(function(){
        var numbers = [0.1,0.1,0.2,0.3,0.4];
        return numbers[count++];
      });

      var answerGenerate = new AnswerGenerate(Math);
      var compareNumber = new CompareNumber();
      guess = new Guess(compareNumber,answerGenerate);

    });

    it('can return 0A0B',function(){
        expect(guess.getResult('5678')).toBe('0A0B');
    });

    it('can return 4A0B',function(){
        expect(guess.getResult('1234')).toBe('4A0B');
    });

    it('can return 0A4B',function(){
        expect(guess.getResult('4321')).toBe('0A4B');
    });

  });
});
