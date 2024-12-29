function targetSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

const nums = [2, 7, 11, 15];
let target = 9;

console.log(targetSum(nums, target)); // [0, 1]

target = 14;
console.log(targetSum(nums, target)); // []

