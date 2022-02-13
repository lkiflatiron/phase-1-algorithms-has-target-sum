function hasTargetSum(array, target) {
  // Write your algorithm here
  let objectNums = {}
  for (let i = 0; i < array.length; i++) {
    if (objectNums[array[i]]) return true
    objectNums[ target - array[i] ] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  loop through array.  
  find complement of array number.
  if number is in object, return true
  else, put complement in object
  after loop, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
