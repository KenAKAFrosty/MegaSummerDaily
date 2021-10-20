
function getNthSmallestNumber(arrayOfNumbers, n) {
  if (!Array.isArray(arrayOfNumbers)) return null;
  if (!Number.isInteger( n )) return null;
  if (containsNonNumbers(arrayOfNumbers)) return null;
  if (arrayOfNumbers.length < 3) return null;
  let ascendingArray = arrayOfNumbers.sort( (a,b) => a-b)
  return ascendingArray[n - 1];
}

function containsNonNumbers(array){ 
    let arrayOfAnyNonNumbers = array.filter(e => {
      if (typeof e != "number") return e
    })
    if (arrayOfAnyNonNumbers.length > 0)
      return true;
    else
      return false;
} 


























function test() {
  console.log(
    getNthSmallestNumber([3, 1, 2], 2) === 2,
    "small simple list of positive integers"
  );
  console.log(
    getNthSmallestNumber([15, 20, 7, 10, 4, 3], 3) === 7,
    "slightly larger list, all still positive"
  );
  console.log(
    getNthSmallestNumber([177, 225, 243, -169, -12, -5, 2, 92], 5) === 92,
    "larger list with negatives"
  );
  console.log(
    getNthSmallestNumber([2, 92], 5) === null,
    "length too small"
  );
  console.log(
    getNthSmallestNumber([3, 3, 3, 3 ,3 ,3 ,3], 2) === 3,
    "all elements are equal"
  );
  console.log(
    getNthSmallestNumber(["3", "345", 3, 3 ,3 ,3 ,3], 2) === null,
    "Number given as string"
  );
  console.log(
    getNthSmallestNumber([3, [34], 3, 3 ,3 ,3 ,3], 2) === null,
    "Number given as array"
  );
  console.log(
    getNthSmallestNumber([3, {"number":34}, 3, 3 ,3 ,3 ,3], 2) === null,
    "Number given as part of object"
  );
  console.log(
    getNthSmallestNumber("String", 2) === null,
    "Entire array given as string"
  );
}

test();