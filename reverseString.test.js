function reverseString(str) {
    if (typeof str !== "string")
        return null;
    let reversedChars = "";
    for (let i = str.length-1; i >= 0; i--){  
        reversedChars += str[i];
    }
    return reversedChars;
}

describe("reverseString", () => {
  test("returns null when given an integer argument", () => {
    expect(reverseString(42)).toBe(null);
  });
  test("returns null when given an array argument", () => {
    expect(reverseString(["array","of","strings"])).toBe(null);
  });
  test("reverses 'cat mom'", () => {
    expect(reverseString('cat mom')).toBe('mom tac');
  });
  test("reverses '' (sends back empty string)", () => {
    expect(reverseString('')).toBe('');
  });
});

//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!
