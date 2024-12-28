/*
types : Unary, binary, ternary

unary - single operand ( increment,decrement)
binary - two operands ( add, sub, mul, ..)
ternary - 3 operands ( conditional operators)

1. Arithmetic operators:

add
sub
mul
division
modulus
exponentiation (power) - 2**3 = 8
increment
decrement

2. Comparison operators

==   (5=="5")     --true
=== (strictly equal)  (5==="5")   --false
!=     (5!="5")   --false
!== (strictly not equal)  (5!=="5")     --true
>
<
>=
<=

3.Logical operators

&&  - logical AND   true && false -- false
||  - logical OR    true||false   --true
!   - logical NOT   !true         --false
*/


/*

(logical AND and logical OR ) are called   --- > SHORT CIRCUIT OPERATORS

reason:

let a= (30<5) && (9>4)    -- first condition fail , then it will not go to second condition , directly output (so short circuit)
console.log(a);

let a= (30>5) || (9<4)    -- first condition true, in OR one true means all TRUE so not check
console.log(a);

*/

//INCREMENT/DECREMENT

/*
let a=5
let b=a++ + --a
let c=++b + b++
a++;
console.log(a)      --> 6
console.log(b)      --> 12
console.log(c)      --> 22
*/


// NOT

/*
let a= true;
!!!!!a;
console.log(a);    --> true   (becoz, not operator not stored in a , if in 2 nd line a=!!!!!a means then op:false )
*/


//BITWISE 

/*
let a= 4 | 3
bitwise:  |, ~, & , !, left shift, right shift
~ - will take complement and ...
*/
