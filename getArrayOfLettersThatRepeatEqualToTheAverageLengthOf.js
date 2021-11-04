
function getArrayOfLettersThatRepeatEqualToTheAverageLengthOf(repeatingLettersArray){ 
    if (!Array.isArray(repeatingLettersArray))
        return null;
    const averageRepeatCount = getAverageRepeatCount(repeatingLettersArray);
    return repeatingLettersArray.map(letters => letters[0].repeat(averageRepeatCount) );
}


function getAverageRepeatCount(repeatingLettersArray){ 
    const sum = repeatingLettersArray.reduce( (sum,e) => sum += e.length, 0);
    return Math.round( sum / repeatingLettersArray.length );
}








function areEqual(array1, array2){ 
    if (array1.length != array2.length)
        return false;
    for (let i = 0; i < array1.length; i++){ 
        if (array1[i] !== array2[i])
            return false;
    }
    return true;
}


console.log(areEqual( 
    getArrayOfLettersThatRepeatEqualToTheAverageLengthOf(
        ['aa', 'bbb', 'cccc'] ), 
    ['aaa', 'bbb', 'ccc'] )
)
console.log(areEqual( 
    getArrayOfLettersThatRepeatEqualToTheAverageLengthOf(
        ['u', 'y'] ), 
    ['u', 'y'] )
)
console.log(areEqual( 
    getArrayOfLettersThatRepeatEqualToTheAverageLengthOf(
        ['aa', 'bb', 'ddd', 'eee'] ), 
    ['aaa', 'bbb', 'ddd', 'eee'] )
)



/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/