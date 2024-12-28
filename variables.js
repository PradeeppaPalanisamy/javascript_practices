/*
var a=5
console.log(a)  - print 5  --globally scoped

let a=5
console.log(a) -print 5    --locally scopped
*/

/*
function a()
{
    let x=5
    if(true)
    {
        console.log(x)   -print 5
    }
    console.log(x)       -print 5
}
a()
*/

/*
function a()
{
    if(true)
    {
        let x=5        
        console.log(x)   - print 5
    }
    console.log(x)  -- error (wuthin if block only x valued)
}
a()
*/

/*
console.log(x)
var x=5   --op: undefined

console.log(x)
let x=5   --op: error
*/

/*
let a=5
let a=3  --throws error (we can reinitialize like a=3, but cant redeclare like let a=3)
*/

/*
const a=5
a=3        -- error
*/

