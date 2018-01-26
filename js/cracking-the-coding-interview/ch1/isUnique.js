/*   1.1 - Is Unique
Implement an Algorithm to determine if a string has all unique characters.
What if you cannot use additional data strcutures? */

const unique = function isUnique(string){
  for ( i=0;  i<string.length; i++ ){
    for ( j=i+1;  j<string.length; j++ ){
      if (string[i] === string[j]) return false;
    }
  }
  return true;
};

unique("Is this Unique?");
unique("Or this?");
