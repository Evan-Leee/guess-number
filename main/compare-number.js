  'use strict';
  var _ =require('lodash');

  function CompareNumber(){

  }

  CompareNumber.prototype.compare = function (answer,input){
    var result = '';
    var A = 0;
    var B = 0;

    for (var i = 0; i < answer.length; i++) {


      // for(var k = 0; k < input.length; k++) {
             
      //    if(answer.charAt(i) === input.charAt(k)) {
      //       if( i === k) {
      //          A++;
      //       }else{
      //          B++;
      //       }
      //    }
     }
    }
    result = A + 'A' + B + 'B';
    return result;
  }

  module.exports = CompareNumber;
