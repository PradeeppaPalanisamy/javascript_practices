//CALLBACK

/*
function attendance(cb1)
{
    console.log("Attendence said");
    cb1();
}
function lunch(cb2)
{
    console.log("Lunch completed");
    cb2();
}
function home()
{
    console.log("Went home");
}
*/


// CALLBACK HELL

// attendance(()=>{
//        lunch(()=>{
//         home(()=>{
//             console.log("day completed");
//         })
//        })
// })


// ASYNC/AWAIT & PROMISE

/*
function attendance()
{
    return new Promise((resolve,reject)=> {
        let a=true;
        if(a)
            resolve("Marked");
        else
            reject("Not marked");
    })
}
function lunch()
{
    return new Promise((resolve,reject)=> {
        let b=false;
        if(b)
            resolve("Ate");
        else
            reject("Not ate");
    })
}
function home()
{
    return new Promise((resolve,reject)=> {
        let c=true;
        if(c)
            resolve("went");
        else
            reject("Not went");
    })
}

//FOR PROMISE

// attendance().then((value)=>{console.log(value);return lunch()})
//             .then((value)=>{console.log(value);return home()})
//             .then((value)=>{console.log(value);})
//             .catch((error)=>{console.error(error);})

//FOR ASYNC

// async function final()
// {
//     try{
//         let x= await attendance();
//         console.log(x);
//         let y= await lunch();
//         console.log(y);
//         let z= await home();
//         console.log(z);
//     }
//     catch(error)
//     {
//         console.error(error);
//     }
// }
// final();
*/

//EXERCISE - CALLBACK

// function one(a,cb)
// {
//     console.log(`File ${a} is being processed`);
//     setTimeout(()=>{
//         console.log("File "+a+" got downloaded");
//         cb();
//     },1500)
    
    
// }
// function two()
// {
//     console.log("Download completed");
// }
// one("abc",two);

// DATE VALIDITY (IF-ELSE)

let yr=2016;
let month=4;
let date=30;

if(month==2)
{
    if(date>0 && date<=28)
        console.log("valid");
    else if(date==29)
    {
        if((yr%4==0 && yr%100!=0) || yr%400==0)
            console.log("Valid");
        else
            console.log("Invalid");
    }
    else
        console.log("Invalid");
}
else
{
if(month>0 && month<=7)
{
    if(month%2==0 && month!=2)
    {
        if(date>0 && date<=30)
            console.log("Valid");
        else
            console.log("Invalid");
    }
    else{
        if(date>0 && date<=31)
            console.log("Valid");
        else
            console.log("Invalid");
    }
}
else if(month>=8 && month<=12)
{
    if(month%2==0)
    {
        if(date>0 && date<=31)
            console.log("Valid");
        else
            console.log("Invalid");
    }
    else{
        if(date>0 && date<31)
            console.log("valid");
        else
            console.log("Invalid");
    } 
}
}


