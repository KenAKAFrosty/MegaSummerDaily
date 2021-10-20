
function getCountOfCombinationsOfUniqueSubArrayElementsFrom(arrayOfArrays) {
  let arrayOfUniques = getArrayOfSetsFrom(arrayOfArrays);
  let totalProduct = 1;
  arrayOfUniques.forEach(e => totalProduct *= e.size);
  return totalProduct;
}

function getArrayOfSetsFrom(arrayOfArrays){ 
  return arrayOfArrays.map(e => new Set(e))
}









// function getCopyWithSubArraysThatHaveNoDuplicates(arrayOfArrays) {
//   return arrayOfArrays.reduce((rebuiltArray, subArray) => {
//     let newSubArray = getCopyWithNoDuplicateElements(subArray);
//     rebuiltArray.push(newSubArray);
//     return rebuiltArray;
//   }, []);
// }

// function getCopyWithNoDuplicateElements(array) {
//   return array.reduce((uniqueElementsArray, element) => {
//     if (!uniqueElementsArray.includes(element)) {
//       uniqueElementsArray.push(element);
//     }
//     return uniqueElementsArray;
//   }, []);
// }









/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
*/

/* Algo
- Get rid of duplicate elements
- Identify the length of each input subarray
- Multiply the length of each input by each other and return that result
*/




function arrCombinations(arr){ 
  return arr.map(s => new Set(s).size).reduce((a,c)=> a*c,1)
}




console.time("multi function");
console.log(
  getCountOfCombinationsOfUniqueSubArrayElementsFrom([[1,2],[4],[5,6]]),4,
  getCountOfCombinationsOfUniqueSubArrayElementsFrom([[1,2],[4,4],[5,6,6]]),4,
  getCountOfCombinationsOfUniqueSubArrayElementsFrom([[1,2],[3,4],[5,6]]),8,
  getCountOfCombinationsOfUniqueSubArrayElementsFrom([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72,
)
console.timeEnd("multi function");

console.time("chained array");
console.log(
  arrCombinations([[1,2],[4],[5,6]]),4,
  arrCombinations([[1,2],[4,4],[5,6,6]]),4,
  arrCombinations([[1,2],[3,4],[5,6]]),8,
  arrCombinations([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72,
)
console.timeEnd("chained array");
