/*

number  - int,float
string
boolean
bigint  - longint

*/

/*
let a= "str"                    -- take as string automatically
let a=12345576553657            -- automatically take as number(integer)
let a=12345576553657n   or let a= BigInt("1235466768")          -- now take as BigInt
*/



//OBJECTS  - 2 ways to declare


//1st type of OBJECT DECLARATION


/*
let student1 = {
    name: "anu",
    id: 20,
    isStudent: true
}
console.log(student1);         --to print object
*/

//nested object

/*
let st1={
    name:["abi","anu"],
    age:20,
    isStudent:true,
    address: {
        state : "Tn",
        city : "Namakkal"
    },
    hello : function()
    {
        console.log("Hello");
        console.log("Hi");
    }
}
console.log(st1)

console.log(st1.address)

//console.log(st1.name)      OR      console.log(st1["name"])

//st1.hello()                -- to print function inside object

//console.log(st1.name[0])     --to print single name

//console.log(st1.address.state)    -- print object inside object
*/

//2nd way - OBJECT DECLARATION

/*
let st1 = new Object();
st1.name="abi";
st1.age=20;
st1.hello = function(){             // function inside object
    console.log("Hi");
}
console.log(st1);
st1.hello();
*/

