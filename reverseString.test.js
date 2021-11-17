import {reverseString} from "./reverseString.js"
describe("a string argument returns a string", () => { 
    expect(typeof reverseString("hello")).toBe("string");
});