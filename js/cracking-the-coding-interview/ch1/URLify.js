/*   1.3 - URLify
Write a method that replaces all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to account for the additional characters. */

// Ask Interviewer:

/* Valuable methods to consider:
> .trim() - removes all leading and trailing whitespace
> .substring(begining index, ending index) - shortens string to the boundaries defined
*/
const url = function makeStringURL(string, length){
  string.trim();
  const stringFix = string.split(' ').join('%20');
  return stringFix;
};

url("Mr John Smith");
