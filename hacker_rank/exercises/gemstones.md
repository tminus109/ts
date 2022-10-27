There is a collection of rocks where each rock has various minerals embedded in it. Each type of mineral is designated by a lowercase letter in the range ascii[a-z]. There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection. Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.

Example: arr = ["abc", "abc", "bc"]

The minerals b and c appear in each rock, so there are 2 gemstones.

Function Description: complete the gemstones function.

gemstones has the following parameter(s): string arr[n]: an array of strings.

Returns int: the number of gemstones found.

Input Format: The first line consists of an integer n, the size of arr. Each of the next n lines contains a string arr[i] where each letter represents an occurrence of a mineral in the current rock.

Constraints:

1 <= n <= 100

1 <= | arr[i] | <= 100

Each composition arr[i] consists of only lower-case Latin letters ('a'-'z').

Sample Input: abcdde baccd eeabg

Sample Output: 2

https://www.hackerrank.com/challenges/gem-stones/problem
