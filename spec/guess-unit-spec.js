'use strict';
var CompareNumber = require('../main/compare-number');
var AnswerGenerate = require('../main/answer-generate');
var Guess = require('../main/guess');

describe('Guess-Unit',function(){
  describe('#result()',function(){

    it('should return 2A2B',function(){
      var answerGernate = new AnswerGenerate();
      spyOn(answerGernate,'generate').and.returnValue('1234');

      var compareNumber = new CompareNumber();
      spyOn(compareNumber,'compare').and.callFake(function(answer,input){

        if(answer === '1234' && input === '1243'){
          return '2A2B';
        }
      });

      var guess =new Guess(compareNumber, answerGernate );

      expect(guess.getResult('1243')).toBe('2A2B');

    });


  });

});
