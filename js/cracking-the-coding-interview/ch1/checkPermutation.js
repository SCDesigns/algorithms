/*   1.2 - Check Permutation
Implement an Algorithm to determine if two strings are permutations of each other -
That is, do they possess the same strings but in a different arrangement? */

// Ask Interviewer: Is the comparison case-sensitive? Does white space matter

// ***Right away we can eliminate any strings in which the lengths differ, as obviously this inicates a character difference.***
const permCheck = function checkPermutation(string1, string2){
    if (string1.length !== string2.length){
      return false;
    } else {
      string1.split('').sort().join('');
      string2.split('').sort().join('');
      if (string1 === string2){
        return true;
      }  else {
        return false;
      }
    }
};

permCheck("racecar","racecar");
permCheck("string1","string2");
