// For loop 

// Basic For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
console.log("-----------------------")
  // For Loop with Array

  function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  const stringArray = ["apple", "banana", "cherry"];
  printArrayElements(stringArray);

  console.log("--------------------------------------------")

  //Nested For Loop

  function createMultiplicationTable(n) {
    const table = [];
  
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
  
    return table;
  }

  const multiplicationTable = createMultiplicationTable(10);
  console.log(multiplicationTable);
 
  