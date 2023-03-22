let obj = {
  key: "value",
};

console.log(obj);

delete obj["key"];

console.log(obj);

// .reduce();
// .some()
// .every()
function sumarno(arr) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }

  return sum;
}

let biggerNumbers = [];

let array = [10, 20, 30, 40, 50];

let suma = array.reduce(function (prev, curr) {
  console.log(`Prev is:${prev}  and Current is ${curr}`);
  return prev + curr;
}, 0);

let sumaa = array.reduce((p, c) => p + c);

console.log("Suma is " + suma);

let arr = [3, "a", "a", "a", 3, 2];

let lookup = {};
for (const el of arr) {
  if (lookup[el]) {
    lookup[el] = lookup[el] + 1;
  } else {
    lookup[el] = 1;
  }
}
console.log(lookup);

let lookup2 = arr.reduce(
  function (prev, curr) {
    if (prev[curr]) {
      prev[curr] = prev[curr] + 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  },
  { key: "value" }
);

let lookup3 = arr.reduce((p, c) => {
  p[c] ? (p[c] = p[c] + 1) : (p[c] = 1);
  return p;
}, {});

console.log(lookup2);
console.log(lookup3);

let a = 1;
if (a > 10) {
  //   return "pogolem";
} else {
  //   return "pomal";
}

console.log(a > 10 ? (5 > 10 ? "da" : "ne") : "pomal");

let nums = [10, 20, 30, 40, 50];

let filteredBiggerThan30 = nums.reduce(function (prev, curr) {
  console.log(prev, curr);
  if (curr > 30) {
    prev.push(curr);
  }
  return prev;
}, []);

console.log(filteredBiggerThan30);

let mapped = nums.reduce(function (prev, curr) {
  prev.push(curr * curr);
  return prev;
}, []);

console.log(mapped);

let everyResult = [10, 20, 30].every(function (el) {
  return el > 5;
});

let someResult = [10, 20, 30].some(function (el) {
  return el > 5;
});
//.includes() e varijaca na some;

console.log(everyResult);
console.log(someResult);

// DOM

