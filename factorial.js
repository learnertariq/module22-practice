const num = 4;

// loop factorial
let fact = 1;
for (let i = num; i > 0; i--) {
  fact *= i;
}
console.log("loop factorial :--> " + fact);

// recursive factorial
function recFactorial(num) {
  if (num == 1 || num == 0) return 1;
  return num * recFactorial(num - 1);
}

console.log("recursive factorial :--> " + recFactorial(num));
