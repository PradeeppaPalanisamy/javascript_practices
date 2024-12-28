// IF ELSE

/*
let a=6;
if(a%5 ==0 && a%3 == 0)
{
    console.log("Hi Hello");
}
else if(a%5 == 0 && a%3!=0)
{
    console.log("Hello");
}
else if(a%3 == 0 && a%5 !=0)
{
    console.log("Hi");
}
    */ 

// It can be easily done as 

/*
let a=15;
if(a%3==0)
{
    console.log("Hi");
}
if(a%5==0)
{
    console.log("Hello");
}
 */

// SWITCH

/*
let ch="hi";
switch(ch)
{
    case "hi":
        console.log("Hi");
        break;
    case "hello":
        console.log("Hello");
        break;
    default:
        console.log("Welcome");
        break;
}
        */

// LOOPS  - FOR , WHILE , DO-WHILE

//FOR:

/*
for(;;)
{
    console.log("Hi");              // --op: Hi print for infinite times
}
*/


// let a=1;
// for(console.log('a');a<=3;console.log('b'))            // --op: acbcbcb
// {
//     console.log('c');
//     a++;
// }

//Arrow function

// let addition=(a,b)=>{            // without return
//     console.log(a+b);
// }
// addition(5,5);


// let addition=(a,b)=>                // with return
//     {return (a+b);}
// console.log(addition(10,10));

// let ob={                           // spread operator using object
//     name:"Anu",
//     age:20
// }
// let ob2={...ob};
// console.log(ob2);


// let ob={
//     name: "Anu",
//     age:20,
//     phone:123                 
// }
// let {name,...a}=ob;                 // rest operator using object, name should be same variable else undefined
// console.log(name);
// console.log(a);
