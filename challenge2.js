// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

function minMax(arr) {
	function sortArr(a, b) {
		return a - b;
	}
	let sorted = arr.sort(sortArr);
	
	let minMaxArr = [];
	
	minMaxArr.push(sorted[0]);
	minMaxArr.push(sorted[sorted.length-1]);
	
	return minMaxArr;
	
}