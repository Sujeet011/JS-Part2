//Identify Type Using typeof

function identifyType(value) {
    console.log(typeof value);
  }
  identifyType(42);
  identifyType("Hello, World!");
  identifyType(true); 
  identifyType([]); 
  identifyType({}); 
  identifyType(function() {});  

  console.log("-----------------------")

  // Check Object vs Array

  function isArrayOrObject(value) {
    if (Array.isArray(value)) {
      return "Array";
    } else if (typeof value === "object" && value !== null) {
      return "Object";
    } else {
      return "Neither Array nor Object";
    }
  }

  console.log(isArrayOrObject([1, 2, 3]));
  console.log(isArrayOrObject({ key: 'value' }));
  console.log(isArrayOrObject(42));
  console.log(isArrayOrObject(null));

  console.log("------------------------------");


  //Complex Type Identification

  function identifyComplexType(values){
    return values.map(value => {
        if (Array.isArray(value)){
            return "Array";
        } else if (value instanceof Date){
            return "Data";
        } else if (typeof value === "object") {
            return "Object";
        } else if (typeof value === "function") {
            return "Function";
        } else {
            return typeof value;
          }
    });
  }

  const mixedArray = [
    42, 
    "Hello", 
    true, 
    [], 
    {}, 
    function() {}, 
    new Date(), 
    null
  ];

  console.log(identifyComplexType(mixedArray));