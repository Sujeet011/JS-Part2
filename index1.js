
// Basic Type Conversion

function convertToNumber(value) {
    return Number(value);
  }

console.log(convertToNumber("10"));  
console.log(convertToNumber("11.5"));  
console.log(convertToNumber(true));    
console.log(convertToNumber(false));   
console.log(convertToNumber("abc")); 

console.log("------------------------")

// String Conversion

function convertToString(value) {
    return String(value);
  }

console.log(convertToString(123));          
console.log(convertToString(true));         
console.log(convertToString([1, 2, 3]));  
console.log(convertToString({ key: 'value' }));

console.log("------------------------")

// Complex Type Conversion

function convertAndCompare(a, b) {
    
    const numA = Number(a);
    const numB = Number(b);
    
    return numA === numB;
  }

console.log(convertAndCompare("10", 10));      
console.log(convertAndCompare(false, 0));       
console.log(convertAndCompare("20.5", 20.5));    
console.log(convertAndCompare("abc", 10));       
console.log(convertAndCompare(true, "1"));  