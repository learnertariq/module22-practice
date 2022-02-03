function getArea(a, b, c) {
  const s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

console.log(getArea(10, 24, 20));
