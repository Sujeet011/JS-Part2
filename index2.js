//  Basic Coercion Check

function checkCoercion(a, b) {
    console.log("Loose Equality (==):", a == b);  
    console.log("Strict Equality (===):", a === b);
  }

checkCoercion("5", 5);           
checkCoercion(false, 0);     
checkCoercion(null, undefined);

console.log("---------------------------------");

//Coercion in Arithmetic

function coerceInArithmetic(a, b) {
    console.log( a + b);       
    console.log( a - b);   
    console.log( a * b); 
    console.log( a / b);        
  }

coerceInArithmetic("5", 3);      
coerceInArithmetic(10, "2");     
coerceInArithmetic("abc", 3);

console.log("--------------------------------");


// Implicit Coercion in Conditionals

function coerceInConditionals(value) {
    if (value) {
      console.log(value, "is truthy");
    } else {
      console.log(value, "is falsy");
    }
  }
  coerceInConditionals(""); 
  coerceInConditionals(0); 
  coerceInConditionals("non-empty string");
  coerceInConditionals([]); 
  coerceInConditionals(null);
  coerceInConditionals({});