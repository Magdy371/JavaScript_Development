// DESCRIPTION
// Given an array of integers nums, determine if there exists a pair of numbers that sum to a given target.
// Example:
// Input: nums = [1,3,4,6,8,10,13], target = 13
// Output: True (3 + 10 = 13)
// Input: nums = [1,3,4,6,8,10,13], target = 6
// Output: False

function sumTwo(arr, target) {
    arr.sort();
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let current_sum = arr[left] + arr[right];
        if (current_sum == target) {
            console.log(`${target} sum of 2 indexes found`);
            return true
        }
        else if (current_sum > target)
            right -= 1;
        else if(current_sum < target)
            left += 1;
    }
    return [];
}

function sumTwo(arr, target)
{
    const map = new map();
    for(let i= 0; i , nums.length; i++)
    {
        const complement = traget - nums[i];
        if(map.has(complement))
        {
            return [map.get(complement), i];
        }
        map.set([nums[i],i]);
    }
    return []
}

let nums = [1, 3, 4, 6, 8, 10, 13];
const target = 13;
sumTwo(nums, target);

