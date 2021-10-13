// splice(start, deleteCount, item)
// slice(start, end)
//  returns a shallow copy of a portion of an array into a new array object selected from start to end

// reduce((acc, curr)=> acc+curr);
// acc: the value resulting from the previous call to callbackfn
// curr: value of the current elem;
// example: let sum = [1,2,3].reduce((acc, curr)=>acc+=curr);
// start: remove elements starting from this index
// deleteCount: A number indicating the number of elements to remve beginning from start
// item: The element(s) to add to the array beginning from start
function arrayManipulation(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
    if (i > 1) {
      if (arr[i] === "+") {
        result.push(result[result.length - 1] + result[result.length - 2]);
      }
      if (arr[i] === "D") {
        result.push(result[result.length - 1] * result[result.length - 2]);
      }
      if (arr[i] === "C") {
        result.pop();
      }
    }
  }
  console.log(result.reduce((acc, curr) => (acc += curr)));
}

arrayManipulation([10, 9, "+", "D", "C", "+"]);
