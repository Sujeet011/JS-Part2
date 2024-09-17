// While loop

// Basic While loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("-------------------------")

//While Loop with Condition

function countDownFrom(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}

countDownFrom(5);

console.log("-----------------");

// While loop with Break Condition

function findFirstEven(numbers) {

    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] % 2 === 0) {
        return numbers[i];
      }
      i++;
    }
    return 'No even number found';
}

console.log(findFirstEven([1, 3, 5, 7, 8, 11, 15]));