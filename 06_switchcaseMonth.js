
function monthOfYear(MonNum){

switch(MonNum)
{
    case 1:

        console.log(` Month Number ${MonNum} ==> January`);

        break;

    case 2:
        console.log(` Month Number ${MonNum} ==> Febuary`);

        break;

    case 3:
        console.log(` Month Number ${MonNum} ==> March `);

        break;

    case 4:
        console.log(` Month Number ${MonNum} ==> April`);
    
            break;  
    case 5:
        console.log(` Month Number ${MonNum} ==> May`);
    
        break;
    case 6:
        console.log(` Month Number ${MonNum} ==> June`);
    
        break;
    case 7:
        console.log(` Month Number ${MonNum} ==> April`);
    
        break;
    case 8:
        console.log(` Month Number ${MonNum} ==> April`);
    
        break;
    case 7:
        console.log(` Month Number ${MonNum} ==> July`);
    
        break;  
    case 8:
        console.log(` Month Number ${MonNum} ==> August`);
    
        break;
    case 9:
        console.log(` Month Number ${MonNum} ==> September`);
    
        break;
    case 10:
        console.log(` Month Number ${MonNum} ==> October`);
    
        break;
    case 11:    
        console.log(` Month Number ${MonNum} ==> November`);
    
        break; 
    case 12:
        console.log(` Month Number ${MonNum} ==> December`);
    
        break;

    default:

        console.log(` Invalid Input --> Month Number "${MonNum}"`);

        break;                           
}
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);