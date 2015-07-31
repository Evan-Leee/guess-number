'use strict';
 var AnswerGenerate = require('../main/answer-generate');

  describe('AnswerGenerate',function(){

     describe('#generate()',function(){
        var answerGenerate,number;

        beforeEach(function(){
          var callCount = 0;
          spyOn(Math,'random').and.callFake(function(){
             var randomNumbers = [0.1,0.1,0.2,0.3,0.4];
             return randomNumbers[callCount++];
          });

          answerGenerate = new AnswerGenerate(Math);
          number = answerGenerate.generate() ;


         });

        it('can return a number which length is 4',function() {
           expect(number.length).toBe(4);
        });

        it('can return a number',function() {
            var type = typeof (number - 0 ) ;
            expect(type).toBe('number')

        });

        it('can return a unrepeat number',function(){
          var judge = 'repeat';

          if( number.charAt(0) !== number.charAt(1) &&
              number.charAt(0) !== number.charAt(2) &&
              number.charAt(0) !== number.charAt(3) &&
              number.charAt(1) !== number.charAt(2) &&
              number.charAt(1) !== number.charAt(3) &&
              number.charAt(2) !== number.charAt(3)
          ){
            judge = 'unrepeat';
          }

          expect(judge).toBe('unrepeat');

        });

       it('can return a random number',function(){

         expect(number).toBe('1234');
       });
     });
  });
