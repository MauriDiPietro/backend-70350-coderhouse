const products = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const keysNoRepeat = [];
let sumTotal = 0;

for (const prod of products) {
  const keys = Object.keys(prod); //[manzanas, peras, huevos, jugos]
  const values = Object.values(prod); //[3,2,1,1,6]
  for (const key of keys) {
    if (!keysNoRepeat.includes(key)) keysNoRepeat.push(key);
  }
  for (const val of values) {
    sumTotal += val;
  }
}

console.log("products: ", keysNoRepeat);
console.log("total: ", sumTotal);
