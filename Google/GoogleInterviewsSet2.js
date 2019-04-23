	/*
		A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

		Write a function to determine if a number is strobogrammatic. The number is represented as a string.

		Example 1:

		Input:  "69"
		Output: true

		Example 2:

		Input:  "88"
		Output: true

		Example 3:

		Input:  "962"
		Output: false
	*/

	/**
	 * @param {string} num
	 * @return {boolean}
	 */
	 var isStrobogrammatic = (num) => {

	 };

	/*  
		Question2: Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

		Example:

		Input: nums = [3,5,2,1,6,4]
		Output: One possible answer is [3,5,1,6,2,4]
	*/

	/**
	 * @param {number[]} nums
	 * @return {void} Do not return anything, modify nums in-place instead.
	 */
	 var wiggleSort = (nums) => {

	 };

	/*
		Design a Phone Directory which supports the following operations:

	    get: Provide a number which is not assigned to anyone.
	    check: Check if a number is available or not.
	    release: Recycle or release a number.

		Example:

		// Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
		PhoneDirectory directory = new PhoneDirectory(3);

		// It can return any available phone number. Here we assume it returns 0.
		directory.get();

		// Assume it returns 1.
		directory.get();

		// The number 2 is available, so return true.
		directory.check(2);

		// It returns 2, the only number that is left.
		directory.get();

		// The number 2 is no longer available, so return false.
		directory.check(2);

		// Release number 2 back to the pool.
		directory.release(2);

		// Number 2 is available again, return true.
		directory.check(2);
	*/



	/**
	 * Initialize your data structure here
	        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
	 * @param {number} maxNumbers
	 */
	var PhoneDirectory = function(maxNumbers) {
	    
	};

	/**
	 * Provide a number which is not assigned to anyone.
	        @return - Return an available number. Return -1 if none is available.
	 * @return {number}
	 */
	PhoneDirectory.prototype.get = function() {
	    
	};

	/**
	 * Check if a number is available or not. 
	 * @param {number} number
	 * @return {boolean}
	 */
	PhoneDirectory.prototype.check = function(number) {
	    
	};

	/**
	 * Recycle or release a number. 
	 * @param {number} number
	 * @return {void}
	 */
	PhoneDirectory.prototype.release = function(number) {
	    
	};

	/** 
	 * Your PhoneDirectory object will be instantiated and called as such:
	 * var obj = new PhoneDirectory(maxNumbers)
	 * var param_1 = obj.get()
	 * var param_2 = obj.check(number)
	 * obj.release(number)
	 */