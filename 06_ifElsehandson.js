
var isEvenOrOdd = function (num) {
   var returnValue = "";
  
    if (num % 2 == 0) {
  
      returnValue = "EVEN";
  
    } else {
  
      returnValue = "ODD";
  
    }
  
    return returnValue;
   };
  var result = isEvenOrOdd(456);
  console.log(`23 Given number is ${result}`);
  
  var result = isEvenOrOdd(70); 
  console.log(`30 Given number is ${result}`);
  
  var result = isEvenOrOdd(67); 
  console.log(`30 Given number is ${result}`);
  
  var result = isEvenOrOdd(98); 
  console.log(`30 Given number is ${result}`);
  
  
  var e = 5;
  
for(let index = 1 ; index <= 10; index ++)
{
    
    console.log(e * index);
}