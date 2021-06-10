function reverseString(str) {
  // type your code here
  let result = []
  split = str.split("")
  for (i = split.length; i >= 0; i--) {
    result.push(split[i])
  }
  return result.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  // my tests
  console.log("Expecting: 'tset'")
  console.log("=>", reverseString("test"))
}

module.exports = reverseString;

// Please add your pseudocode to this file
  // initialize empty array called results
  // split string into array
  // iterate through array starting at last element
  // push each element into results array
  // return results array joined at commas

// And a written explanation of your solution
