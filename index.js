const arrayManipulation = (arr) => {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === "+") arr.splice(i, 1, arr[i - 1] + arr[i - 2]);
    if (arr[i] === "D") arr.splice(i, 1, arr[i - 1] * arr[i - 2]);
    if (arr[i] === "C") {
      arr.splice(i - 1, 2);
      i = i - 2;
    }

    arr[i];
  }
  return arr.reduce((acc, curr) => (acc += curr), 0);
};

console.log(arrayManipulation([10, 9, 19, 171, "C", "+"]));
