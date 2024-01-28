const missingNumber = (nums) => {
  let sum = (nums.length * (nums.length + 1)) / 2; // Sum rule in mathematics
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
