/**
 * @param {string[]} strs
 * @return {string}
 */

/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

console.log("Script is running");

var longestCommonPrefix = function (strs) {
	let completePrefix = "";
	strs = strs.sort((a, b) => {
		return a.length - b.length;
	});
	for (let index = 0; index < strs[0].length; index++) {
		let prefixToCheck = strs[0].charAt(index);
		for (let jndex = 0; jndex < strs.length; jndex++) {
			if (prefixToCheck !== strs[jndex].charAt(index)) {
				return completePrefix;
			}
		}
		completePrefix = completePrefix + prefixToCheck;
	}
	return completePrefix;
};

const strs = [""];
let test = longestCommonPrefix(strs);
console.log(test);
