module.exports = {

// Grader
//
// Write a function letterGrader which takes a test score and returns the equivalent letter grade.
//
// A: 90-100
// B: 80-99
// C: 70-79
// D: 60-69
// F: 0-59
// letterGrader(98);
//=> 'A'


letterGrader: function(a){
   if(a >= 90){
      return 'A';
    }else if(a<= 89 && a>= 80){
      return 'B';
    }else if (a<= 79 && a>= 70){
      return 'C';
    }else if (a<= 69 && a>= 60){
      return 'D';
    }else{
      return 'F';
    }
  }




// Average
//
// Write a function 'averageScore` which takes an array of test scores and returns the average score.
//
// averageScore([90, 95, 87, 60]);
// //=> 83

averageScore: function(arr){
var sum = 0;
for( var i = 0; i < arr.length; i++) {
     sum += arr[i];
 }
var average = sum / arr.length;
return average;
}
};



//
// Median
//
// Write a function medianScore which takes an array of test scores and calculates the median score. The median is the middle value. If there are an even number of scores, calculate the average of the middle two scores.
//
// medianScore([52,80,80,86,94])
// => 80

medianScore: function(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}
};




// MODE
//
// Write a function modeScore which takes an array of test scores and calculates the mode score. The mode is the value that appears most often.
//
// modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
// //=> 92


modeScore: function(values) {
    var mode = {};
    var max = 0, count = 0;
    values.forEach(function(e) {
        if (mode[e]) { mode[e]++; }
        else { mode[e] = 1; }
        if (count<mode[e]) {
            max = e;
            count = mode[e];
        }
    });
    return max;
}
};
