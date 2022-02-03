function getTotalAnimals(miles) {
  let animals = 0;
  for (let i = 1; i <= miles; i++) {
    // when you are travelling under 10 miles
    if (i <= 10) {
      animals += 10;
    }
    // when you are travelling above 10 and under 20 miles
    if (i > 10 && i <= 20) {
      animals += 50;
    }
    // when you are travelling above 20
    if (i > 20) {
      animals += 100;
    }
  }

  return animals;
}

console.log(getTotalAnimals(22));
