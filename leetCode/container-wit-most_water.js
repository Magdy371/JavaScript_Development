// DESCRIPTION (inspired by Leetcode.com)
// Given an array heights where each element represents the height of a vertical line, pick two lines to act
//  as the walls of a container. Return the maximum area (amount of water) the container can hold.

// What is area? Width × height, where width is the distance between walls, and height is the shorter wall 
// (water overflows at the shorter wall).

function waterContainer(arr) {
    // Initialize two pointers at the beginning and end of the array
    let left = 0, right = heights.length - 1;
    let best = 0;
    // Use two-pointer technique to find maximum area
    while (left < right) {
        // Calculate the area formed by the current two walls
        const width = right - left;
        const height = Math.min(heights[left], heights[right]); // Height is limited by shorter wall
        const current_area = width * height;
        // Update maximum area if current area is larger
        best = Math.max(best, current_area);
        // Move the pointer with smaller height inward to potentially find larger area
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return best;
}