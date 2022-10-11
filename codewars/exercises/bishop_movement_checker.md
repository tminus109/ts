You are doing an exercise for chess class.

Your job given a bishop's start position (pos1 / startPos), find if the end position (pos2 / endPos) given is possible within n moves.

INPUT: startPos (1st param) ==> The position at which bishop is at. endPos (2nd param) ==> The position at which he is supposed to end at. number (3rd param) ==> The number of moves allowed to bishop to move to said position

BOARD: 8 ||#||#||#||#| 7 |#||#||#||#|| 6 ||#||#||#||#| 5 |#||#||#||#|| 4 ||#||#||#||#| 3 |#||#||#||#|| 2 ||#||#||#||#| 1 |#||#||#||#||

a b c d e f g h

The board is an 8 x 8 board goes from a1 to h8.

BISHOP MOVEMENT: The bishop chess piece moves in any direction diagonally. Chess rules state that there is no limit to the number of squares a bishop can travel on the chessboard, as long as there is not another piece obstructing its path. Bishops capture opposing pieces by landing on the square occupied by an enemy piece.

OUTPUT: Find out whether within n moves he can move from start pos to end pos. If he can return true, if not return false.

NOTES: Return true if start and end position are same; even if number of moves is 0. Both start and end positions will always be valid (so within a1 ---> h8). Input positions will always follow this pattern: f1 (i.e: Char (representing one of a-h) - Number (representing one of 1-8) on chess board). The alphabet will always be lowercase followed immediately by number no space. For our purpose, chess board is always empty, i.e: the bishop is the only one that can be played. The number of moves n will always be whole number i.e: 0 or greater. Your bishop may only move using its predefined moment method (it may not act like a queen or knight).

https://www.codewars.com/kata/6135e4f40cffda0007ce356b
