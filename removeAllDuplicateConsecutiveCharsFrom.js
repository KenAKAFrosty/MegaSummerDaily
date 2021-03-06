function removeAllDuplicateConsecutiveCharsFrom(arrayOfStrings) { 
    return arrayOfStrings.map( str => removeDuplicateConsecutiveChars(str) );
}

function removeDuplicateConsecutiveChars(string){ 
    const filteredArrayOfChars = [ ... string ].filter( (thisChar, index, stringArray) => { 
        const nextChar = stringArray[index + 1];
        return (thisChar !== nextChar);
    });
    return filteredArrayOfChars.join('');
}


console.log(removeAllDuplicateConsecutiveCharsFrom(["abracadabra","allottee","assessee"]), ["abracadabra","alote","asese"]);
console.log(removeAllDuplicateConsecutiveCharsFrom(["kelless","keenness"]), ["keles","kenes"]);
console.log(removeAllDuplicateConsecutiveCharsFrom(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(removeAllDuplicateConsecutiveCharsFrom(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(removeAllDuplicateConsecutiveCharsFrom(["kelless","keenness"]), ['keles','kenes'])