//Parenthetical code is ( if that character doesn't repeat in the original string, ) if it does. 
function getParentheticalCodeFrom(str) {
  if (typeof str != "string") return null;
  let lowercaseStr = str.toLowerCase()
  return convertToParentheticalCode(lowercaseStr);
}


function convertToParentheticalCode(lowercaseStr){ 
    let returnStr = "";
    for (let i = 0; i < lowercaseStr.length; i++) {
        const char = lowercaseStr[i];
        if (lowercaseStr.indexOf(char) === lowercaseStr.lastIndexOf(char)) {
          returnStr += "(";
        } else {
          returnStr += ")";
        }
      }
    return returnStr
}


function test() {
  console.log(
    getParentheticalCodeFrom(1234) === null,
    "Given number instead of string"
  );
  console.log(
    getParentheticalCodeFrom(["recede"]) === null,
    "Given array with string element instead of string"
  );
  console.log(
    getParentheticalCodeFrom({ keyword: "recede" }) === null,
    "Given object with a k:v pair where value is string, instead of string"
  );
  console.log(
    typeof getParentheticalCodeFrom("din") === "string",
    "Returning a string"
  );
  console.log(
    getParentheticalCodeFrom("din") === "(((",
    "short word no repeats"
  );
  console.log(
    getParentheticalCodeFrom("recede") === "()()()",
    "Repeats and a non-repeat"
  );
  console.log(
    getParentheticalCodeFrom("succeSS") === ")())())",
    getParentheticalCodeFrom("succeSS"),
    "Repeats and a non-repeat with capitalization trap"
  );
  console.log(
    getParentheticalCodeFrom("(( @") === "))((",
    "Symbols, including the parentheses themselves"
  );
  console.log(getParentheticalCodeFrom("") === "", "Empty string");
}

test();