// worldVariables.js

// define 3x3 binary patterns for digits 0-9
/* defines a list of how each digit, 0-9 appears on a 3x3 pixel grid, using only binary values:
    1 means pixel is on, black filled
    0 means pixel is off , white empty
*/

let digitPatterns =
[
    // 0
    [
        1, 1, 1,
        1, 0, 1,
        1, 1, 1
    ],
    // 1
    [
        0, 1, 0,
        0, 1, 0,
        0, 1, 0
    ],
    // 2
    [
        1, 1, 1,
        0, 1, 1,
        1, 1, 0
    ],
    // 3
    [
        1, 1, 1,
        0, 1, 1,
        1, 1, 1
    ],
    // 4
    [
        1, 0, 1,
        1, 1, 1,
        0, 0, 1
    ],
    // 5
    [
        1, 1, 1,
        1, 1, 0,
        0, 1, 1
    ],
    // 6
    [
        1, 1, 1,
        1, 1, 0,
        1, 1, 1
    ],
    // 7
    [
        1, 1, 0,
        0, 1, 0,
        0, 1, 0
    ],
    // 8
    [
        1, 1, 1,
        1, 1, 1,
        1, 1, 1
    ],
    // 9
    [
        1, 1, 1,
        1, 1, 1,
        0, 1, 1
    ]
];

// sample input pattern to test
// number 7
let inputPattern =
[
    1, 1, 0,
    0, 1, 0,
    0, 1, 0
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

