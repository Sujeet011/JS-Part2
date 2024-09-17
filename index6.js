// Switch case

// Basic switch case 

function getDayOfWeek(dayNumber) {
    switch(dayNumber) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return 'Invalid day number';
    }
  }
  
  console.log(getDayOfWeek(3));
  console.log(getDayOfWeek(5));
  
console.log("--------------------------");
  //Switch with Fall-through

  function getDayOfWeek(dayNumber) {
    switch(dayNumber) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
      case 7:
        return 'Weekend';
      default:
        return 'Invalid day number';
    }
  }
  
  console.log(getDayOfWeek(6));
  
  console.log("--------------------------");

  //Switch Case with Multiple Conditions

  function classifyAnimal(animal) {
    switch(animal.toLowerCase()) {
      case 'dog':
      case 'cat':
      case 'elephant':
        return 'Mammal';
      case 'eagle':
      case 'sparrow':
      case 'parrot':
        return 'Bird';
      case 'snake':
      case 'lizard':
      case 'crocodile':
        return 'Reptile';
      case 'frog':
        return 'Amphibian';
      default:
        return 'Unknown animal classification';
    }
  }
  
  console.log(classifyAnimal('dog'));       
  console.log(classifyAnimal('eagle'));     
  console.log(classifyAnimal('snake'));     
  