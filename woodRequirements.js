function checkWR(chair = 1, table = 1, bed = 1) {
  const chairWood = 3 * chair;
  const tableWood = 10 * table;
  const bedWood = 50 * bed;

  console.log(chairWood);
  console.log(tableWood);
  console.log(bedWood);
}

checkWR(undefined, 2);