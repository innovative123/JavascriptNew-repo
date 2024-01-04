function stringBasic(){
      console.log("--------------Step 1---------------");
    var DreamCompany = "Infosys";
    console.log('My Dream Company is', DreamCompany);

 console.log("--------------Step 2---------------");
    var hobby1 = "Cycling";
    var hobby2 = "Swimming";
    var hobby3 = "Playing Cricket";
    console.log('My Hobbies are:',hobby1,',',hobby2,',',hobby3)

    var totalhobbies = hobby1.length + hobby2.length + hobby3.length;
    console.log('Total Number of Charater in hobby1, hobby2, hobby3 are :',totalhobbies);

}
stringBasic()

console.log(" ");

Ar
console.log("-------------------Assign 2----------------");
function stringHandsOn(){
   
   var About = "   Hey you are doing good, keep it up   ";
   console.log('1.The String is:',About);
   console.log('2.Length of the String:',About.length);
   var str = About.trim();
   console.log('3.After Removing Extra Spaces:',str,'&','Its Length is:',str.length);
   var dog = About.length - str.length;
   console.log('4.Total number extra spaces are:',dog);
   console.log('5.The First Character is:',str.charAt(0),',','The Last Character is:',str.charAt(str.length-1));
   var s = str.split(" ");
   
   console.log("6.Total Number of Words in the String are:",s.length);

   var index = About.indexOf("good");
   console.log('7.The index of Word "good" in the string is:',index);
   console.log('8.Substring Starting:',str.substring(22, 40),'&','Slice Starting:',str.slice(22, 40));
   console.log('9.String End with word "up":',str.includes("up"));
   console.log('10.String Start with word "Hey":',str.includes("Hey"));



}
stringHandsOn()