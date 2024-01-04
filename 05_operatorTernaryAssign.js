console.log("-------------------Assignment 1------------------");
console.log("");
console.log("-----------------------Step 1--------------------");
function maleMarriageEligibility(Gender,Age, BoyName){
    
  var result = Gender == "Male" && Age >= 21 
  ? `Hey ${BoyName} you are eligible for Marriage`
  : `Hey ${BoyName} you are not eligible for Marriages`
  
  console.log(result);

}

maleMarriageEligibility("Male" ,25, "Billgates");
maleMarriageEligibility("Male",17,"Steve Jobs");



console.log("-----------------------Step 2--------------------");


function femaleMarriageEligibility(Gender,Age, GirlName){
    
  var result = Gender == "Female" && Age >= 18 
  ? `Hey ${GirlName} you are eligible for Marriage`
  : `Hey ${GirlName} you are not eligible for Marriages`;
  
  console.log(result);
}

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");

console.log("");
console.log("---------------------Asignment 2-----------------");
console.log("");
console.log("-----------------------Step 1---------------------");

var isEvenOrOdd = function (num) {
    var returnValue = "";
   
     if (num % 2 == 0) {
   
       returnValue = "EVEN";
   
     } else {
   
       returnValue = "ODD";
   
     }
   
     return returnValue;
    };
   var result = isEvenOrOdd(45);
   console.log(`45 Given number is ${result}`);
   
   var result = isEvenOrOdd(70); 
   console.log(`70 Given number is ${result}`);
   
   var result = isEvenOrOdd(67); 
   console.log(`67 Given number is ${result}`);
   
   var result = isEvenOrOdd(98); 
   console.log(`98 Given number is ${result}`);


console.log("");
console.log("-------------------------Step 2----------------------");
var isEligibleforVote = function(age)
{
  var returnType ="";
  {
      if(age >= 18)
      {
            returnType = "Eligible for Vote";
      }
      else
      {
         returnType = "Not Eligible for Vote";

      }
    return  returnType;
  }

}
var result = isEligibleforVote(18)
console.log(`18 is ${result}`);
   
var result = isEligibleforVote(20)
console.log(`20 is ${result}`);

var result = isEligibleforVote(17)
console.log(`17 is ${result}`);

var result = isEligibleforVote(40)
console.log(`40 is ${result}`);
   

console.log(" ");
console.log("--------------------Step 3----------------------");


var lengthofstring = function(character)
{
     if(character.length > 10){
      console.log(`${character}, contain more than 10 character`);
     }
     else{
      console.log(`${character}, does not contain more than 10 character`);
     }
}
lengthofstring("JavaScript-ES6");



console.log(" ");
console.log("-----------------------Step 4----------------------");

var checkStart = function(word){
  
  if(word.startsWith("Java")){
    console.log(`Given Word - ${word}, starts with "Java" `);
  }
  else{
    console.log(`Given Word - ${word}, does not start with "Java" `);
  }
}
checkStart("JavaScript Language");
/*checkStart("UI Developer");*/
