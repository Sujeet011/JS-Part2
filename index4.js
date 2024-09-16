//Identify Statement vs Expression

//Expression

2 + 2; // This is an expression that evaluates to 4.
"Hello" + " World"; // This is an expression that evaluates to "Hello World". 

//Statement
for (let i = 0; i < 5; i++){
    console.log(i);
}


console.log("-------------------------")
// Expression in Function

function expressionInFunction(a, b) {
    return a + b; 
  }
  
  if (expressionInFunction(5, 10) > 10) {
    console.log("The result is greater than 10");
  } else {
    console.log("The result is 10 or less");
  }
  
console.log("--------------------------")
 
// Complex Expression in Conditional

function complexExpression(a, b, c) {
    const sum = a + b; // Sum of a and b
    const product = b * c; // Product of b and c
  
    console.log("Sum:", sum);
    console.log("Product:", product);
  
    if (sum > 10 && product < 20) {
      return "Sum is greater than 10 and product is less than 20";
    } else if (sum <= 10 && product >= 20) {
      return "Sum is 10 or less and product is 20 or more";
    } else {
      return "Conditions not met";
    }
  }
  
console.log(complexExpression(6, 3, 5)); 
console.log(complexExpression(4, 7, 3)); 
console.log(complexExpression(5, 2, 10));