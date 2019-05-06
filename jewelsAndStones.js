/*
You're given strings J representing the types of stones that are jewels, and S 
representing the stones you have.  Each character in S is a type of stone you 
have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are 
letters. Letters are case sensitive, so "a" is considered a different type of 
stone from "A".
*/

var numJewelsInStones = function (J, S) {
    // convert the jewels array to set for fast lookup time
    const jewels = new Set(J);
    // create count variable to keep track of count
    let count = 0;
    // iterate thru stone, and incrementing count by 1 if the stone is included
    // in the set
    for (let char of S) if (jewels.has(char)) count++;
    return count
};