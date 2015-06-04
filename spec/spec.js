var code = require('./../grader.js');


//GRADER

describe('#average()',function(){
  it('Takes in arguments and return the results',function(){
    expect(code.letterGrader([98])).toEqual('A');
    expect(code.letterGRader([84])).toEqual('B');
  });
});





//AVERAGE
describe('#average()',function(){
  it('Takes in arguments and return the results',function(){
    expect(code.averageScore([90,95,87,60])).toEqual(83);
  });
});


//MEDIAN
describe('#median()',function(){
  it('Takes in arguments and return the results',function(){
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
  });
});


//MODE

describe('#mode()', function(){
  it('Takes in argument and returns the results', function(){
    expect(code.modeScore([82,92,75,91,92,89,95,100,86])).toEqual(92);
  });
});
