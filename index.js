function average_age(people) {
    let totalAge = 0;
    for (let person of people) {
      totalAge += person.age;
    }
    const avgAge = totalAge / people.length;
    return avgAge.toFixed(2); // Round the average age to 2 decimal places
  }

  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Eve', age: 29 }
  ];
  
  const avgAge = average_age(people);
  console.log(avgAge); 