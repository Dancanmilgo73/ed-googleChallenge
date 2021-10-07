const arrayManipulation = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      arr.splice(i, 1, arr[i - 1] + arr[i - 2]);
    }
    if (arr[i] === "D") {
      arr.splice(
        i,
        1,
        arr.slice(0, i).reduce((acc, curr) => acc * curr)
      );
    }
    if (arr[i] === "C") {
      arr.splice(i - 1, 2);
      i = i - 2;
    }
  }
  console.log(arr.reduce((acc, curr) => (acc += curr)));
};

arrayManipulation([10, 9, 19, 171, "C", "+"]);
