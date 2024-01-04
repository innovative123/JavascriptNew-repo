

console.log(" ");
var marriageeligibility = function(gender, age)
{
    var gender;
    
if(gender == "Male" && age >= 21)
    {
        console.log(`This ${gender} is eligible for marriage whoes age is ${age}`);
    }
    else 
    if(gender == "Female" && age >= 18)
    {
        console.log(`This ${gender} is eligible for marriage whoes age is ${age}`);
    }
    else 
    if (gender == "Others" && age > 15)
    {
        console.log(`This ${gender} is not eligible for marriage whoes age is ${age}`);
    }
    else
    {
        console.log(`This ${gender} is not eligible for marriage whoes age is ${age}`);
    }


}
marriageeligibility("Male", 17);
marriageeligibility("Male", 25);
marriageeligibility("Female", 28);
marriageeligibility("Female", 16);
marriageeligibility("Others", 35);
marriageeligibility("Others", 41);



