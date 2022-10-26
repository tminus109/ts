You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string. Your task is to find the minimum number of required deletions.

Example:

s = AABAAB

Remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.

Function Description: complete the alternatingCharacters function.

alternatingCharacters has the following parameter(s): string s: a string.

Returns int: the minimum number of deletions required.

Input Format:

The first line contains an integer q, the number of queries. The next q lines each contain a string s to analyze.

Constraints:

1 <=q <= 10

1 <= length of s <= 10⁵

Each string s will consist only of characters A and B.

Sample Inputs:

AAAA BBBBB ABABABAB BABABA AAABBB

Sample Outputs:

3 4 0 0 4

https://www.hackerrank.com/challenges/alternating-characters/problem
