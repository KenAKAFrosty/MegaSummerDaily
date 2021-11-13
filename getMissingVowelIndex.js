const VOWEL_INDEXES = { 
    "a":0,
    "e":1,
    "i":2,
    "o":3,
    "u":4
}

function getMissingVowelIndex(sentenceWithAllVowelsButOne){ 
    for (vowel in VOWEL_INDEXES){ 
        if (!sentenceWithAllVowelsButOne.includes(vowel)){ 
            return VOWEL_INDEXES[vowel];
        }
    }
}

console.log(getMissingVowelIndex("John Doe hs seven red pples under his bsket"), 0)
console.log(getMissingVowelIndex("Bb Smith sent us six neatly arranged range bicycles"), 3)
console.log(getMissingVowelIndex("eiou"), 0);
console.log(getMissingVowelIndex("aiou"), 1);
console.log(getMissingVowelIndex("aeou"), 2);
console.log(getMissingVowelIndex("aeiu"), 3);
console.log(getMissingVowelIndex("aeio"), 4);


/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/