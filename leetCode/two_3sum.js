
function threeSum(nums) {
    const result = [];

    // Step 1: Sort numbers in ascending order
    nums.sort((a, b) => a - b);

    // Step 2: Handle impossible cases
    if (nums.length < 3 || nums[0] > 0) {
        return result;
    }

    // Step 3: Choose the first number
    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate starting numbers
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Step 4: Initialize two pointers
        let left = i + 1;
        let right = nums.length - 1;

        // Step 5: Search for the other two numbers
        while (left < right) {
            const total =
                nums[i] + nums[left] + nums[right];

            if (total < 0) {
                // Sum is too small
                left++;
            } else if (total > 0) {
                // Sum is too large
                right--;
            } else {
                // Found a valid triplet
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                // Skip duplicate left values
                while (
                    left < right &&
                    nums[left] === nums[left + 1]
                ) {
                    left++;
                }

                // Skip duplicate right values
                while (
                    left < right &&
                    nums[right] === nums[right - 1]
                ) {
                    right--;
                }

                // Move both pointers
                left++;
                right--;
            }
        }
    }

    // Step 6: Return all unique triplets
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -1]));
// [[-1, -1, 2], [-1, 0, 1]]
